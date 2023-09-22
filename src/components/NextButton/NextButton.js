import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const NextButton = () => {
    const navigate = useNavigate();
    const routeParams = useParams();
    const handleClick =() => {
        // navigate('/Page2')
    }
    return (
        <div>
            <button onClick={handleClick}>Next</button>
        </div>
    );
}
export default NextButton;