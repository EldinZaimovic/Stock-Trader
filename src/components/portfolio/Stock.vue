<template>
<v-flex xs4>
    <v-card hover>
        <v-card-title class="justify-center" primary-title>
            <div>
                <h3 class="headline mb-0">{{stock.name}}</h3>
                <hr>
                <h4>Price: {{stock.price}}$ || Quantity {{stock.quantity}}</h4>
            </div>
        </v-card-title>

        <v-card-actions>
            <v-text-field 
            v-model="quantity" 
            :rules="rules"
            type="number"
            solo
            placeholder="Quantity"
            autofocus
            ></v-text-field>
            <v-btn large flat bottom color="green" 
            @click="sellStock" 
            :disabled="quantity<=0 || insufficientQuantity">
                Sell</v-btn>
        </v-card-actions>
    </v-card>
</v-flex>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: "",
      rules: [
        quantity => this.quantity <= this.stock.quantity || "Not enough Stocks"
      ]
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
</style>
