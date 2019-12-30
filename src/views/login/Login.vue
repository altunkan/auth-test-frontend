<template>
  <div id="container" class="container w-25 mt-4 p-2">
    <b-alert v-model="displayErrorMessage" variant="danger" dismissible>
      {{ errorMessage }}
    </b-alert>
    <div class="d-flex justify-content-center flex-column flex-grow">
      <b-card bg-variant="light" header="Sign In">
        <b-card-text>
          <b-form-group
            id="email-group"
            label="Email"
            label-for="email"
            class="flex-row p-0"
          >
            <b-form-input
              id="email"
              v-model="loginForm.email"
              type="email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="password-group"
            label="Password"
            label-for="password"
            class="flex-row"
          >
            <b-form-input
              id="password"
              v-model="loginForm.password"
              type="password"
            ></b-form-input>
          </b-form-group>
        </b-card-text>
        <b-button variant="primary" block @click.prevent="login"
          >Login</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import httpResource from "../../http/httpResource";
import router from "../../router/index";
import {
  parseApierror,
  performLogout,
  getAuthenticatedUser
} from "../../util/utils";

export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      displayErrorMessage: false,
      errorMessage: "",
      loginInProcess: false
    };
  },
  methods: {
    async login() {
      this.loginInProcess = true;
      let canNavigate = false;
      const loginRequest = {
        email: this.loginForm.email,
        password: this.loginForm.password
      };
      try {
        const response = await httpResource.post("/auth/login", loginRequest);
        if (response.status === 200) {
          await getAuthenticatedUser();
          canNavigate = true;
        }
      } catch (error) {
        performLogout();
        const apierror = parseApierror(error);
        this.displayErrorMessage = true;
        this.errorMessage = apierror.message;
      }
      this.loginInProcess = false;

      if (canNavigate) {
        router.replace("/");
      }
    }
  }
};
</script>

<style></style>
