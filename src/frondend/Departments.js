import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';

export default function Departments() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginLeft:'450PX'
      }}
    >       

<h3 style={{marginLeft:'130px',marginTop:'70px'}}> Department Details </h3>
<div style={{ marginTop:'50px'}}>
        <label>Department Name</label>
      <TextField fullWidth label="Department Name" id="fullWidth" />
      <br/>
      <label> Year Founded</label>
      <TextField fullWidth label="Year Founded" id="fullWidth" /> 
      <br/>
      <label>Description</label>
      <TextField fullWidth label="Description" id="fullWidth" /> 
      <br/>
      <label> Department Profile Image</label>
      <TextField fullWidth label="Department Profile Image" id="fullWidth" />  
      </div>
      <div style={{ marginLeft:'210px',marginTop:'40px'}}>
      <Button variant="contained">Add</Button>
      </div>
    </Box>
  );
}