import axios from 'axios';
import { toast } from 'react-toastify';


axios.interceptors.response.use(null,error => {
    const expectedError = error.response && error.response >= 400 && error.response < 500;

    if(!expectedError){
        console.log("logging error",error);
        toast.error("خطایی رخ داده است");
    }

    return Promise.reject(error);

}

)

export default {
    post: axios.post,
    get: axios.get,
    delete: axios.delete,
    put: axios.put

}
