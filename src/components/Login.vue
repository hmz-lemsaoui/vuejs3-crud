<template>
  <header-page></header-page>
  <img class="logo" src="../assets/logo.png" />
  <h1>Login</h1>
  <form @submit.prevent="check" class="login">
    <input type="text" v-model="email" placeholder="Enter your email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your password"
    />
    <button @click="login">Log In</button>
  </form>
  <router-link to="/sign-up">Don't have acount?</router-link>
</template>

<script>
import HeaderPage from "./Header.vue";
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let response = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.warn(response);
      if (response.status == 200 && response.data.length > 0)
        localStorage.setItem("user-info", JSON.stringify(response.data));
      this.$router.push({ name: "Home" });
    },
    check() {
      console.log("test checking");
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
  components: {
    HeaderPage,
  },
};
</script>
<style>
.logo {
  width: 100px;
}
.login input {
  text-align: center;
  width: 400px;
  height: 40px;
  display: block;
  margin: auto auto 10px auto;
  border: 1px solid skyblue;
}
.login button {
  width: 400px;
  height: 40px;
  background: skyblue;
  color: white;
  border: 1px solid skyblue;
  cursor: pointer;
}
</style>