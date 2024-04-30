
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import saint from '../assets/saint.jpg';
import bali from '../assets/bali.jpg';
import malaysia from '../assets/malaysia.webp';
import phuket from '../assets/phuket.jpg';
import sundarban from '../assets/sundarban.jpg';
import vietnam from '../assets/vietnam.webp';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData } from "react-router-dom";
import Tourist from "./Tourist";
import About from "./About";


const Home = () => {

    const addTourist = useLoaderData().slice(0, 6);
    console.log(addTourist);

    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className=' text-center mb-6'>
                    <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sundarban})` }}>
                        <div className='flex flex-col justify-center h-full'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'> Exploring the Enchanting Sundarbans</h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Home to Bengal tigers & diverse wildlife, UNESCO World Heritage Site, with stunning mangrove forests & tranquil landscapes.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover object-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${phuket})` }}>
                        <div className='flex flex-col justify-center h-full'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl '> Discovering Paradise in Phuket</h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Experience the allure of Phuket, Thailands premier island destination, boasting pristine beaches, vibrant nightlife, and rich cultural heritage</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bali})` }}>
                        <div className='flex flex-col justify-center h-full'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl '> Bali: Island of Enchantment</h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Embark on a journey to Bali, where lush landscapes, vibrant culture, and serene beaches await, offering an unforgettable escape.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${saint})` }}>
                        <div className='flex flex-col justify-center h-full'>
                            <h3 className='lg:text-5xl  text-white font-bold md:text-3xl text-2xl'>Saint Martin: Paradise Found</h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Saint Martin, a pristine gem in the Caribbean, invites you to indulge in turquoise waters, white sandy beaches, and unparalleled relaxation.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${vietnam})` }}>
                        <div className='flex flex-col justify-center h-full'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'>Vietnam: Land of Timeless Charm</h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Vietnam beckons with its rich history, stunning landscapes, and vibrant culture, offering travelers an unforgettable journey through enchanting cities and breathtaking natural wonders.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${malaysia})` }}>
                        <div className='flex flex-col justify-center h-full'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'>Malaysia: Where Cultures Collide</h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Malaysia invites you to experience a melting pot of cultures, from bustling cities to pristine islands, offering a vibrant tapestry of traditions, flavors, and landscapes.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


           <div className="mt-14">
           <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800"> Popular Tourist Destinations</h2>
            <p className="md:w-[80%] w-[90%] mx-auto text-green-800 mt-3">Dive into captivating tourist spots worldwide, offering adventure, relaxation, and cultural immersion. Start your journey now!</p>
        </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {
                addTourist.map(tourist => <Tourist key={tourist._id} tourist={tourist}></Tourist>)
            }
          </div>
           </div>


           <div>
           <About></About>
           </div>

        </div>
    );
};

export default Home;