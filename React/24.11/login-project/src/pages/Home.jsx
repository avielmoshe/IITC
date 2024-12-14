import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Page
      <button>
        <Link to={"/SignIn"}>SignIn</Link>
      </button>
      <button>
        <Link to={"/query-print"}>query-print</Link>
      </button>
      <button>
        <Link to={"/dummy-data"}>dummy-data</Link>
      </button>
    </div>
  );
};
export default Home;
