import axios from "axios";
import { VinContext } from "../../context/VinContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const SearchVINButton = () => {
  const { vin, dispatchVIN, vehicleData, loading } = useContext(VinContext);
  const navigate = useNavigate();
  const handleClick = () => {
    dispatchVIN({
      type: 'reset'
    })
    console.log('Cleared State')
    const getVINfo = async () => {
      navigate("/Loading");
      const response = await axios
        .get(
          `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}*BA?format=json`
        )
        .then(function (response) {
          let vehicleDataResponse = response.data;
          dispatchVIN({
            type: "update-vehicleData",
            value: vehicleDataResponse,
          });
          dispatchVIN({
            type: "update-vin",
            value: vin,
          });
          dispatchVIN({
            type: "set-loading-state",
            value: false,
          });
          setTimeout(() => navigate("/Results/1"), 5000);
        })
        .catch(function (e) {
          if (e.response.status === 404) {
            console.error("404 - Bad Request");
          }
        });
    };
    getVINfo();
  };

  return (
    <div>
      <button onClick={handleClick}>Decode Your Vin!</button>
    </div>
  );
};
export default SearchVINButton;