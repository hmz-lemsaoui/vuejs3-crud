<template>
  <header-page />
  <h1>hello user {{ name }}, welcome in home page</h1>
  <h3>List of Restaurants</h3>
  <ul>
    <li v-for="resto in restaurants" :key="resto.id">
      {{ resto.name }}
      <router-link :to="'/updaterestaurant/' + resto.id">update </router-link>
      <button @click="delet(resto.id)">delete</button>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import HeaderPage from "./Header.vue";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    HeaderPage,
  },
  methods: {
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let response = await axios.get("http://localhost:3000/restaurants/");
      this.restaurants = response.data;
    },
    async delet(id) {
      let response = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      );
      if (response.status == 200) await this.loadData();
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>
<style>
ul li {
  list-style: none;
  color: blue;
}
</style>