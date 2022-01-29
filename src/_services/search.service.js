import axios from "axios";

const catsApiKey = 'e713ffde-2619-4cc1-a2b2-14b635d6f285';

const search = async (breeds, includeBreeds) => {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breeds}&include_breeds=${includeBreeds}`, 
     {
      headers: { 'X-Api-Key': catsApiKey }
    });
  return data;
}

export default search;
