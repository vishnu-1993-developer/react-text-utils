import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode,setDarkMode] = useState('light');

  const toggleMode = ()=>{
    if(mode == 'light')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#104cbd';
    }
    else
    {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
    <Navbar title="TextUtils Project" mode={mode} toggleMode = {toggleMode} />
    <TextForm heading = "Enter the text to analyze" mode={mode} />
    </>
  );
}

export default App;
