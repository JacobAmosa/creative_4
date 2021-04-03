<template>
  <div id="app">
    <div class = "header">
      <router-link class="routes" to="/">Home</router-link>
      <router-link class="routes" to="/about">About</router-link>
      <router-link class="routes" to="/bikes">Bike Wishlist</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
</script>

<style>
html, body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header{
  background-color: #9cbddf;
  height: 60px;

}

.routes {
  padding-left: 25px;
  padding-right: 25px;
  font-size: 20px;
}

</style>
