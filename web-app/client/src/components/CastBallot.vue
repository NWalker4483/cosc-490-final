<style scoped>
html {
  overflow: hidden !important;
}

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
.scroll {
   overflow-y: scroll
}
</style>
<template>
  <div class="posts">
    <h1>Cast Ballot for </h1><h4>5/2/2021 - 6/20/2021</h4>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs10 sm7 md4 lg4 v-for="prop in propoals" :key="prop.alt">
          <v-card raised class="text-xs-center ma-3 scroll" min-height="500px" height="40%">
            <v-img min-height="200px" height="25%" :src="prop.image_url"></v-img>

            <v-divider class="mx-4"></v-divider>
            <v-card-title>{{ prop.title }}</v-card-title>
            <v-card-text max-height="300px">
              <div class="text--primary">{{ prop.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="grey" dark v-bind="attrs" v-on="on">
                    <v-icon small left>gavel</v-icon>
                    Show your support
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Enter your voter information</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-text-field
                            label="Voter ID*"
                            required
                            v-model="input.voterId"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="
                        picked = prop.alt;
                        castBallot();
                      "
                    >
                      Cast Vote
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
      dialog: false,
      input: {},
      picked: null,
      response: null,
      propoals: [
        {
          alt: "Republican",
          image_url:
            "https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/school-bus-tracking-solution-main.jpg",
          description: "Morgan State University is proposing to replace the current bus tracking app, TransLoc, with its own GPS shuttle tracker built specifically for Morgan students. This application would include in a more interactive UI and better GPS tracking on shuttles. The overall aim of this proposal is to help students better utilize campus transportation by making it simple and tailoring it for Morgan students.",
          title: "Better Bus Tracking",
        },
        {
          alt: "Democrat",
          image_url:
            "https://www.topsytasty.com/wp-content/uploads/2020/01/pexels-photo-139681.jpeg",
          description: "Morgan State University is proposing to add healthy food stands around campus that would be open 24-hours a day 7-days a week. These stands will be placed inside residence halls and use a form of self checkout. Similar to other food options on campus they will accept bearcards, debit cards, and cash and will be monitored by cameras. The goal is to give students access to healthy food regardless of time or their location on campus.",
          title: "24/7 Healthy Food Access",
        },
        {
          alt: "Green",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/NYC_-_New_York_City_Library_-_1723.jpg/620px-NYC_-_New_York_City_Library_-_1723.jpg",
          description:
            "Morgan State University is proposing to extend current library hours. On a weekday the library currently closes at 10pm but this proposal looks to extend closing on weekdays until midnight. Giving students that may be busy with activities or work until later in the day a chance to still complete their work in a quiet, focused environment. The overall aim is to help increase students' access to areas with not only the environment for studying but also the resources.",
          title: "Extended Library Hours",
        },
        {
          alt: "Independent",
          image_url:
            "https://cdn.shrm.org/image/upload/c_crop%2ch_693%2cw_1233%2cx_0%2cy_57/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Employee%20Relations/iStock-1253358164_xtnccr?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjU3LCJ4MiI6MTIzMywieTIiOjc1MSwidyI6MTIzMywiaCI6NjkzfX0%3d",
          description: "Morgan State University is proposing that prior to the start of the 2021 Fall semester all faculty, students and staff must be fully vaccinated. With everyone excited to return to campus it is also a top priority to keep everyone safe. Morgan State plans to become a community vaccination site to help everyone fulfill this requirement and remove all doubts about safety. This proposal also requires students to wear masks and social distance while on campus.",
          title: "Vaccination Requirements for 2021",
        },
        {
          alt: "Libertarian",
          image_url: "https://cbs-incorp.com/images/projects/MSU-313.jpg",
          description: "Morgan State University is proposing to add free student parking to campus. As the campus expands it is also important to provide safe and easy parking for students around campus. This proposal aims to add a parking lot open to Morgan Students as an alternative to the current parking garage. With a similar set up student would only need to swipe their bearcard to enter and exit the lot. The overall goal is to provide more parking for students and decrease walking distance to the newer parts of campus.",
          title: "New Student Parking",
        },
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
      this.dialog = false;

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
