import axios from "axios";
const SearchVINButton = () => {
    const handleClick = () => {
        console.log('button was clicked!')
        // use axios to get the information from the API using the provided VIN in the Home.js component input field.
        // axios.get();
    }
    return (
      <div>
          <button onClick={handleClick}>Decode Your Vin!</button>
      </div>
    );
  };
  export default SearchVINButton;
  