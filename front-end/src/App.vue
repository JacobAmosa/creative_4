<template>
  <div id="app">
    <div class = "header">
      <h1>HEELLLOOOO</h1>
      <router-link>Home</router-link>
      <router-link>Bike List</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
