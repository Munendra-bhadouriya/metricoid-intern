import './App.css';
import Main from './sections/Main/Main';
import NavBar from './sections/NavBar/NavBar';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#212121';
    } else {
      document.body.style.backgroundColor = '#f7f9f9'; 
    }
  }, [theme]);


  return (
    <div className='relative w-[100vw] h-[100vh] font-redHat text-black'>
      <NavBar theme={theme} setTheme={setTheme} />
      <Main theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
