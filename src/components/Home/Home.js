import SearchVINButton from "../SearchVINButton/SearchVINButton";
import { useContext } from "react";
import { VinContext } from "../../context/VinContext";
import { Button, Typography } from "@mui/material";

const Home = () => {
  const { vin, dispatchVIN } = useContext(VinContext);
  const handleChange = (e) => {
    dispatchVIN({
      type: "update-vin",
      value: e.target.value,
    });
  };

  const inputExampleVin = () => {
    document.getElementById("vin-input").value = "WAUB4CF57MA016727";
    dispatchVIN({
      type: "update-vin",
      value: "WAUB4CF57MA016727",
    });
  };

  const clearVinInput = () => {
    document.getElementById("vin-input").value = " ";
  };

  return (
    <div className="home">
      {/* Edit this to be in context about revVIN */}
      <h1>Welcome to the revVIN, your FREE vin decoder</h1>
      <div className="vin-input-area">
        <label htmlFor="vin-input">Enter your VIN here: </label>
        <input
          type="text"
          name="vin-input"
          onChange={handleChange}
          id="vin-input"
        ></input>
        <div className="search-vin-button">
          <SearchVINButton />
        </div>
      </div>
      <Button
        variant="outlined"
        style={{ opacity: 0.3, margin: "5px" }}
        onClick={() => inputExampleVin()}
      >
        Use Example VIN?
      </Button>
      <Button
        variant="outlined"
        style={{ opacity: 0.3, margin: "5px" }}
        onClick={() => clearVinInput()}
        color="error"
      >
        CLEAR
      </Button>
    </div>
  );
};
export default Home;

//Consider using a useEffect hook like on the 'Poster' app (social media app) so the input field is updated on every key stroke.
//Figure out how to pass the VIN in to the SearchVINButton component, you will use this in SearchVINButton to actually make the request.
//Trial Vin - 2016 WRX STI - JF1VA2R66K9823123
