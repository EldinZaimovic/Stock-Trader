<template>
<v-toolbar app scroll-off-screen >
    <v-toolbar-items>
        <v-btn class="headline" to="/" flat>
            <span>STOCK</span>
            <span class="font-weight-light">TRADER</span>
        </v-btn>
        <v-btn to="/portfolio" flat>Portfolio</v-btn>
        <v-btn to="/stocks" flat>Stocks</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn @click="endDay" dark>End Day</v-btn>
    <v-menu offset-y>
        <v-btn slot="activator" flat>
            <v-icon>save</v-icon>
            Save & Load
        </v-btn>
        <v-list>
            <v-list-tile @click="saveData">Save Data </v-list-tile>
            <v-list-tile @click="loadData">Load Data</v-list-tile>
        </v-list>
    </v-menu>
    <v-icon>monetization_on</v-icon>
    <span class="font-weight-bold">Funds: {{funds}} $</span>
</v-toolbar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style scoped>
</style>
