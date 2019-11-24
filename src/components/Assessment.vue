<template>
  <div class="container">
    <div style="background:#fff" class="px-4 py-4">
     <p>Do you understand what gender based violence is?</p>
     <v-radio-group v-model="do_you_know_gbv" :mandatory="false">
      <v-radio label="Yes" value="yes"></v-radio>
      <v-radio label="No" value="no"></v-radio>
     </v-radio-group>
    </div>

    <div style="background:#fff" class="mt-2 px-4 py-4" v-if="do_you_know_gbv == 'yes'">
     <p>Have you experienced gender based violence?</p>
     <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Yes" value="yes"></v-radio>
      <v-radio label="No" value="no"></v-radio>
     </v-radio-group>
    </div>

    <div style="background:#fff" class="mt-2 px-4 py-4" v-if="do_you_know_gbv == 'yes'">
     <p>Have you seen gender based violence?</p>
     <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Yes" value="radio-1"></v-radio>
      <v-radio label="No" value="radio-2"></v-radio>
     </v-radio-group>
    </div>

    <div style="background:#fff" class="mt-2 px-4 py-4" v-if="do_you_know_gbv == 'yes'">
     <p>Do you feel like you have committed gender based violence?</p>
     <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Yes" value="radio-1"></v-radio>
      <v-radio label="No" value="radio-2"></v-radio>
     </v-radio-group>
    </div>

    <div class="my-2"  v-if="do_you_know_gbv">
      <v-btn color="normal" dark width="100%">Next >></v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Assessment',

  data: () => ({
    do_you_know_gbv: null,
    radios: ''
  }),
};
</script>
<style>
.container {
  height: 100%;
  vertical-align: middle;
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