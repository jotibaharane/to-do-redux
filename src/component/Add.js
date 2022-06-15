import { Box, Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import Home from './Home';
import allAction from '../actions/listActions';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((state) => state.operations.data);
  const [data, setData] = useState('');

  
  const handelAdd = () => {
let a=[...list,{ id: uuid(), text: data }]
console.log(a);

    dispatch(allAction.add(a));
    navigate('/');
  };

  return (
    <div>
      <Home />
      <Modal
        open={true}
        onClose={() => navigate('/')}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <TextField
            label='Add Task'
            id='outlined-size-small'
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <Button
            variant='contained'
            sx={{ margin: '10px' }}
            onClick={handelAdd}
          >
            Add task
          </Button>
        </Box>
      </Modal>
      
    </div>
  );
}

export default Add;
