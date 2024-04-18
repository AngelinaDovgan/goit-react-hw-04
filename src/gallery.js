import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const KEY = "G2AovgaDubgxBcNqcyg3uSWnupRNVD8P1HEpklKMohw";

export const fetchGallery = async (searchQuery, page) => {
    
    const response = await axios.get(`/search/photos/?query=${searchQuery}&client_id=${KEY}&per_page=10&page=${page}`); 
    return response.data.hits;
}