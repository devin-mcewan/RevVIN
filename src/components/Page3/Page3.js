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
  const SerpApi = require('google-search-results-nodejs')
  const search = new SerpApi.GoogleSearch("398af66b924c17e411ae468d039ed6a22850b1e65860b8d64f5e1f97921d45c5");
  const params = {
    engine: 'google_images', 
    google_domain: 'google.com', 
    q: `${year} ${make} ${model}`
  }

  const callback = function(data) {
    console.log(data)
  }
  search.json(params,callback);

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
