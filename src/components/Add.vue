<template>
  <header-page />
  <h1>Add a Restaurant</h1>
  <form class="addRestaurant" @submit.prevent="test">
    <input
      type="text"
      placeholder="Name of Restaurant"
      v-model="restaurant.name"
    />
    <input type="text" placeholder="Contact" v-model="restaurant.contact" />
    <input type="text" placeholder="adress" v-model="restaurant.adress" />
    <input type="submit" value="add" @click="add" />
  </form>
</template>

<script>
import axios from "axios";
import HeaderPage from "./Header.vue";
export default {
  name: "AddResto",
  components: {
    HeaderPage,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
  data() {
    return {
      restaurant: {
        name: "",
        contact: "",
        adress: "",
      },
    };
  },
  methods: {
    async add() {
      let response = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        adress: this.restaurant.adress,
      });
      if (response.status == 201) this.$router.push({ name: "Home" });
    },
    test() {
      console.log("test");
    },
  },
};
</script>
<style scoped>
h1 {
  margin-top: 10%;
}
.addRestaurant input {
  text-align: center;
  display: block;
  width: 400px;
  height: 40px;
  margin: auto auto 10px auto;
  border: 1px solid skyblue;
}
</style>