import SearchVINButton from "../SearchVINButton/SearchVINButton";

const Home = () => {
  return (
    <div>
      {/* Edit this to be in context about revVIN */}
      <h1>Welcome to the HOME Page</h1>
      <div className="vin-input-area">
        <label for="vin-input">Enter your VIN here: </label>
        <input type="text" name="vin-input"></input>
        <SearchVINButton />
      </div>
    </div>
  );
};
export default Home;

//Consider using a useEffect hook like on the 'Poster' app (social media app) so the input field is updated on every key stroke.
//Figure out how to pass the VIN in to the SearchVINButton component, you will use this in SearchVINButton to actually make the request.
