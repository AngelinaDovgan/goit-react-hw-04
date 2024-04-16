import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchGallery = async (searchQuery, currentPage) => {
    const response = await axios.get("/search", {
        params: {
            query: searchQuery,
            page: currentPage,
            per_page: 10
},
    });
    return response.data.hits;
}