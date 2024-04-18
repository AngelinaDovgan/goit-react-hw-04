import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const AccessKey = "G2AovgaDubgxBcNqcyg3uSWnupRNVD8P1HEpklKMohw";

export const fetchGallery = async (searchQuery) => {
    
    const response = await axios.get(`/search/photos/?client_id=${access}&query=${searchQuery}`); 
    console.log(response.data.results);
    return response.data.hits;
}