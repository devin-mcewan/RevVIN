import NextButton from "../NextButton/NextButton";
import { useContext } from "react";
import { VinContext } from "../../context/VinContext";
import StartOverButton from "../StartOverButton/StartOverButton";
const Page1 = () => {
  const { vehicleData, vin, dispatchVIN } = useContext(VinContext);
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

  //Updating Context with the year, make, and model value's to make the API call on /Results/Page3 easier
  dispatchVIN({
    type: "set-year-make-model",
    year: year.Value,
    make: make.Value,
    model: model.Value,
  });

  return (
    <div>
      <h1>The Results Are In!</h1>
      <div className="vehicle-information-card">
        <h2>Vehicle Specifications</h2>
        <div className="text-box">
          <p>
            VIN: <b>{vin}</b>
          </p>
          <p>
            Year: <b>{year.Value}</b>
          </p>
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
      </div>
      <div className="navigate-buttons-card">
        <NextButton />
      </div>
      <div className="start-over-card">
        <StartOverButton />
      </div>
    </div>
  );
};
export default Page1;