import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import bike from './images/mountain.png';
import swimming from './images/swimming.png';
import wedding from './images/wedding.png';

const data = [
        {
            image: swimming,
            status: 'Sold out',
            rating: '5.0(6)',
            description: 'Life lessons with Katie Zaferes',
            price:'$136'
        },
        {
            image: wedding,
            status: 'Online',
            rating: '5.0(30)',
            description: 'Learn wedding photography',
            price:'$125'
        },
        {
            image: bike,
            status: '',
            rating: '4.8(2)',
            description: 'Group Moutain Biking',
            price:'$50'
  },
        {
            image: swimming,
            status: 'Sold out',
            rating: '5.0(6)',
            description: 'Life lessons with Katie Zaferes',
            price:'$136'
        },
        {
            image: wedding,
            status: 'Online',
            rating: '5.0(30)',
            description: 'Learn wedding photography',
            price:'$125'
        },
        {
            image: bike,
            status: '',
            rating: '4.8(2)',
            description: 'Group Moutain Biking',
            price:'$50'
        }

    ]
    

function App() {
  
  return (
    <div>
      <Navbar />
      <Main data={data}/>
    </div>
  );
}

export default App;
