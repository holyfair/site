import axios from "axios"

const API_URL = "https://localhost:5001";

class JwtAuth{
    signIn(email, password){
        return axios.post(API_URL+'/token',{
            email,
            password
        }).then(response => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data;
    }
}