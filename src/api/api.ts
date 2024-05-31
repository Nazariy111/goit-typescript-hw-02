import axios from "axios";

const API_KEY = "41sijZe2L9Kz1cUJpQ-YJCnV8Txjz0PMfQ9yUVprKzk";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
    orientation: "landscape",
    per_page: 15,
};

export type Photo = {
    id: string;
    urls: {
        regular: string;
        small: string;
    };
    alt_description: string;
};

type Data = { total: number; total_pages: number; results: Photo[] };

export const getPhotos = async (query: string, page: number): Promise<Data> => {
    const { data } = await axios.get(`search/photos/?client_id=${API_KEY}&query=${query}&page=${page}`);

    return data;
};
