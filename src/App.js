import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'; 
import TextFrom from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route, 
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert =(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    }, 2000)
  }
  const changeNum1 = ()=>{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("white mode has been enabled", "Success")
  }
  const changeNum2 = ()=>{
    setMode('light');
    document.body.style.backgroundColor = 'yellow';
    showAlert("yellow mode has been enabled", "Success")
  }
  const changeNum3 = ()=>{
    setMode('dark');
    document.body.style.backgroundColor = 'green';
    showAlert("green mode has been enabled", "Success")
  }
  const changeNum4 = ()=>{
    setMode('dark');
    document.body.style.backgroundColor = 'red';
    showAlert("red mode has been enabled", "Success")
  }
  const changeNum5 = ()=>{
    setMode('dark');
    document.body.style.backgroundColor = 'blue';
    showAlert("blue mode has been enabled", "Success")
  }
  const changeNum6 = ()=>{
    setMode('dark');
    document.body.style.backgroundColor = 'gray';
    showAlert("black mode has been enabled", "Success")
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'gray';
        showAlert("dark mode has been enabled", "Success")
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled", "Success")

    }
}

  return (
    <div>
      {/* <Router> */}
      <Navbar title = "Wirte below to convert to upper case" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <button className="btn btn-primary mx-3 my-3" type="submit" style = {{backgroundColor: "white", color: "black"}} onClick={changeNum1}>light</button>
      <button className="btn btn-primary mx-3" type="submit" style = {{backgroundColor: "yellow", color: "black"}}onClick={changeNum2}>Yellow</button>
      <b utton className="btn btn-primary mx-3" type="submit" style = {{backgroundColor: "green"}} onClick={changeNum3}>Green</b>
      <button className="btn btn-primary mx-3" type="submit" style = {{backgroundColor: "red"}} onClick={changeNum4}>Red</button>
      <button className="btn btn-primary mx-3" type="submit" style = {{backgroundColor: "blue"}} onClick={changeNum5}>Blue</button>
      <button className="btn btn-primary mx-3" type="submit" style = {{backgroundColor: "black"}} onClick={changeNum6}>balck</button>
      <div className = "container"></div> 
      {/* <About /> */}
      <TextFrom headling = "Enter your text below" mode = {mode} toggleMode = {toggleMode}/>
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextFrom headling = "Enter your text below" mode = {mode} toggleMode = {toggleMode}/>
          </Route>
        </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App; 
