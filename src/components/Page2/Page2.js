import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import { useContext } from "react";
import { VinContext } from "../../context/VinContext";
const Page2 = () => {
  const { vehicleData, vin } = useContext(VinContext);
  const vehicle = vehicleData.Results;
  const isDisplacement = async (data) => {
    return data.Variable === "DisplacementL";
  };
  const isDriveType = (data) => {
    return data.Variable === "DriveType";
  };
  const isEngineHP = (data) => {
    return data.Variable === "EngineHP";
  };
  const isFuelType = (data) => {
    return data.Variable === "Fuel Type Primary";
  };
  const isTransmission = (data) => {
    return data.Variable === "TransmissionStyle";
  };
  const isTurbo = (data) => {
    return data.Variable === 'Turbo';
  }

  let displacement = vehicle.find(isDisplacement);
  let driveType = vehicle.find(isDriveType);
  let hp = vehicle.find(isEngineHP);
  let fuelType = vehicle.find(isFuelType);
  let transmission = vehicle.find(isTransmission);
  let turbo = vehicle.find(isTurbo);
  return (
    <div>
      <h1>What's it equipped with?</h1>
      <h2>Vehicle Equipment</h2>
      <div className="vehicle-information-card">
        <p>Displament(L): {displacement}</p>
        <p>Drive Type: {driveType}</p>
        <p>Horsepower: {hp}</p>
        <p>Fuel Type: {fuelType}</p>
        <p>Transmission: {transmission}</p>
        <p>Turbo (Y/N): {turbo}</p>
      </div>
      <PreviousButton />
      <NextButton />
    </div>
  );
};
export default Page2;
