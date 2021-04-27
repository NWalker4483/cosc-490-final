
<template>
  <div class="posts" align="center">
    <h1>Get the Current Poll Standings</h1>

    <v-btn color="blue" dark v-on:click="getCurrentStanding()">
      <v-icon small left>gavel</v-icon>
      Check the polls for...
    </v-btn>
    <v-select
      :items="elections"
      label="Election Dates"
      dense
      max-width="300px"
      solo
    ></v-select>
      <chart :options="chartOptionsBar" auto-resize></chart>
   
    <span v-if="response">
      <b>{{ response }}</b>
    </span>
    <vue-instant-loading-spinner
      id="loader"
      ref="Spinner"
    ></vue-instant-loading-spinner>
  </div>
</template>
 <style>
</style>
<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "response",
  data() {
    return {
      response: null,
      chartOptionsBar: {},
      elections: [
        "5/2/2021 - 6/20/2021",
        "4/4/2021 - 5/2/2021",
        "3/1/2021 - 4/3/2021",
      ],
      proposals: [],
    };
  },
  components: {
    VueInstantLoadingSpinner,
  },
  methods: {
    async getCurrentStanding() {
      this.response = null;

      this.runSpinner();

      // console.log(`this.selected ${this.selected}`);
      const apiResponse = await PostsService.getCurrentStanding();
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%");
      console.log(apiResponse);
      console.log(apiResponse.data[0].Record);
      let currentStanding = [];
      for (let i = 0; i < apiResponse.data.length; i++) {
        currentStanding[i] = apiResponse.data[i].Record.count;
      }
      console.log("curStanding: ");
      console.log(currentStanding);

      this.chartOptionsBar = {
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },

        yAxis: {
          type: "category",
          data: [
            "Bus Tracking",
            "24/7 Food Access",
            "New Library Hours",
            "2021 Vaccination Req.",
            "New Parking",
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },

        series: [
          {
            type: "bar",
            data: currentStanding,
          },
        ],
        title: {
          text: "2020 ",
          x: "center",
          textStyle: {
            fontSize: 24,
          },
        },
        color: ["#127ac2"],
      };
      
      // this.response = apiResponse.data;
      // this.renderChart(this.datacollection, this.options)
      this.hideSpinner();
    },
    async runSpinner() {
      this.$refs.Spinner.show();
    },
    async hideSpinner() {
      this.$refs.Spinner.hide();
    },
  },
};
</script>
