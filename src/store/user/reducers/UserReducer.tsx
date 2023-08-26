import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLogin: false,
  token: '',
  user: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        token: action.payload.data.token,
        user: action.payload.data.data.user,
      };
    default:
      return state;
  }
};

export default UserReducer;
