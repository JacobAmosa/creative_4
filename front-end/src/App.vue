<template>
  <div id="app">
    <div v-if="user">
      <div class="header">
        <router-link class="routes" to="/">Home</router-link>
        <router-link class="routes" to="/about">About</router-link>
        <router-link class="routes" to="/bikes">Bike Wishlist</router-link>
      </div>
      <strong style="margin-left: -900px; font-size: 20px;">Logged in as: {{user.firstName}} {{user.lastName}}</strong><br>
      <button @click="logout" style="margin-left: -900px; font-size: 15px;" class="pure-button pure-button-primary">Logout</button>
      <router-view />
    </div>
    <login v-else/>
    <footer>
      <a href="https://github.com/JacobAmosa/creative_4.git">Github Repository</a>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
import Login from './views/Login.vue';
export default {
  components: { Login },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
};
</script>

<style>
html,
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  background-color: #9cbddf;
  height: 60px;
}

.routes {
  padding-left: 25px;
  padding-right: 25px;
  font-size: 20px;
}

footer {
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #9cbddf;
}

</style>
