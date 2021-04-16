<template>
  <div class="home">
    <section class="bike-container">
      <div class="bike-grid" v-for="b in bikes" :key="b.id" @click="selectItem(b)">
        <div class="item">
          <h2>{{ b.suspension }}</h2>
          <h2>{{ b.frame }}</h2>
          <h2>{{ b.tires }}</h2>
          <button @click="frameChange(b)">Edit</button>
          <button @click="deleteBike(b)">Delete</button>
          <div v-if="edit == true && b == findBike">
            <p>*** May only change the frame ***</p>
            <div class="question">
              <select  required name="newFrame" id="newFrame" v-model="newFrame" >
                <option disabled value="">Choose your frame</option>
                <option value="Santa Cruz Tallboy">Santa Cruz Tallboy</option>
                <option value="Specialized Stump Jumper">
                  Specialized Stump Jumper
                </option>
                <option value="Cannondale Habit">Cannondale Habit</option>
              </select>
              <pre>different Frame = {{ newFrame }}</pre>
              <div v-if="newFrame == 'Santa Cruz Tallboy'">
                <img src="../assets/tallboy.jpeg" />
              </div>
              <div v-if="newFrame == 'Specialized Stump Jumper'">
                <img src="../assets/stumper.jpeg" />
              </div>
              <div v-if="newFrame == 'Cannondale Habit'">
                <img src="../assets/habit.jpeg" />
              </div>
            </div>
            <div v-if="newFrame" class="editButton">
              <button @click="editBike(b)">Submit Changes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Bikes",
  data() {
    return {
      bikes: [],
      edit: false,
      findBike: null,
      newFrame: "",
    };
  },
  created() {
    this.getBikes();
  },
  methods: {
    async getBikes() {
      try {
        let response = await axios.get("/api/bikes");
        this.bikes = response.data.bikes;
        console.log(this.bikes);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteBike(bike) {
      console.log("the bike: " + bike);
      console.log("the bike ID: " + bike.id);
      try {
        await axios.delete("/api/bikes/" + bike.id);
        this.findBike = null;
        window.location.reload();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    frameChange(b){
      this.edit = true;
      this.findBike =  b;
    },
    async editBike(bike) {
      try {
        console.log("This is bike output: " + bike._id);
        await axios.put("/api/bikes/" + bike._id, {
          frame: this.newFrame,
        });
        this.newFrame = "";
        window.location.reload();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(bike) {
      this.findBike = bike;
    },
  },
};
</script>
 
 <style scoped>
.bike-container {
  display: flex;
  justify-content: center;
}

.bike-grid {
  width: 900px;
  display: flex;
  justify-content: center;
}

.item {
  border: 1px solid #fff;
  width: 300px;
  height: 300px;
}

p {
  color: red;
}

img{
  width: 200px;
}

.editButton {
  padding-bottom: 100px;
}
</style>