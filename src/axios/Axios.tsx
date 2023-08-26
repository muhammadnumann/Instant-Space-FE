import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:3000/api/v1/',
});

Axios.interceptors.request.use((request) => {
    document.querySelector(".splash-screen").style.display = "flex";
    return request;
});

Axios.interceptors.response.use(
    (response) => {
        document.querySelector(".splash-screen").style.display = "none";

        return response;
    },
    (error) => {
        document.querySelector(".splash-screen").style.display = "none";
        throw error;
    }
);

export default Axios;