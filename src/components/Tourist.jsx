import PropTypes from 'prop-types';
import { SlLocationPin } from 'react-icons/sl';
import { Link } from 'react-router-dom';


const Tourist = ({tourist}) => {
 
    const {photo, spot, country, seasonality, location} = tourist

    return (
        <div>
           
           <div className='border border-green-700 border-dotted p-3 rounded-lg'>
            <div className=' flex overflow-hidden h-[250px] justify-center rounded-lg'>
                <img className="w-full h-full rounded-lg object-cover transition hover:scale-110 duration-[4000ms]"  src={photo} alt="" />
            </div>
            <h3 className='mt-5 text-2xl text-green-900 font-bold'>{spot}</h3>
           <div className='flex items-center justify-between mb-3'>
           <p className='text-green-600 mt-2 font-bold'>{country}</p>
            <p className='text-green-700 font-bold mr-6'>#<span className='text-green-600'>{seasonality}</span></p>
           </div>
           <hr />
           <div className='flex mb-5 justify-between font-bold text-green-950 mt-3'>
           <p className='flex items-center text-green-800'><SlLocationPin className='text-green-900 text-xl mr-1'></SlLocationPin>{location}</p>

           </div>
           <Link to={`/tourist/${tourist._id}`}><button className='btn w-full text-white bg-gradient-to-r from-lime-600 to-lime-600'>View Details</button></Link>
        </div>

        </div>
    );
};


Tourist.propTypes ={
    tourist: PropTypes.object
}

export default Tourist;