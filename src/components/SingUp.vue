<template>
  <header-page></header-page>
  <img class="logo" src="../assets/logo.png" />
  <h1>Sign Up</h1>
  <form @submit.prevent="submit" class="signup">
    <input type="text" v-model="name" placeholder="Enter your name" />
    <input type="text" v-model="email" placeholder="Enter your email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your password"
    />
    <button @click="signup">Sign Up</button>
  </form>
  <router-link to="/login">alerady have acount?</router-link>
</template>

<script>
import HeaderPage from "./Header.vue";
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      let response = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (response.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(response.data));
        this.$router.push({ name: "Home" });
      }
    },
    submit() {
      this.name = "";
      this.email = "";
      this.password = "";
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
  components: {
    HeaderPage
  },
};
</script>
<style>
.logo {
  width: 100px;
}
.signup input {
  text-align: center;
  width: 400px;
  height: 40px;
  display: block;
  margin: auto auto 10px auto;
  border: 1px solid skyblue;
}
.signup button {
  width: 400px;
  height: 40px;
  background: skyblue;
  color: white;
  border: 1px solid skyblue;
  cursor: pointer;
}
</style>
