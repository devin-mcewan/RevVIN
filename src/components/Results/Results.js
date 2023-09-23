import NextButton from "../NextButton/NextButton";
import { useContext } from "react";
import { VinContext } from "../../context/VinContext";
import { useParams } from "react-router-dom";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";

const Results = () => {
  const { page } = useParams();
  console.log(typeof page);

  return (
    <div>
      {page === '1' && <Page1 />}
      {page === '2' && <Page2 />}
      {page === '3' && <Page3 />}
    </div>
  );
};
export default Results;
