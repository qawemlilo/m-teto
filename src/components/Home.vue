<template>
  <div class="container">
<audio controls ref="audioFile" style="visibility:hidden">
  <source src="../assets/teto.mp3" type="audio/mpeg">
</audio>
    <div style="padding-top:40%">
<hgroup class="speech-bubble">
	<p>Hi there, <br>You can ask me anything</p>
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
      <v-form class="px-10">
        <v-row>
         <v-col cols="12" sm="6">
          <v-autocomplete solo single-line label="Search" :items="results" @change="goToResults"></v-autocomplete>
         </v-col>
        </v-row>
      </v-form>
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
    goToResults() {
      this.$router.push('/results');
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
  padding: 1rem;
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

.speech-bubble {
	position: relative;
	background: #ffffff;
	border-radius: .4em;
  padding: 1rem;
  font-size: 1.5rem;
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
	border-top-color: #ffffff;
	border-bottom: 0;
	border-left: 0;
	margin-left: -10px;
	margin-bottom: -20px;
}
</style>