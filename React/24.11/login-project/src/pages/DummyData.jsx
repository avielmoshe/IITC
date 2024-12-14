import { useLoaderData } from "react-router-dom";

const DummyData = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>DummyData Page</div>;
};

export const fetchDataFn = async () => {
  try {
    let fData;
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await res.json();
    fData = json; 
    return fData;
  }
 catch (error) 
  {
    console.error(error);
  }
};

export default DummyData;
