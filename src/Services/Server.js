import axios from "axios"

const API_URL = "https://vaksight-api.azurewebsites.net";

class Server {
    signIn(userData) {
        axios.post(API_URL + "/token", userData).then(res => {
            console.log(res.data)
            if (res.data) {
                localStorage.setItem('user', JSON.stringify(res.data));
            }
            return res.data;
        }).catch((error) => {
            alert(error);
            window.location.reload();
        });
    }
    logout() {
        localStorage.removeItem("user");
    }
    signUp(userData) {
        axios.post(API_URL + "/api/Users", userData)
            .catch((error) => {
                alert(error);
                window.location.reload();
            });
    }
    source(userData) {
        return axios.post(API_URL + "/api/source/electronic", userData).then(res => {
            if (res.status === 200) {
                return (JSON.stringify(res.data));
            }
        }).catch((error) => {
            alert(error);
        });
    }
}
export default new Server;