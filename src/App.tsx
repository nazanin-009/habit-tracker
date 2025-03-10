import './App.css';
import { Button, GlobalStyles } from '@mui/material';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/screens/about/About';
import { useState } from 'react';
import DarkModeProvider, { DarkModeContext } from './data/contexts/DarkMode.context';
import SettingsPage from './components/screens/settings/Settings';
import HabitsPage from './components/screens/habits/HabitsPage';
import HabitProvider from './data/contexts/HabitsDataContext';


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
    <HabitProvider>
    <div className="App">
    <Header title='Habit Tracker' onLogoClick={goHome}/>
    {currentPage =='home' && <Home onPageSelect={changePage}/>}
    {currentPage == 'about' && <About/>}
    {currentPage == "settings" && <SettingsPage/>}
    {currentPage == "habits"  && <HabitsPage/>}
    </div></HabitProvider>
    </DarkModeProvider>
  );
}

export default App;
