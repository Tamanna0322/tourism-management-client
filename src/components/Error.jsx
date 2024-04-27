import Lottie from "lottie-react";
import errorAnimation from '../assets/error.json';
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className=" mt-9">
            <div className="w-1/3 mx-auto">
                <Lottie animationData={errorAnimation} loop={true} ></Lottie>
            </div>
            <div className="flex justify-center">
               <NavLink to='/'><button className="btn text-white bg-gradient-to-r from-lime-600 to-lime-500">Go back to Home</button></NavLink>
            </div>
        </div>
    );
};

export default Error;