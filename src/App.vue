<template>
<v-app>
  <Header/>
    <v-content>  
     <transition name="router-animation" mode="out-in" enter-active-class="animated slideInDown fast" leave-active-class="animated fadeOut faster">
        <router-view></router-view>    
        </transition>
    </v-content>
    <Footer/>
</v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  created() {
    this.$store.dispatch("initStocks");
  },
  data() {
    return {};
  }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>
