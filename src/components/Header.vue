<template>
  <ul class="list-items">
    <li><router-link to="/">Home</router-link></li>
    <li>
      <router-link to="/addrestaurant">Add Restrant</router-link>
    </li>
    <li v-if="user != ''"><a href="#" @click="logout">Logout</a></li>
  </ul>
</template>
<script>
export default {
  name: "HeaderPage",
  data() {
    let user = localStorage.getItem("user-info");
    if (user) return { user: user };
    return { user: "" };
  },
  methods: {
    logout() {
      let user = localStorage.getItem("user-info");
      if (user) localStorage.removeItem("user-info");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style>
.list-items li a {
  text-decoration: none;
  color: skyblue;
}
.list-items li a:hover {
  color: red;
}
.list-items {
  display: flex;
  list-style: none;
  justify-content: space-around;
}
</style>