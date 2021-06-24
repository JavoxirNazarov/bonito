const GET_BALANCE = 'BALNCE/GET_BALANCE';

const defaultState = {
  balance: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_BALANCE:
      return {...state, balance: action.payload};

    default:
      return state;
  }
};

export function getBalance(balance) {
  return {
    type: GET_BALANCE,
    payload: balance,
  };
}
