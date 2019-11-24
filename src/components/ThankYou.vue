<template>
  <div class="container">
    <div style="padding-top:30%">
         <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          width="60%"
          style="margin-left:20%"
        ></v-img>     
    </div>
    <div class="text-center text-white" style="font-size:1.5rem">
      <p>Thank you for answering,
        <br>there is no wrong or right answer.
        <br>
        Everything you say is important
      </p>
    </div>

    <div class="mt-10 mx-10">
      <v-btn color="normal" dark width="100%" @click="goHome">Next >></v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThankYou',

    methods: {
      goHome() {
        this.$router.push('/home');
      }
    }
};
</script>
<style scoped>
.container {
  height: 100%;
  vertical-align: middle;
  padding: 0!important;
  background-image: url(../assets/bg.png);
  background-repeat: repeat;
}

.theme--light.v-label {
  color: #000!important;
}

.v-application .primary--text {
    color: #000!important;
    caret-color: #000!important;
}
</style>