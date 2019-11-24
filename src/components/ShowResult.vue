<template>
  <div class="container py-2 px-2">
  <v-card
    class="mx-auto"
    max-width="400"
    tile

  >
    <v-card-title>
      <v-btn icon @click="goBack">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-card-title>

    <v-list three-line>
      <template v-for="(item) in items">
        <v-list-item
          :key="item.title"
       
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            <v-rating v-model="rating"></v-rating>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <v-list two-line>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-phone</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Office</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

    </v-list>
    <div class="py-2 px-2 mb-5">
      <p><strong>Number of rape kids available at the station</strong></p>
      <ul>
        <li>Adult kits = 5</li>
        <li>Children's kits = 10</li>
      </ul>
    </div>

  </v-card>

  </div>
</template>

<script>
export default {
  name: 'ShowResult',

    data: () => ({
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Officer Brandon Smith',
          subtitle: "<span class='text--primary'>I'm here to help wheneever you need me</span>",
        }
      ],
      rating: 3,
    }),

    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/home')
      }
    }
};
</script>
<style scoped>
.container {
  height: 100%;
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