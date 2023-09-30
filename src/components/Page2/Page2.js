import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import { useContext } from "react";
import { VinContext } from "../../context/VinContext";
import StartOverButton from "../StartOverButton/StartOverButton";
const Page2 = () => {
  const { vehicleData, vin, year, make, model } = useContext(VinContext);
  const vehicle = vehicleData.Results;
  const isDisplacement = (data) => {
    return data.Variable === "Displacement (L)";
  };
  const isDriveType = (data) => {
    return data.Variable === "Drive Type";
  };
  const isEngineHP = (data) => {
    return data.Variable === "Engine Brake (hp) From";
  };
  const isFuelType = (data) => {
    return data.Variable === "Fuel Type - Primary";
  };
  const isTransmission = (data) => {
    return data.Variable === "Transmission Style";
  };
  const isTurbo = (data) => {
    return data.Variable === "Turbo";
  };

  let displacement = vehicle.find(isDisplacement);
  let driveType = vehicle.find(isDriveType);
  let hp = vehicle.find(isEngineHP);
  let fuelType = vehicle.find(isFuelType);
  let transmission = vehicle.find(isTransmission);
  let turbo = vehicle.find(isTurbo);

  return (
    <div>
      <h1>What's it equipped with?</h1>

      <div className="vehicle-information-card">
        <h2>Vehicle Equipment</h2>
        <div className="text-box">
          <p>
            Displacement(L): <b>{displacement.Value}</b>
          </p>
          <p>
            Drive Type: <b>{driveType.Value}</b>
          </p>
          <p>
            Horsepower: <b>{hp.Value}</b>
          </p>
          <p>
            Fuel Type: <b>{fuelType.Value}</b>
          </p>
          <p>
            Transmission: <b>{transmission.Value}</b>
          </p>
          <p>
            Turbo (Y/N): <b>{turbo.Value}</b>
          </p>
        </div>
      </div>
      <div className="navigate-buttons-card">
        <PreviousButton />
        <NextButton />
      </div>
      <div className="start-over-card">
        <StartOverButton />
      </div>
    </div>
  );
};
export default Page2;
