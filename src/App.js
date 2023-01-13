import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import data from './data'
import { useState } from 'react';
    

function App() {
    const dark_theme = {
        color: 'white',
        backgroundColor:'black'
    }
    const light_theme = {
        color: '#000000',
        backgroundColor:'white'
    }
    const [checkbox, setCheckbox] = useState(false)
    const styles = checkbox ? dark_theme : light_theme

  return (
    <div style={styles}>
      <Navbar setCheckbox={setCheckbox} checkbox={checkbox} />
      <Main data={data} checkbox={checkbox} />
    </div>
  );
}

export default App;
