import axios from "axios";

const getImageById = async (imageId) => {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/${imageId}`,
    {
      headers: { 'X-Api-Key': catsApiKey }
    });
  return data;
}

export default  getImageById;


