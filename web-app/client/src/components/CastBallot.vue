<template>
  <div class="posts">
    <h1>Cast Ballot</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg6 v-for="prop in propoals" :key="prop.alt">
          <v-card raised class="text-xs-center ma-3">
            <v-responsive class="pt-4">image</v-responsive>
            <v-card-text>
              <div class="subheading">{{ prop.alt }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>home
                  </v-icon>
                  </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <span v-if="picked">
      Picked:
      <b> {{ picked }}</b>
    </span>
    <br />
    <br />
    <!--span><b>{{ response }}</b></span><br /-->
    <form v-on:submit="castBallot">
      <!-- <input type="text" value="2sww593dc034wb2twdk91r" v-model="input.electionId"  >
      <br>-->
      <input type="text" v-model="input.voterId" placeholder="Enter VoterId" />
      <br />
      <input type="submit" value="Cast Vote" />
      <br />
    </form>

    <br />
    <span v-if="response">
      <b>{{ response }}</b>
    </span>
    <br />
    <vue-instant-loading-spinner
      id="loader"
      ref="Spinner"
    ></vue-instant-loading-spinner>
  </div>
</template>

<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";

export default {
  name: "response",
  data() {
    return {
      input: {},
      picked: null,
      response: null,
      propoals: [
        { alt: "Republican", 
        image_url: "",
        description: "Cats are dope sometimes",
        title: ""},
        { alt: "Democrat", 
        image_url: "",
        description: "Cats are dope sometimes",
        title: ""},
        { alt: "Green", 
        image_url: "",
        description: "Cats are dope sometimes",
        title: ""},
        { alt: "Independent", 
        image_url: "",
        description: "Cats are dope sometimes",
        title: ""},
        { alt: "Libertarian", 
        image_url: "",
        description: "Cats are dope sometimes",
        title: ""},
      ],
    };
  },
  components: {
    VueInstantLoadingSpinner,
  },
  methods: {
    async castBallot() {
      await this.runSpinner();

      const electionRes = await PostsService.queryWithQueryString("election");

      let electionId = electionRes.data[0].Key;

      console.log("picked: ");
      console.log(this.picked);
      console.log("voterId: ");
      console.log(this.input.voterId);
      this.response = null;

      //error checking for making sure to vote for a valid party
      if (this.picked === null) {
        console.log("this.picked === null");

        let response = "You have to pick a party to vote for!";
        this.response = response;
        await this.hideSpinner();
      } else if (this.input.voterId === undefined) {
        console.log("this.voterId === undefined");

        let response = "You have to enter your voterId to cast a vote!";
        this.response = response;
        await this.hideSpinner();
      } else {
        const apiResponse = await PostsService.castBallot(
          electionId,
          this.input.voterId,
          this.picked
        );

        console.log("apiResponse: &&&&&&&&&&&&&&&&&&&&&&&");
        console.log(apiResponse);

        if (apiResponse.data.error) {
          this.response = apiResponse.data.error;
          await this.hideSpinner();
        } else if (apiResponse.data.message) {
          this.response = `Could not find voter with voterId ${this.input.voterId}
            in the state. Make sure you are entering a valid voterId`;
          await this.hideSpinner();
        } else {
          let response = `Successfully recorded vote for ${this.picked} party 
            for voter with voterId ${apiResponse.data.voterId}. Thanks for 
            doing your part and voting!`;

          this.response = response;

          console.log("cast ballot");
          console.log(this.input);
          await this.hideSpinner();
        }
      }
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
