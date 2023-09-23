import NextButton from "../NextButton/NextButton";
import { useContext } from "react";
import { VinContext } from "../../context/VinContext";
const Page1 = () => {
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
  const isTrim = (data) => {
    return data.Variable === "Trim";
  };
  const isBody = (data) => {
    return data.Variable === "Body Class";
  };

  let year = vehicle.find(isYear);
  let make = vehicle.find(isMake);
  let model = vehicle.find(isModel);
  let trim = vehicle.find(isTrim);
  let body = vehicle.find(isBody);

  return (
    <div>
      <h1>The results are in!</h1>
      <h2>Vehicle Specifications</h2>
      <div className="vehicle-information-card">
        <p>VIN: <b>{vin}</b></p>
        <p>Year: <b>{year.Value}</b></p>
        <p>
          Make: <b>{make.Value}</b>
        </p>
        <p>
          Model: <b>{model.Value}</b>
        </p>
        <p>
          Trim: <b>{trim.Value}</b>
        </p>
        <p>
          Body: <b>{body.Value}</b>
        </p>
      </div>
      <NextButton />
    </div>
  );
};
export default Page1;
