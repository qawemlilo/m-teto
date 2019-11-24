<template>
  <div class="container">
    <div style="padding-top:100px">
         <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          width="60%"
          style="margin-left:20%"
        ></v-img>     
    </div>
    <div>
        <v-form class="px-10">
          <v-text-field label="Username" required></v-text-field>
          <v-text-field label="Password" required></v-text-field>
          <div class="my-2">
            <v-btn color="normal" dark width="100%">Log in</v-btn>
          </div>
          <div class="my-5">
            No account? <router-link to="/register">Register</router-link>
          </div>
          <div class="mt-5 text-center">
            <a href="#" class="text-danger">Forgot password?</a>
          </div>
        </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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