import { useEffect, useState } from "react";

const Loading = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);
  return (
    <div>
      <h1>Fetching Vehicle information...</h1>
      <iframe
        src="https://giphy.com/embed/uXEEwzrdRZ9NHHTrD4"
        width="450"
        height="330"
        frameBorder="0"
        title="loading-wheels"
      ></iframe>
      <h3>{`${count} Seconds of Loading...`}</h3>
    </div>
  );
};
export default Loading;
