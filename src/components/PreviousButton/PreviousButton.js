import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
const PreviousButton = () => {

  const navigate = useNavigate();
  const { page } = useParams();

  console.log("page: ", page);

  const handleClick = () => {
    
    // switch (pageNumber) {
    //   case 1:
    //     navigate("/RevVIN");
    //     break;
    //   case 2:
    //     navigate("/Results/1");
    //     break;
    //   case 3:
    //     navigate("/Results/2");
    //     break;
    //   default:
    //     break;
    // }
    if (parseInt(page) === 1) {
      navigate(`/RevVIN`);
    } else {
      navigate(`/Results/${parseInt(page) - 1}`);
    }
  };

  return (
    <div>
      <button onClick={() => handleClick()}>
        Previous
      </button>
    </div>
  );
};
export default PreviousButton;
