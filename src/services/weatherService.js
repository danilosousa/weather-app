import axios from "axios";

import config from "../config/config";

async function getCityCoords(city) {
  const response = await axios.get(`${config.WEATHER_API_ENDPOINT}q=${city}`);
  console.log(response);
  // const cord,
  // sys: {co}
}

async function getWeather(lon, lat) {
  console.log(lon, lat);
  const response = await axios.get(
    `${config.WEATHER_DATA_ENDPOINT}lon=${lon}&lat=${lat}`
  );
  console.log(response.data);
  return response.data;
}

export { getCityCoords };
export default getWeather;
