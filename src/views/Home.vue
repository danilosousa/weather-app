<template>
  <div class="home">
    <div class="weather-box">weather {{ loadWeather }}</div>
    <div class="weather-box">city {{ cityName }}</div>
  </div>
</template>

<script>
// @ is an alias to /src

import getWeather from "../services/weatherService";
import getCityCoords from "../services/weatherServiceCoords";
import getCityName from "../services/weatherServiceCity";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      loadWeather: "",
      loadCity: "",
      cityName: ""
    };
  },
  methods: {},

  async mounted() {
    this.loadWeather = await getWeather("-23.5475000", "-46.6361100");
    this.loadCity = await getCityCoords("carapicuiba");
    this.cityName = await getCityName("-23.5475000", "-46.6361100");
  }
};
</script>
