import { Outlet } from "react-router-dom";

function Articles() {
  return (
    <>
      <h1>This is the Articles Page</h1>
      <Outlet />
    </>
  );
}

export default Articles;
