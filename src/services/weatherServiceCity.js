import axios from "axios";
import config from "../config/config";

async function getCityName(lat, lon) {
  const response = await axios.get(
    `${config.WEATHER_API_ENDPOINT}lon=${lon}&lat=${lat}`
  );
  const {
    name,
    sys: { country }
  } = response.data;
  console.log(name, country);
  return { name, country };
}
export default getCityName;
