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
const edit = (id, data) => {
  return {
    type: 'edit',
    payload: { id, data },
  };
};

const allAction = {
  add,
  edit,
  delet,
};

export default allAction;
