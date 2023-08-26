import * as actionTypes from './actionTypes';
import Axios from '../../../axios/Axios';

export const userLogin = (data, navigation) => (dispatch) => {
  console.log(data);
  Axios.post('users/login', data)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: response,
      });
      navigation('/dashboard');
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
};

export const userRegister = (data, navigation) => (dispatch) => {
  console.log(data);
  Axios.post('users/signup', data)
    .then((response) => {
      navigation('/auth/forgot-password/otp');
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
};
