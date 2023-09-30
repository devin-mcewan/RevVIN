import SearchVINButton from "../SearchVINButton/SearchVINButton";
import { useContext } from "react";
import { VinContext } from "../../context/VinContext";

const Home = () => {
  const { vin, dispatchVIN } = useContext(VinContext);
  const handleChange = (e) => {
    dispatchVIN({
      type: "update-vin",
      value: e.target.value,
    });
  };
  return (
    <div className="home">
      {/* Edit this to be in context about revVIN */}
      <h1>Welcome to the revVIN, your FREE vin decoder</h1>
      <div className="vin-input-area">
        <label htmlFor="vin-input">Enter your VIN here: </label>
        <input type="text" name="vin-input" onChange={handleChange}></input>
        <div className="search-vin-button">
          <SearchVINButton />
        </div>
      </div>
    </div>
  );
};
export default Home;

//Consider using a useEffect hook like on the 'Poster' app (social media app) so the input field is updated on every key stroke.
//Figure out how to pass the VIN in to the SearchVINButton component, you will use this in SearchVINButton to actually make the request.
//Trial Vin - 2016 WRX STI - JF1VA2R66K9823123
