<template>
  <v-app>
    <v-content>
      <transition name="slide-left">
        <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

