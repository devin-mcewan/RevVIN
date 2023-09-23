import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const NextButton = () => {
  const navigate = useNavigate();
  const {page} = useParams();

  const handleClick = () => {
    navigate(`/Results/${Number(page) + 1}`)
  };
  return (
    <div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
};
export default NextButton;

