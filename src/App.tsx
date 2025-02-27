import './App.css';
import { Button } from '@mui/material';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/screens/about/About';
import { useState } from 'react';
import DarkModeProvider, { DarkModeContext } from './data/contexts/DarkMode.context';


function App() {
  const [currentPage,setCurrentPage]=useState('home')
 const changePage=(pageName:string) => {
  setCurrentPage (pageName)
 }
 const goHome=()=>{
  setCurrentPage('home')
 }
  return (
    <DarkModeProvider>
    <div className="App">
    <Header title='Habit Tracker' onLogoClick={goHome}/>
    {currentPage =='home' && <Home onPageSelect={changePage}/>}
    {currentPage == 'about' && <About/>}
    </div>
    </DarkModeProvider>
  );
}

export default App;
