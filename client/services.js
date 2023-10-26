import axios from "axios";

const BASE_URL = "http://localhost:5000/task";

export const createAuthModel = async (details) => {
    try {
        const response = await axios.post(`http://localhost:5000/task/register`, details);
        return response;
    }catch(e) {
        console.log(e.message);
    }
}