import NextButton from "../NextButton/NextButton";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();  
  return (

    <div>
      <h1>The results are in!</h1>
      <h2>Vehicle Specifications</h2>
      <div className="vehicle-information-card">
        <p>VIN: {/*results.VIN*/}12345678910</p>
        <p>Year: {/*results.ModelYear*/}1993</p>
        <p>Make: {/*results.Make*/}Mazda</p>
        <p>Model: {/*results.Model*/}Miata</p>
        <p>Trim: {/*results.Trim*/}LE</p>
        <p>Body: {/*results.BodyClass*/}Compact/Convertible</p>
      </div>
      <NextButton />
    </div>
  );
};
export default Page1;
