<template>
  <v-app>
    <div id="Login">
      <h2>Iniciar Sesión</h2>

      <v-text-field v-model="username" name="username" label="User">
      </v-text-field>
      <v-text-field v-model="password" name="password" label="Password">
      </v-text-field>
      <v-btn primary large block v-on:click="login">Login</v-btn>
      <br />
      <h2 v-show="errored" class="hideElement">User or Password is invalid.</h2>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errored: false,
    };
  },
  methods: {
    login: function () {
      console.log("Este es un clickkkkkkk...");
      let url = "http://localhost:24487/api/Token";
      let auth = {
        username: this.username,
        password: this.password,
      };
      axios
        .post(url, auth)
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", JSON.stringify(response.data));
          this.$router.push({ name: "dashboard" });
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          this.errored = true;
          setTimeout(() => (this.errored = false), 3000);
          this.username = "";
          this.password = "";
        });
    },
  },
};
</script>

<style>
#login {
  width: 500px;
  border: 1px;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>