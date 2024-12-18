import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return (
      <div className="flex flex-col w-[80%] mx-auto">
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Root;