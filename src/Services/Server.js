import axios from "axios"

const API_URL = "https://vaksight-api.azurewebsites.net";

class Server {
    signIn(userData) {
        return axios.post(API_URL + "/token", userData).then(res => {
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
                return res;
            }
        }).catch((error) => {
            alert('Некоректні дані. Спробуйте ще раз '+error);
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
    electronicSourceWithHistory(userData, email){
        return axios.post(API_URL + "/api/source/electronic", userData, {params:{email}}).then(res => {
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
    bookSourceWithHistory(userData, email){
        return axios.post(API_URL + "/api/source/book", userData, {params:{email}}).then(res => {
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
    dissertationSourceWithHistory(userData, email){
        return axios.post(API_URL + "/api/source/dissertation", userData, {params:{email}}).then(res => {
            if (res.status === 200) {
                return (JSON.stringify(res.data));
            }
        }).catch((error) => {
            alert(error);
        });
    }
    abstractDissertationSource(userData){
        return axios.post(API_URL + "/api/source/abstractDissertation", userData).then(res => {
            if (res.status === 200) {
                return (JSON.stringify(res.data));
            }
        }).catch((error) => {
            alert(error);
        });
    }
    abstractDissertationSourceWithHistory(userData, email){
        return axios.post(API_URL + "/api/source/abstractDissertation", userData, {params:{email}}).then(res => {
            if (res.status === 200) {
                return (JSON.stringify(res.data));
            }
        }).catch((error) => {
            alert(error);
        });
    }
    periodicalSource(userData){
        return axios.post(API_URL + "/api/source/periodical", userData).then(res => {
            if (res.status === 200) {
                return (JSON.stringify(res.data));
            }
        }).catch((error) => {
            alert(error);
        });
    }
    periodicalSourceWithHistory(userData,email){
        return axios.post(API_URL + "/api/source/periodical", userData, {params:{email}}).then(res => {
            if (res.status === 200) {
                return (JSON.stringify(res.data));
            }
        }).catch((error) => {
            alert(error);
        });
    }
    getHistory(token, email){
       let config ={
        headers: {'Authorization': 'Bearer ' + (token).replace(/["]/g,'')},
        params: {
            "limit": 10,
            email
        }
       };
       return axios.get(API_URL+"/api/source", config).then(res=>{
           return res.data.items
       }).catch((e)=>{
           alert(e);
       });
    }
}
export default Server;