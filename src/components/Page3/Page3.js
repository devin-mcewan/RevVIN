import PreviousButton from "../PreviousButton/PreviousButton";

const Page3 = () => {
  const year = 1993;
  const make = "Mazda";
  const model = "Miata";
  return (
    <div>
      <h1>{`Showing Results for ${year} ${make} ${model}`}</h1>
      <img src="" alt="Image 1"></img>
      <img src="" alt="Image 2"></img>
      <img src="" alt="Image 3"></img>
      <PreviousButton />
    </div>
  );
};
export default Page3;
