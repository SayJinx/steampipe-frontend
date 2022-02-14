import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App" >
      <header className="App-header" >

        <p class="p1">This is a Steampipe Landing Page</p>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={2}>
            <Paper>Hey There</Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Paper>Hi There</Paper>
         </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Paper>Ho There</Paper>
          </Grid>
        </Grid>

    </div>
  );
}

export default App;
