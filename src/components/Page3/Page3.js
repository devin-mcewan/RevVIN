import PreviousButton from "../PreviousButton/PreviousButton";
import axios from "axios";
import SerpApiSearch from "google-search-results-nodejs";
const SerpApi = require('google-search-results-nodejs');
// const search = new SerpApi.GoogleSearch("398af66b924c17e411ae468d039ed6a22850b1e65860b8d64f5e1f97921d45c5");
const search = new SerpApiSearch("398af66b924c17e411ae468d039ed6a22850b1e65860b8d64f5e1f97921d45c5");

const year = 1993;
const make = "Mazda";
const model = "Miata";

const params = {
  engine: "google_images",
  q: `${year} ${make} ${model}`,
  location: "Austin, TX, Texas, United States"
};

const callback = function(data) {
  console.log(data);
};

// Show result as JSON
search.json(params, callback);


const Page3 = () => {
  const getImages = async () => {
    const response = await axios
      .get(`https://serpapi.com/search?engine=google_images&q=${year}-${make}-${model}`)
      .then(function (response) {
        console.log(response);
      });
  };
  getImages();

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
