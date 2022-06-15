import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import allAction from '../actions/listActions';
function Home() {
  const data = useSelector((state) => state).operations;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);
  return (
    <Container maxWidth='lg'>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <h1
            style={{
              color: 'Highlight',
            }}
          >
            TO DO LIST
          </h1>
        </Box>
        <hr />
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant='contained'
              sx={{ float: 'right', margin: '5px' }}
              onClick={() => navigate('/add')}
            >
              ADD
            </Button>
          </Grid>

          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell width='5%' align='center'>
                      SR.NO
                    </TableCell>
                    <TableCell width='80%' align='left'>
                      Task
                    </TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell width='5%' align='center'>
                        {index + 1}
                      </TableCell>
                      <TableCell align='left'>{row.text}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          onClick={() => navigate(`/edit/${row.id}`)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          onClick={() => dispatch(allAction.delet(row.id))}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
