import './App.css';
import { animals } from './components/animals';

const App = () => {

  const title = "";
  const showBackground = true; // Toggle this between true and false
  
  const background = (
    <img src="/images/ocean.jpg" className="background" alt="ocean" />
  );
  
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
        onClick={displayFact} // Attach event listener
      />
    );
  }
  
  // Function to handle the event and display a random fun fact
  function displayFact(e) {
    const animalName = e.target.alt; // Get the clicked animal's name
  
    if (animals[animalName] && animals[animalName].facts.length > 0) {
      const factsArray = animals[animalName].facts;
      const randomIndex = Math.floor(Math.random() * factsArray.length);
      const funFact = factsArray[randomIndex];
  
      const factDisplay = document.getElementById("fact");
      factDisplay.textContent = funFact;
    } else {
      document.getElementById("fact").textContent = "No fun facts available for this animal.";
    }
  }
  
  return (
    <div>
    {/* Use the OR operator to display a default title if 'title' is empty */}
    <h1>{title || "Click an animal for a fun fact"}</h1>
    {/* Conditionally render the background using the AND operator */}
    {showBackground && background}
    <div className="animals">{images}</div> {/* Render the images */}
    <p id="fact"></p> {/* Fact display area */}
  </div>
  )
}


export default App;