import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const Root = () => {
    return (
        <div className="bg-[#f1f2f2]">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;