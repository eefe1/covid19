import axios from "axios";

const baseEndpoint = "https://api.covid19api.com";

//countries

export const fetchCountries = async () => {
  const { data } = await axios.get(`${baseEndpoint}/countries`);
  return data;
};
//daily data
export const fetchDailyData = async (country) => {
  const { data } = await axios.get(`${baseEndpoint}/dayone/country/${country}`);
  return data;
};
