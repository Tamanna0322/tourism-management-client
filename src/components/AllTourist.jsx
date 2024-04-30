import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllTourist = ({allTourist}) => {
   const {photo, spot, average, visitors, time, seasonality} = allTourist;
    return (
        <div className='bg-green-50'>
            
            <div className='border mb-6 flex flex-col md:flex-row justify-between border-green-700 border-dotted p-3 rounded-lg'>
            <div className=' h-[300px] md:w-[40%] justify-center rounded-lg'>
                <img className="w-full h-full rounded-lg object-cover"  src={photo} alt="" />
            </div>
            <div className='md:w-[58%]'>
            <h3 className='mt-3 text-4xl text-green-900 font-bold'>{spot}</h3>
            <p className='text-green-700 font-bold my-4'>#<span className='text-green-600'>{seasonality}</span></p>
            <div className='border-t border-green-600 border-dashed'></div>
           <p className='text-green-700 my-3 text-xl font-bold'>Average Cost: <span className='text-green-600'>${average}</span></p>
            
        
          <div className='border-t border-green-600 border-dashed'>

          </div>
         
           <p className='text-green-700 mt-3 font-bold'>TotalVisitors/Year: <span className='text-green-600'>{visitors}</span></p>
           <p className='text-green-700 mt-3 font-bold'>Travel Time: <span className='text-green-600'>{time}</span></p>

           <div className='mt-5'>
          <Link to={`/allTourist/${allTourist._id}`}><button className='btn w-full text-white bg-gradient-to-r from-lime-600 to-lime-600'>View Details</button></Link>
          </div>

            </div>
         
        </div>

        </div>
    );
};


AllTourist.propTypes ={
    allTourist: PropTypes.object
}

export default AllTourist;