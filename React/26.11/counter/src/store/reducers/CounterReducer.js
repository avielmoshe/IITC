const initialStat = {
  counter: 0,
};

export const counterReducer = (state = initialStat, action) => {
  switch (action.type) {
    case "ADD_NUM":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "REDUCE_NUM":
      return { ...state, counter: state.counter - 1 };
    case "REST_COUNTER":
      return { ...state, counter: 0 };
    default:
      return state;
  }
};
