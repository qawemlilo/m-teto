<template>
  <div class="container">
    <div style="padding-top:40%">
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
        <v-row>
         <v-col cols="12" sm="6">
          <v-text-field
            label="Search"
            single-line
            solo
          ></v-text-field>
         </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>
<style>
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