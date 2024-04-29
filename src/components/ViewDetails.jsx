import { SlLocationPin } from "react-icons/sl";
import { NavLink, useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const detail = details.find(detail => detail._id === id)
    console.log(detail);

    return (
        <div className="border border-dashed border-green-600 mt-10 mb-16 rounded-xl bg-green-50">

               <div className="flex flex-col  lg:flex-row-reverse justify-between  md:p-4 p-2">
           
            <div className="lg:w-[54%]">
                 <div className="lg:h-[550px] md:h-[400px] h-[350px]">
                    <img src={detail.photo} className="rounded-xl w-full h-full object-cover" alt="" />
                 </div>
            </div>
            <div className="lg:w-[44%] p-4">
            
              <h2 className="md:text-4xl text-2xl mt-5 font-bold mb-6 text-green-800">{detail.spot}</h2>
              <p className="text-green-700 font-bold" >Country Name: <span className="text-green-600">{detail.country}</span></p>
              <div className="flex justify-between items-center mt-5 mb-5">
              <p className='text-green-600 font-semibold'>#{detail.seasonality}</p>
              <p className='flex items-center text-green-600 font-bold'><SlLocationPin className='text-green-600 text-xl mr-1'></SlLocationPin>{detail.location}</p>
              </div>
             <div className="border-t my-5 border-dotted border-green-800"></div>
              <p className="my-3 text-green-900 font-bold">Description: <span className="text-green-700 font-semibold ">{detail.description}</span></p>
              <div className="border-t mt-5 border-dotted border-green-800"></div>
              
              <p className="text-green-600 md:text-xl font-bold mt-5">Average Cost: ${detail.average}</p> 
              <p className="text-green-600 md:text-xl font-bold mt-5">Travel Time: {detail.time}</p>
              <p className="text-green-600 md:text-xl font-bold mt-5">TotalVisitors/Year: {detail.visitors}</p>
              
            <div className="mt-8">
            <NavLink to='/'> <button className="btn text-white bg-gradient-to-r from-lime-600 to-lime-600 w-1/2">Back to card</button></NavLink>
            </div>
            </div>
        </div>        

        </div>
    );
};

export default ViewDetails;