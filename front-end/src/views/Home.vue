<template>
  <div>
    <h1>Begin assembling your dream bike:</h1>



    <div class="dropdown">
      <button class="dropbtn">Choose your frame:</button>
      <div class="dropdown-content">
        <a v-on:click="displayPhoto(1)" >Fox Float 32</a>
        <a v-on:click="displayPhoto(2)" >RockShox SID</a>
        <a v-on:click="displayPhoto(3)" >RockShox Yari</a>
      </div>   
    </div>
    


</div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      suspension: "",
      frame: "",
      tire: "",
    }
  },
  methods: {
    displayPhotos(num) {

    }
  }
}
</script>

<style>
/* Dropdown Button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>