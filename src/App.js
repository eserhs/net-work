import Carousel from './Carousel/Carousel.jsx';
import './App.css';
import Navbar from './Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <div>
    <Navbar />
    </div>
    <div>
      <Carousel />
    </div>
    </div>
  );
}

export default App;
