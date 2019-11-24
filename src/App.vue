<template>
  <v-app>
    <v-content>
      <Results />
    </v-content>
  </v-app>
</template>

<script>
import Results from './components/Results';

export default {
  name: 'App',

  components: {
    Results,
  },

  data: () => ({
    //
  }),
};
</script>
