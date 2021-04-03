<template>
<div class="home">
  <section class="futureBikes">
    <div class="bike" v-for="bike in bikes" :key="bike.id">
      <h2>{{bike.suspension}}</h2>
      <h2>{{bike.frame}}</h2>
      <h2>{{bike.tires}}</h2>
      <img :src="bike.suspensionPath" />
    </div>
  </section>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Bikes',
    data() {
    return {
     bikes: [],
    }
  },
  created() {
    this.getBikes();
  },
  methods: {
    async getBikes() {
      try {
        let response = await axios.get("/api/bikes");
        this.bikes = response.data;
        console.log("my output: " + this.bikes[0].suspension);
        console.log("my output: " + this.bikes[0].suspensionPath);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
 
 <style scoped>
/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.futureBikes {
  column-gap: 1.5em;
}

.bike {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.bike img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .futureBikes {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .futureBikes {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .futureBikes {
    column-count: 2;
  }
}
</style>