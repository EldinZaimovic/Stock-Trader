<template>
<v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" ></app-stock>
    </v-layout>
</v-container>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style scoped>
</style>
