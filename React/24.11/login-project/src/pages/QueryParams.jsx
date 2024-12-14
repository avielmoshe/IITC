import { useSearchParams } from "react-router-dom";

const QueryPrint = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams.entries());

  return (
    <>
      <div>{`the params is ${searchParamsObj.name}`}</div>
    </>
  );
};

export default QueryPrint;
