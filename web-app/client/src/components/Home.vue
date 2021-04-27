<template>
  <div class="posts content-justify-center">
    <img alt="Vote logo" src="../assets/msu.png" height="300" />

    <p class="text-justify">
    <h3>Fill out the form below to register for the Morgan Campus Voting System. Make change at MSU today!</h3>
    </p>
    <v-form v-on:submit="registerVoter" id="register-form" >
      <v-container>
        <v-row>
          <v-col cols="6" sm="6" md="4">
            <v-text-field
              label="First Name"
              required
              v-model="registerData.firstName"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="6" md="4">
            <v-text-field
              label="Last Name"
              required
              v-model="registerData.lastName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4" md="4">
            <v-text-field
              label="Morgan Student ID"
              required
              v-model="registerData.voterId"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="4" md="4">
            <v-text-field
              label="Morgan Voting ID"
              required
              v-model="registerData.registrarId"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn type="submit" color="success" form="register-form">Register</v-btn>
    </v-form>
    <p class="text-justify">
     <h4> If you are already a registered voter, you can confirm your Voter ID # below </h4>
    </p>
   <v-form v-on:submit="validateVoter" id="verify-form">

 <v-text-field
              label="Morgan Voter ID #"
              required
              v-model="loginData.voterId"
            ></v-text-field>
      <v-btn type="submit" color="success" form="verify-form">Verify</v-btn>

      <span v-if="loginReponse">
        <b>{{ loginReponse.data }}</b>
      </span>
    </v-form>

    <span v-if="registerReponse">
      <b>{{ registerReponse.data }}</b>
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
      loginData: {},
      registerData: {},
      registerReponse: {
        data: "",
      },
      loginReponse: {
        data: "",
      },
    };
  },
  components: {
    VueInstantLoadingSpinner,
  },
  methods: {
    async registerVoter() {
      await this.runSpinner();
      const apiResponse = await PostsService.registerVoter(
        this.registerData.voterId,
        this.registerData.registrarId,
        this.registerData.firstName,
        this.registerData.lastName
      );

      console.log(apiResponse);
      this.registerReponse = apiResponse;
      await this.hideSpinner();
    },

    async validateVoter() {
      await this.runSpinner();

      if (!this.loginData.voterId) {
        console.log("!thislogin");
        let response = "Please enter a VoterId";
        this.loginReponse.data = response;
        await this.hideSpinner();
      } else {
        const apiResponse = await PostsService.validateVoter(
          this.loginData.voterId
        );
        console.log("apiResponse");
        console.log(apiResponse.data);

        if (apiResponse.data.error) {
          console.log(apiResponse.data.error);
          this.loginReponse = apiResponse.data.error;
        } else {
          this.$router.push("castBallot");
        }

        console.log(apiResponse);
        this.loginReponse = apiResponse;
        // this.$router.push('castBallot')
        await this.hideSpinner();
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
