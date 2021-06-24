const SET_USER = 'USER/SET_USER';
const CLEAR_USER = 'USER/CLEAR_USER';

const defaultState = {
  user: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload};

    case CLEAR_USER:
      return {...state, user: null};

    default:
      return state;
  }
};

export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}
