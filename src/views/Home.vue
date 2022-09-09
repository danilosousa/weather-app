<template>
  <div class="home">
    <div class="weather-box">weather {{ loadWeather }}</div>
  </div>
</template>

<script>
// @ is an alias to /src

//import axios from "axios";

import getWeather from "../services/weatherService";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      loadWeather: ""
    };
  },
  methods: {},

  async mounted() {
    this.loadWeather = await getWeather("-23.5475000", "-46.6361100");
    //console.log(data);

    // axios
    //   .get(
    //     //"http://api.openweathermap.org/data/2.5/weather?q=Paris,uk&APPID=6d1fd0974b615f1a60d864b060d533d8"
    //     "http://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6d1fd0974b615f1a60d864b060d533d8"
    //   )
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
};
</script>
