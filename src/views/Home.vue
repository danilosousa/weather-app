<template>
  <div class="home">
    <div class="container">
      <div class="col-left">
        <div class="weather-box">city {{ cityName }}</div>
        <div class="weather">
          <div class="wheather-icon"></div>
          <div class="wheather-temp">
            <h2>10</h2>
            <span>º</span>
          </div>
          <div class="wheather-sensacao">
            sensação de ...
          </div>
          <div class="wheather-description">
            chuva moderada
          </div>
          <div class="wheather-day">segunda-feira,</div>

          <div class="wheather-city">Osasco</div>
        </div>
      </div>
      <div class="col-right">
        <div class="weather-box">weather {{ loadWeather }}</div>
      </div>
    </div>
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
<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
}
.col-left {
  width: 25%;
}
.col-right {
  width: 75%;
}
</style>
