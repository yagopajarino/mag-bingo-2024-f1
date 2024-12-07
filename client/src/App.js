import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <div className="App h-screen h-screen p-5">
      {/* <h1 className=" text-4xl text-center">Bingo mundial</h1> */}
      <Outlet />
    </div>
  );
}

export default App;
