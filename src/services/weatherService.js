import axios from "axios";

import config from "../config/config";

async function getWeather(lon, lat) {
  //console.log(lon, lat);
  const response = await axios.get(
    `${config.WEATHER_DATA_ENDPOINT}lon=${lon}&lat=${lat}`
  );
  console.log(response.data);
  return response.data;
}

export default getWeather;
