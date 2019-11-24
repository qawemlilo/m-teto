<template>
  <div class="container py-2 px-2">
  <v-card
    class="mx-auto"
    max-width="400"
    tile

  >

     <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
          @click="showResult"
        >
         <v-list-item-icon>
            <v-icon large color="green darken-2">{{item.icon}}</v-icon>
         </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'Results',

    data: () => ({
      items: [
        { header: 'Results' },
        {
          icon: 'mdi-domain',
          title: 'Gugulethu police station',
          subtitle: "<span class='text--primary'>Ali Connors</span> We're here for you whenever you need help",
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-domain',
          title: 'Nyanga police station',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> Here to serve and protect you",
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-domain',
          title: 'Philippi police station',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; We provide assistance to rape victims",
        }
      ],
    }),

    methods: {
      showResult() {
        this.$router.push('/results/show');
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