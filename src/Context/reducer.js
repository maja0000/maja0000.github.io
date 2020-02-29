const initialState = {
  rating: 3,
  price: 1
};

const actions = {
  SET_WEATHER: "SET_WEATHER",
  SET_PRICE: "SET_PRICE",
  RESET: "RESET"
};

export default function reducer(state, action) {
  switch (action.type) {
    case actions.SET_WEATHER:
      return { ...state, weather: action.value };
    case actions.SET_PRICE:
      return { ...state, price: action.value };
    case actions.RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
