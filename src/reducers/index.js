const defaultDataState = {
  data: {},
  loading: true
};

const information = (state = defaultDataState, action) => {
  switch (action.type) {
    case "CREATE_DATA":
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
};

export default information;
