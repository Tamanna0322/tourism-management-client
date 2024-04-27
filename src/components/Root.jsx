import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-5 px-4">
                <Navbar></Navbar>
            </div>
            
           <div className="max-w-7xl mx-auto mt-5 px-4">
           <Outlet></Outlet>
           </div>

        </div>
    );
};

export default Root;