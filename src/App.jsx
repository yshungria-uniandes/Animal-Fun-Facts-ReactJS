import './App.css';
import { animals } from './components/animals';

const App = () => {

const title = "";
const background = <img src='/images/ocean.jpg' className='background' alt='ocean' />

const images = []; // Initialize the images array

// Use a for...in loop to iterate over the animals object
for (let animal in animals) {
  images.push(
    <img
      key={animal} // Unique key for each image
      className="animal" // Class name
      alt={animal} // Alternative text
      src={animals[animal].image} // Image source
      aria-label={animal} // Accessible label
      role="button" // Accessibility role
    />
  );
}
  return (
    <div>
      <h1>{title === "" ? 'Click an animal for a fun fact' : title}</h1>
      {background}
      <div className='animals'>{images}</div>
    </div>
  )
}


export default App;