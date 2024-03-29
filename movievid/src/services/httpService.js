import axios from "axios";
import winston from 'winston';
import { toast } from "react-toastify";


// For the protected api endpoints 

axios.interceptors.response.use(null, error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    //All unexpected errors must be logged out to the user,
    // using the logger middleware 

    if (!expectedError) {
      winston.log(0,`Logging error ${error}`);
      //For displaying the toast notifications we can use the toast object
      toast.error("An unexpected error occured");
    }
    return Promise.reject(error);
  });

  function setJwt(token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  }

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put, 
    delete: axios.delete,
    setJwt
}