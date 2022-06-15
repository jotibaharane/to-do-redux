const add = (data) => {
  return {
    type: 'add',
    payload: data,
  };
};

const delet = (id) => {
  return {
    type: 'delete',
    payload: id,
  };
};
const edit = (data) => {
  return {
    type: 'edit',
    payload: data,
  };
};

const allAction = {
  add,
  edit,
  delet,
};

export default allAction;
