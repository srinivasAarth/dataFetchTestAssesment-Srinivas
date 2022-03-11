import React, { useCallback } from "react";

export const Test = () => {
  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts/";
  const [status, setStatus] = React.useState("idle");
  const [data, setData] = React.useState([]);
  const fetchFunction = useCallback(async () => {
    setStatus("loading");
    const beforeFetch = await fetch(API_ENDPOINT);

    const covertedData = await beforeFetch.json();
    setData(covertedData);

    setStatus("success");
  }, [API_ENDPOINT]);

  React.useEffect(() => {
    fetchFunction();
  }, [fetchFunction]);

  const removeElement = (e) => {
    const removeItem = data.filter((el, i) => el !== e);
    // console.log(removeItem);
    setData(removeItem);
  };

  const realObject = {
    name: "test",
  };

  const result =
    status === "success" ? (
      data.map((e, i) => (
        <div key={i}>
          <div>title : {e.title}</div>
          <button onClick={() => removeElement(e)}>remove</button>
        </div>
      ))
    ) : (
      <h2>Loading....</h2>
    );
  return <div className="App">{result}</div>;
};

export default Test;
