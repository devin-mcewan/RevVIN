import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";

const Page2 = () => {
  return (
    <div>
      <h1>What's it equipped with?</h1>
      <h2>Vehicle Equipment</h2>
      <div className="vehicle-information-card">
        <p>Displament(L): {/*results.DisplacementL*/}1.6L</p>
        <p>Drive Type: {/*results.DriveType*/}RWD</p>
        <p>Horsepower: {/*results.EngineHP*/}05</p>
        <p>Fuel Type: {/*results.FuelTypePrimary*/}Gasoline</p>
        <p>Transmission: {/*results.TranmissionStyle*/}Manual</p>
        <p>Turbo (Y/N): {/*results.Turbo*/}Yes</p>
      </div>
      <PreviousButton />
      <NextButton />
    </div>
  );
};
export default Page2;
