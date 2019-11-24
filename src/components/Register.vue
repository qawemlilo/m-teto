<template>
  <div class="container">
    <div class="text-center pt-4">
         <h3>Register</h3>    
    </div>
    <div>
        <v-form class="px-5">
          <v-text-field label="Username" required></v-text-field>
          <v-text-field label="Password" required></v-text-field>
          <v-select :items="ages" :menu-props="{ top: true, offsetY: true }" label="Age"></v-select>
          <v-select :items="genders" :menu-props="{ top: true, offsetY: true }" label="Gender"></v-select>
          <v-autocomplete label="Location" hide-no-data :items="locations"></v-autocomplete>
          <v-autocomplete label="School" hide-no-data :items="schools"></v-autocomplete>
          <div class="my-2">
            <v-btn color="normal" dark width="100%">Register</v-btn>
          </div>
          <div class="my-5">
            Already have a member? <a href="#" class="text-danger">Login</a>
          </div>
        </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',

    data: () => ({
      ages: [10, 11, 12, 13, 14],
      genders: ['Boy', 'Girl', 'Trans boy', 'Trans girl', 'Prefer not say'],
      schools: ['Table view primary', 'Nyanga high school'],
      locations: ['Nyanga', 'Gugulethu', 'Table view'],
    }),
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