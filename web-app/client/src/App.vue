

<template>
  <v-app id="app">
    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <router-link to="/QueryAll">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>search</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>QueryAll</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/queryWithQueryString">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>search</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Query by Type</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/queryByKey">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>search</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Search by Key</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/getCurrentStanding">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>gavel</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Check the Polls</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar
     absolute
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
      color="orange" 
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title>MSU Campus Proposals</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Register</v-tab>
          <v-tab to="/castBallot">Vote</v-tab>
          <v-tab to="/getCurrentStanding">Check Polls</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
    >

      <v-container style="height: auto;">
            <v-main>
      <router-view></router-view>
    </v-main>
      </v-container>
    </v-sheet>

 


  </v-app>
</template>


<script>
export default {
  data: () => ({ drawer: null }),
  name: "app",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.chart-wrapper {
  width: 100%;
  height: 700px;
}
.echarts {
  width: 100%;
  height: 100%;
}

#loader {
  position: fixed;
  padding-top: 250px;
}

.chart-wrapper {
  position: fixed;
  padding-left: 32%;
}
</style>
