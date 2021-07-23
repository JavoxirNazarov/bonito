const ADD_PRODUCT = 'PRODUCTS/ADD_PRODUCT';
const INCREMENT_PRODUCT = 'PRODUCTS/INCREMENT';
const DECREMENT_PRODUCT = 'PRODUCTS/DECREMENT';
const REMOVE_PRODUCT = 'PRODUCTS/REMOVE_PRODUCT';
const CLEAR_ALL = 'PRODUCTS/CLEAR_ALL';

const defaultState = {
  products: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.payload,
            amount: 1,
          },
        ],
      };

    case INCREMENT_PRODUCT:
      return {
        ...state,
        products: state.products.map((el, index) => {
          if (index === action.payload) {
            return {...el, amount: el.amount + 1};
          }
          return el;
        }),
      };

    case DECREMENT_PRODUCT:
      return {
        ...state,
        products: state.products.map((el, index) => {
          if (index === action.payload) {
            return {...el, amount: el.amount - 1};
          }
          return el;
        }),
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((_, i) => i !== action.payload),
      };

    case CLEAR_ALL:
      return defaultState;

    default:
      return state;
  }
};

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function incrementProduct(index) {
  return {
    type: INCREMENT_PRODUCT,
    payload: index,
  };
}

export function decrementProduct(index) {
  return {
    type: DECREMENT_PRODUCT,
    payload: index,
  };
}

export function removeProduct(index) {
  return {
    type: REMOVE_PRODUCT,
    payload: index,
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL,
  };
}
