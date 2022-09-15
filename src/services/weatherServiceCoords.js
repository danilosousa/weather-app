import axios from "axios";

import config from "../config/config";

async function getCityCoords(city) {
  const response = await axios.get(`${config.WEATHER_API_ENDPOINT}q=${city}`);
  const { coord, sys: country } = response.data;
  console.log("cordenadas", coord);
  return { ...coord, country };
}

export default getCityCoords;
