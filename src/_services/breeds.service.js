import axios from "axios";
const catsApiKey = 'e713ffde-2619-4cc1-a2b2-14b635d6f285';

const getBreedById = async (breedId) => {
  const { data } = await axios.get(
    "https://api.thecatapi.com/v1/breeds",
    {
      headers: { 'X-Api-Key': catsApiKey }
    });
  return data;
}


const getBreeds = async (limit, page) => {
  
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/breeds?limit=${limit}0&page=${page}`,
    {
      headers: { 'X-Api-Key': catsApiKey }
    });
  return data;
}


export default {
  getBreedById: getBreedById,
  getBreeds: getBreeds
}


