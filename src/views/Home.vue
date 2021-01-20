<template>
  <h1 @click="consoleUser">Home</h1>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Home",
  methods: {
    consoleUser() {
      console.log(JSON.parse(this.curruser));
    }
  },
computed: mapGetters(['curruser']),
  // mounted() {
  //   console.log(this.curruser)
  //   if(this.curruser === null) {
  //     let token = JSON.parse(localStorage.getItem("token"));
  //     if(token) {
  //       console.log(token);
  //       this.getUser(token.value)
  //     }
  //   }
  // }
}
</script>

<style>

</style>