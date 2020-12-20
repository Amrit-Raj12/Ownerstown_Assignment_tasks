import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import SaveIcon from '@material-ui/icons/Save';

class App extends React.Component{
constructor(){
  super();
  this.state={
    show:false
  }
}


render() {
  return (
    <div className="App">
      {
        this.state.show ?
        <>
        <center>
        <h1>Different Types of Buttons</h1>
        <Button variant="outlined" color="primary" ml-1>
          Outlined
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
        <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      </center>
        </>
        :null
      }
        <center>
        <h1>Material UI Button</h1>
        <Button variant="contained" color="secondary" onClick={()=>{this.setState({show:!this.state.show})}}>
          Show/Hide Buttons
        </Button>
        </center>

    </div>
  );
}
}

export default App;
