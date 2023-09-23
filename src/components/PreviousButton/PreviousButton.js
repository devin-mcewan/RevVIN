import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const PreviousButton = () => {
    const navigate = useNavigate();
    const {page} = useParams();
  
    const handleClick = () => {
      navigate(`/Results/${Number(page) - 1}`)
    };
    return (
      <div>
        <button onClick={handleClick}>Previous</button>
      </div>
    );
}
export default PreviousButton;