import fig11 from '../assets/fig11.jpeg';
import fig12 from '../assets/fig12.jpg';
import fig13 from '../assets/fig13.jpg';
import fig14 from '../assets/fig14.jpg';
import fig15 from '../assets/fig14.webp';
import Lottie from "lottie-react";
import travel from '../assets/travel.json';
const Another = () => {
    return (
       <div className='my-10'>
              <div className='text-center'>
                <h2 className='text-3xl mb-5 font-semibold text-green-800'>Explore More Tourist Spot</h2>
                <p className='lg:w-[60%] md:w-[80%] mx-auto text-green-700'>Discover even more enchanting destinations awaiting your exploration. Dive deeper into our collection of captivating tourist spots and embark on your next unforgettable adventure.</p>
              </div>

         <div>


<div className='flex flex-col md:flex-row justify-between items-center'>
<div className='md:w-[50%] overflow-scroll mt-4 overflow-y-hidden'>
    <div className="carousel rounded-box w-[]">
        <div className="carousel-item w-1/2">
            <img src={fig11} className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
            <img src={fig12} className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
            <img src={fig13} className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
            <img src={fig14} className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
            <img src={fig15} className="w-full" />
        </div>

    </div>

</div>

<div className='md:w-[45%]'>
            <Lottie animationData={travel} loop={true}></Lottie>
            
</div>
</div>


</div>
       </div>
    );
};

export default Another;