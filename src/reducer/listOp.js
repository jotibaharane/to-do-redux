let initialState = {
  data:[]
};
const operations = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return {data:action.payload}
    case 'delete':
      return {data:state.data.filter((item) => item.id !== action.payload)}
    case 'edit':
      
      return {data:action.payload}
    default:
      return state;
  }
};

export default operations;
