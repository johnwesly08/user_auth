import axios from "axios";

const BASE_URL = "http://localhost:5000/task";

export const createAuthModel = async (details) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, details);
        return response;
    }catch(e) {
        console.log(e.message);
    }
}

export const getUserDetails = async (details) => {
    try{
        const response = await axios.post(`${BASE_URL}/login`,details);
        console.log(response);
        return response; 
    }catch(e) {
        console.log(e.message);
    }
}