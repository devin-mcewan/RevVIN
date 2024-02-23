import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const PreviousButton = () => {
  const navigate = useNavigate();
  const { page } = useParams();

  const handleClick = () => {
    if (page === 1) navigate(`/RevVIN`);
    else navigate(`Results/${page - 1}`);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Previous</button>
    </div>
  );
};
export default PreviousButton;
