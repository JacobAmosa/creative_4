<template>
  <div >
    <h1>Begin assembling your dream bike:</h1>

    <div class="question">
      <select required name="suspension" id="suspension" v-model="suspension" @change="componentsAdded()" >
        <option disabled value="">Choose your suspension</option>
        <option value="Fox Float 32">Fox Float 32</option>
        <option value="RockShox SID">RockShox SID</option>
        <option value="RockShox Yari">RockShox Yari</option>
      </select>
      <pre>Suspension = {{ suspension }}</pre>
      <div v-if='suspension == "Fox Float 32"'>
        <img src="../assets/fox-sus.jpeg">
      </div>
      <div v-if='suspension == "RockShox SID"'>
        <img src="../assets/sid-sus.jpeg">
      </div>
      <div v-if='suspension == "RockShox Yari"'>
        <img src="../assets/yari-sus.jpeg">
      </div>
    </div>
    <div class="question">
      <select required name="frame" id="frame" v-model="frame" @change="componentsAdded()" >
        <option disabled value="">Choose your frame</option>
        <option value="Santa Cruz Tallboy">Santa Cruz Tallboy</option>
        <option value="Specialized Stump Jumper">Specialized Stump Jumper</option>
        <option value="Cannondale Habit">Cannondale Habit</option>
      </select>
      <pre>Frame = {{ frame }}</pre>
      <div v-if='frame == "Santa Cruz Tallboy"'>
        <img src="../assets/tallboy.jpeg">
      </div>
      <div v-if='frame == "Specialized Stump Jumper"'>
        <img src="../assets/stumper.jpeg">
      </div>
      <div v-if='frame == "Cannondale Habit"'>
        <img src="../assets/habit.jpeg">
      </div>
    </div>
    <div class="question">
      <select required name="tires" id="tires" v-model="tires" @change="componentsAdded()" >
        <option disabled value="">Choose your tires</option>
        <option value="Maxxis Minions">Maxxis Minions</option>
        <option value="Maxxis Agressors">Maxxis Agressors</option>
        <option value="Maxxis Dissector">Maxxis Dissector</option>
      </select>
      <pre>Tires = {{ tires }}</pre>
      <div v-if='tires == "Maxxis Minions"'>
        <img src="../assets/minion.jpeg">
      </div>
      <div v-if='tires == "Maxxis Agressors"'>
        <img src="../assets/agressor.jpeg">
      </div>
      <div v-if='tires == "Maxxis Dissector"'>
        <img src="../assets/dissector.jpeg">
      </div>
    </div>
    <div v-if="bikeAdded == true" >
      <button v-on:click="upload()" id="saveButton" >Save Bike to Wishlist</button>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
export default {
  name: "Home",
  data() {
    return {
      suspension: "",
      frame: "",
      tires: "",
      bikeAdded: false,
    };
  },
  methods: {
    componentsAdded() {
      if (this.suspnesion != "" && this.frame != "" && this.tires != "") {
        this.bikeAdded = true;
      }
    },
    async upload() {
      try {
        let bikeToDB = await axios.post('/api/bikes', {
          suspension: this.suspension,
          frame: this.frame,
          tires: this.tires,
        });
        this.bikeAdded = bikeToDB.data;
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
select {
  width: 200px;
  height: 30px;
}

pre {
  font-size: 20px;
}

img {
  width: 500px;
}

.question {
  margin-top: 60px;
}

#saveButton {
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: red;
  font-size: 50px;
  margin-bottom: 200px;
}

</style>