import { useLoaderData } from "react-router-dom";
import AllTourist from "./AllTourist";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";



const AllTourSpot = () => {

    const allTourists = useLoaderData();
    // console.log(allTourists);
    const [sortedTourists, setSortedTourists] = useState(allTourists);
    
    const handleSort = async() =>{
        
        const response= await fetch('http://localhost:5000/add/sort');
        const data = await response.json();
        setSortedTourists(data);
       
    
    }

    return (
        <div>
          <div>
          <div className="flex justify-center mt-6">
           <details className="dropdown ">
                <summary className="m-1 btn bg-[#23BE0A] md:px-5 md:py-3 text-white">Sort By
                <RiArrowDropDownLine className="text-2xl"></RiArrowDropDownLine>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><button className="text-green-600 font-bold" onClick={handleSort}>Average cost</button></li>
                </ul>
            </details>
           </div>
          </div>
          <div className="my-16">
          {
               sortedTourists.map(allTourist => <AllTourist key={allTourist._id} allTourist={allTourist}></AllTourist>)
           }
          </div>
        </div>
    );
};

export default AllTourSpot;