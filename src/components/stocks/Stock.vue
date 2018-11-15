<template>
<v-flex xs4>
    <v-card hover>
        <v-card-title class="justify-center" primary-title>
            <div >
                <h3 class="headline mb-0">{{stock.name}}</h3>
                <hr>
                <h4>Price: {{stock.price}}$</h4>
            </div>
        </v-card-title>

        <v-card-actions>
            <v-text-field 
            :rules="rules"
            v-model="quantity" 
            type="number"
            solo
            placeholder="Quantity"
            autofocus
            ></v-text-field>
            <v-btn large flat bottom color="green" 
            @click="buyStock" 
            :disabled="quantity<=0 || insufficientFunds">
                Buy</v-btn>
        </v-card-actions>
    </v-card>
</v-flex>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: "",
      rules: [
        quantity =>
          this.quantity * this.stock.price <= this.funds || "Insufficient Funds"
      ]
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
</style>
