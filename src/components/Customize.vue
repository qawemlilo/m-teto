<template>
  <div class="container">
<audio controls ref="audioFile" style="visibility:hidden">
  <source src="../assets/teto-intro.mp3" type="audio/mpeg">
</audio>
    <div style="padding-top:40%">
<hgroup class="speech-bubble">
	<p>You can customize me and make me look cool</p>
</hgroup>
         <v-img
          :src="require('../assets/teto.gif')"
          class="my-3"
          contain
          width="60%"
          style="margin-left:20%"
        ></v-img>     
    </div>
    <div>
     <v-row>
       <v-color-picker  hide-canvas></v-color-picker>
     </v-row>
    </div>

    <div class="mt-10 mx-10">
      <v-btn color="normal" dark width="100%" @click="goToNext">Next >></v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
      ages: [10, 11, 12, 13, 14],
      results: ['Abortion clinics', 'Rape toolkiks', 'Gugulethu police station'],
      schools: ['Table view primary', 'Nyanga high school'],
      locations: ['Nyanga', 'Gugulethu', 'Table view'],
  }),

  methods: {
    goToNext() {
      this.$router.push('/assessment');
    }
  },

  mounted: function () {
    this.$nextTick(() => {
      this.$refs.audioFile.play();
    });
  }
};
</script>
<style scoped>
.container {
  height: 100%;
  vertical-align: middle;
  padding: 2rem;
  background-image: none!important;
  background-color: #FFF!important;
}

.theme--light.v-label {
  color: #000!important;
}

.v-application .primary--text {
    color: #000!important;
    caret-color: #000!important;
}

.speech-bubble {
	position: relative;
	background: #00f900;
	border-radius: .4em;
  font-size: 1.5rem;
  color: #FFF;
  padding:.8rem;
}

.speech-bubble:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 20px solid transparent;
	border-top-color: #00f900;
	border-bottom: 0;
	border-left: 0;
	margin-left: -10px;
	margin-bottom: -20px;
}
</style>