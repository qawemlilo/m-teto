
<template>
  <v-container fill-height>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12 d-flex flex-column>
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          width="50%"
          style="margin-left:25%"
        ></v-img>
      </v-flex>

      <v-flex d-flex flex-column>
        <v-form class="px-5">
          <v-text-field label="Username" required></v-text-field>
          <v-text-field label="Password" required></v-text-field>
        </v-form>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld'
};
</script>
<style>
.container {
  padding: 0!important;
  background-image: url(../assets/bg.png);
  background-repeat: repeat;
}
</style>
