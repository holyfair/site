import axios from "axios"

const API_URL = "https://localhost:5001";

class JwtAuth {
    signIn(userData) {
        axios.post(API_URL + "/token", userData).then((res) => {
            console.log(res.data)
            if (res.data) {
                localStorage.setItem('user', JSON.stringify(res.data));
            }
            return res.data;
        }).catch((error) => {
            alert(error);
        });
    }
    logout() {
        localStorage.removeItem("user");
    }
    signUp(userData) {
        axios.post(API_URL + "/api/Users", userData)
            .catch((error) => {
                alert(error);
            });
    }
}
export default new JwtAuth;