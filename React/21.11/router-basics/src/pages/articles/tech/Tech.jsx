import { useParams } from "react-router-dom";

const Tech = () => {
  const { id } = useParams();
  return (
    <>
      <h1>nested tech the id is {id}</h1>
    </>
  );
};

export default Tech;
