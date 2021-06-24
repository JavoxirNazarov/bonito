const GET_STOCKS = 'STOCKS/GET_STOCKS';

const defaultState = {
  stocks: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_STOCKS:
      return {...state, stocks: action.payload};

    default:
      return state;
  }
};

export function getStocks(stocks) {
  return {
    type: GET_STOCKS,
    payload: stocks,
  };
}
