import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "G2AovgaDubgxBcNqcyg3uSWnupRNVD8P1HEpklKMohw";

export const fetchGallery = async (searchQuery, currentPage) => {
    const response = await axios.get("/search/photos", {
        params: {
            query: searchQuery,
            page: currentPage,
            per_page: 10,
            client_id: ACCESS_KEY,
},
    });
    return response.data.hits;
}