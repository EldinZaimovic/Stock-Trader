<template>
<v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock"></app-stock>
    </v-layout>
</v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>

<style scoped>
</style>
