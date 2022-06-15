let initialState = [];
const operations = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((item) => item.id !== action.payload);
    case 'edit':
      let i = state.indexOf(
        state.find((item) => item.id === action.payload.id)
      );
      return state.splice(i, 1, {
        id: action.payload.id,
        text: action.payload.data,
      });
    default:
      return state;
  }
};

export default operations;
