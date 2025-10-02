import axios from "axios";

const BASE_URL="https://min-api.cryptocompare.com/data/v2";

export const fetchCryptoNews=async() => {
    const res=await axios.get(`${BASE_URL}/news/`,{
        params:{lang:"EN"}
    });
    return res.data.Data;
    };