import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';

export default function Employee() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginLeft:'450PX'
      }}
    >       

<h3 style={{marginLeft:'130px',marginTop:'70px'}}> Department Heads</h3>

<div style={{ marginTop:'50px'}}>
        <label> Name</label>
      <TextField fullWidth label=" Name" id="fullWidth" />
      <br/>
      <label> Employee Name</label>
      <TextField fullWidth label="Employee Name" id="fullWidth" /> 
      <br/>
      <label> Age</label>
      <TextField fullWidth label=" Age" id="fullWidth" /> 
      <br/>
      <label> Profile Image</label>
      <TextField fullWidth label="Profile Image" id="fullWidth" /> 
      <br/>
      <label> Profile Description</label>
      <TextField fullWidth label="Profile Description" id="fullWidth" /> 
      <br/>
      <label>Department </label>
      <TextField fullWidth label="Department " id="fullWidth" /> 
      
      
      




      </div>
      <div style={{ marginLeft:'210px',marginTop:'40px'}}>
      <Button variant="contained">Add</Button>
      </div>

    </Box>
  );
}