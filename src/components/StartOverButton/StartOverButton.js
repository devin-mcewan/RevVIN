import { useNavigate } from "react-router-dom";
const StartOverButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div>
      <button onClick={handleClick}>Start Over</button>
    </div>
  );
};
export default StartOverButton;
