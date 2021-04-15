<template>
  <div id="app">
    <div v-if="user">
      <div class="header">
        <router-link class="routes" to="/">Home</router-link>
        <router-link class="routes" to="/about">About</router-link>
        <router-link class="routes" to="/bikes">Bike Wishlist</router-link>
      </div>
      <strong style="margin-left: -900px; font-size: 20px;">Logged in as: {{user.firstName}} {{user.lastName}}</strong>
      <router-view />
    </div>
    <login v-else/>
    <!-- <div v-else>
      <div class="header">
        <h2 style="margin-top: 0px">Dream Bike Builder</h2>
      </div>
      <div class="loginButtons">
        <br />
        <h3>Use must first login to proceed...</h3>
        <router-link class="login" to="/login"
          >click to login or create an account</router-link
        >
      </div>
      <router-view />
    </div> -->
    <footer>
      <a href="https://github.com/JacobAmosa/creative_4.git">Github Repository</a>
    </footer>
  </div>
</template>

<script>
import Login from './views/Login.vue';
export default {
  components: { Login },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
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

/* .login {
    font-size: 20px;
    text-decoration: none;
    border:orange; 
    border-width:5px; 
    border-style:solid;
    margin-top: 100px;
    background-color: orange;
} */
</style>
