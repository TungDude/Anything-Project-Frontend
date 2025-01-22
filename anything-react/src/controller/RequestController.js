import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
    baseURL: backendUrl || 'http://localhost:5000',  // API base URL from environment variable
    // timeout: 10000,  // Timeout after 10 seconds
    headers: {
        'Content-Type': 'application/json',  // Default Content-Type
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`  // Optional Authorization token
    }
});

// Request Controller Class
class RequestController {
    static async TestAPI() {
        try {
            const response = await api.get("/api/test");
            return response.data
        } catch (error) {
            return JSON.stringify({
                "Result": "Error", 
            })
        }
    }

    static async CreateUser(data, config = {}) {
        try {
            const response = await api.post("/api/users/create", data, config);
            return response.data;
        } catch (error) {
            console.error('POST Request Error: ', error);
            throw error;
        }
    };
};

export default RequestController;