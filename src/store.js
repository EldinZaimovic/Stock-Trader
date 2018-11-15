import Vue from "vue";
import Vuex from "vuex";

import stocks from './store/stocks.js';
import portfolio from './store/portfolio.js';
import * as actions from './store/actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio
  },


});
