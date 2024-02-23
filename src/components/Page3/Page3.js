import PreviousButton from "../PreviousButton/PreviousButton";
import axios from "axios";
import { VinContext } from "../../context/VinContext";
import { useContext } from "react";
import StartOverButton from "../StartOverButton/StartOverButton";
// const callback = function(data) {
//   console.log(data);
// };

// // Show result as JSON
// search.json(params, callback);



const Page3 = () => {
  const { vehicleData, vin, year, make, model } = useContext(VinContext);
  const vehicle = vehicleData.Results;

  const callback = function(data) {
    console.log(data)
  }

  // const getImages = async () => {
  //   const response = await axios
  //     .get(`https://serpapi.com/search?engine=${params.engine}q=2019_Subaru_WRX`)
  //     .then(function (response) {
  //       console.log(response);
  //     });
  // };
  // getImages();

  return (
    <div>
      <h1>{`Showing Google Image Search Results for ${year} ${make} ${model}`}</h1>
      <img src="" alt="Image 1"></img>
      <img src="" alt="Image 2"></img>
      <img src="" alt="Image 3"></img>

      <div className="navigate-buttons-card">
        <PreviousButton />
      </div>
      <div className="start-over-card">
        <StartOverButton />
      </div>
    </div>
  );
};
export default Page3;
