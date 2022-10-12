<template>
  <header-page />
  <h1>Update a Restaurant</h1>
  <form class="updateRestaurant" @submit.prevent="test">
    <input
      type="text"
      placeholder="Name of Restaurant"
      v-model="restaurant.name"
    />
    <input type="text" placeholder="Contact" v-model="restaurant.contact" />
    <input type="text" placeholder="adress" v-model="restaurant.adress" />
    <input type="submit" value="update" @click="update" />
  </form>
</template>

<script>
import axios from "axios";
import HeaderPage from "./Header.vue";
export default {
  name: "UpdateResto",
  components: {
    HeaderPage,
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
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const response = await axios.get(
      "http://localhost:3000/restaurants?id=" + this.$route.params.id
    );
    this.restaurant = response.data[0];
  },
  methods: {
    async update() {
      let response = await axios.put(
        "http://localhost:3000/restaurants/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          adress: this.restaurant.adress,
        }
      );
      if (response.status == 200) this.$router.push({ name: "Home" });
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
.updateRestaurant input {
  text-align: center;
  display: block;
  width: 400px;
  height: 40px;
  margin: auto auto 10px auto;
  border: 1px solid skyblue;
}
</style>