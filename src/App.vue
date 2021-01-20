<template>
  <router-view />
</template>

<script>
 import { mapActions } from "vuex";
export default {
  name: 'App',
  data() {
    return {
      token: localStorage.getItem("token")
    }
  },
  methods: {
     ...mapActions(['getUser'])
  },
  watch: {
    token(newtoken) {
      if(newtoken!==null) {
        this.getUser(JSON.parse(newtoken).value);
      }
    }
  },
}
</script>

<style scoped>
  /* @import url('http://kiratikreations.com/cdn/bootstrap-grid.css');
  @import url('http://kiratikreations.com/cdn/bootstrap.min.css');
  @import url('http://kiratikreations.com/cdn/drawer.min.css ');
  @import url('http://kiratikreations.com/cdn/jquery.emojiarea.css');
  @import url('http://kiratikreations.com/cdn/light-box.css');
  @import url('http://kiratikreations.com/cdn/responsive.css');
  @import url('http://kiratikreations.com/cdn/style.css');
  @import url('http://kiratikreations.com/cdn/styleayush.css');
  @import url('http://kiratikreations.com/cdn/styles.min.css'); */
</style>
