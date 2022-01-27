import axios from "axios";
const catsApiKey = 'e713ffde-2619-4cc1-a2b2-14b635d6f285';

const useCats = async () => {
  const { data } = await axios.get(
    "https://api.thecatapi.com/v1/breeds",
    {
      headers: { 'X-Api-Key': catsApiKey }
    });
  return data;
}

export default useCats;


