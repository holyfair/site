import axios from "axios"

const API_URL = "https://vaksight-api.azurewebsites.net";

class Server {
    signIn(userData) {
        return axios.post(API_URL + "/token", userData).then(res => {
            console.log(res.config.data)
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
            }
            return res.data;
        }).catch((error) => {
            alert(error);
        });
    }
    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        return 1;
    }
    signUp(userData) {
       return axios.post(API_URL + "/api/Users", userData)
            .catch((error) => {
                alert(error);
            });
    }
    electronicSource(userData) {
        return axios.post(API_URL + "/api/source/electronic", userData).then(res => {
            if (res.status === 200) {
                return (JSON.stringify(res.data));
            }
        }).catch((error) => {
            alert(error);
        });
    }
    bookSource(userData){
        return axios.post(API_URL + "/api/source/book", userData).then(res => {
            if (res.status === 200) {
                return (JSON.stringify(res.data));
            }
        }).catch((error) => {
            alert(error);
        });
    }
    dissertationSource(userData){
        return axios.post(API_URL + "/api/source/dissertation", userData).then(res => {
            if (res.status === 200) {
                return (JSON.stringify(res.data));
            }
        }).catch((error) => {
            alert(error);
        });
    }
}
export default new Server;