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
    <div>
      {/* Edit this to be in context about revVIN */}
      <h1>Welcome to the HOME Page</h1>
      <div className="vin-input-area">
        <label for="vin-input">Enter your VIN here: </label>
        <input type="text" name="vin-input" onChange={handleChange}></input>
        <SearchVINButton/>
      </div>
    </div>
  );
};
export default Home;

//Consider using a useEffect hook like on the 'Poster' app (social media app) so the input field is updated on every key stroke.
//Figure out how to pass the VIN in to the SearchVINButton component, you will use this in SearchVINButton to actually make the request.
//Trial Vin - 2016 WRX STI - JF1VA2R66K9823123
