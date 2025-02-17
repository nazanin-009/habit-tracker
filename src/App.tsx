import './App.css';
import { Button } from '@mui/material';
import Header from './components/header/header';
import Home from './components/home/home';


function App() {
  return (
    <div className="App">
    <Header title='Habit Tracker'/>
    <Home/>
    </div>
  );
}

export default App;
