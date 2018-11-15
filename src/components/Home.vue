<template>
<v-container fluid>
    <v-responsive>
        <v-container fill-height>
            <v-layout align-center>
                <v-flex>
                    <h3 class="display-3">Trade or view your portfolio</h3>
                    <span class="subheading">You may Save & Load your Data</span>
                    <br>
                    <span class="subheading">Click on 'End Day' to begin a New Day!</span>
                    <v-divider class="my-3"></v-divider>
                    <div class="title mb-3">Your Funds: {{funds}} $</div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-responsive>
</v-container>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style scoped>
</style>
