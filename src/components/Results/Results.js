import NextButton from "../NextButton/NextButton";
import { useContext } from "react";
import { VinContext } from "../../context/VinContext";
import { useParams } from "react-router-dom";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";

const Results = () => {
  const { page } = useParams();
  console.log ('current page value: ', page)
  console.log('page typeof', typeof page);
  let pageNumber = parseInt(page);
  console.log('pageNumber', pageNumber);
  return (
    <div className="results">
      {pageNumber === 1 && <Page1 />}
      {pageNumber === 2 && <Page2 />}
      {pageNumber === 3 && <Page3 />}
    </div>
  );
};
export default Results;
