import PreviousButton from "../PreviousButton/PreviousButton";
import axios from "axios";
import { VinContext } from "../../context/VinContext";
import { useContext } from "react";
// const params = {
//   engine: "google_images",
//   q: `${year} ${make} ${model}`,
//   location: "Austin, TX, Texas, United States"
// };

// const callback = function(data) {
//   console.log(data);
// };

// // Show result as JSON
// search.json(params, callback);


const Page3 = () => {
  const { vehicleData, vin } = useContext(VinContext);
  const vehicle = vehicleData.Results;

  const isYear = (data) => {
    return data.Variable === "Model Year";
  };
  const isMake = (data) => {
    return data.Variable === "Make";
  };
  const isModel = (data) => {
    return data.Variable === "Model";
  };

  let year = vehicle.find(isYear);
  let make = vehicle.find(isMake);
  let model = vehicle.find(isModel);

  const getImages = async () => {
    // const response = await axios
    //   .get(`https://serpapi.com/search?engine=google_images&q=${year}-${make}-${model}`)
    //   .then(function (response) {
    //     console.log(response);
    //   });
  };
  getImages();

  return (
    <div>
      <h1>{`Showing Results for ${year} ${make} ${model}`}</h1>
      <img src="" alt="Image 1"></img>
      <img src="" alt="Image 2"></img>
      <img src="" alt="Image 3"></img>
      <PreviousButton />
    </div>
  );
};
export default Page3;
