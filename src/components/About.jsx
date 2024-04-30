import { useState } from 'react';
import nature from '../assets/nature.jpg';

const About = () => {

    const [showMore, setShowMore] = useState(false);

     const handleBtn =() =>{
        setShowMore(true)
     }

    return (
        <div className='flex justify-between  p-5'>
                <div className='w-[50%]'>
                   <h2 className='text-4xl font-semibold text-green-800 mb-4'>About Us</h2>
                   <hr />
                    <div className='flex flex-col space-y-3'>
                    <li className='text-green-700 mt-4'>Curated Travel Guides: Explore comprehensive guides to top destinations worldwide, curated by experienced travelers.</li>
                    <li className='text-green-700'>Insider Tips: Gain access to insider tips and local recommendations for authentic travel experiences.</li>
                    <li className='text-green-700'>Personalized Recommendations: Receive personalized recommendations based on your travel preferences and interests.</li>
                    {showMore && (
                        <>
                            <li className='text-green-700'>Travel Inspiration: Find inspiration for your next adventure with stunning photos, captivating stories, and travel anecdotes.</li>
                            <li className='text-green-700'>Community Engagement: Connect with like-minded travelers, share your own experiences, and join a vibrant community of adventurers.</li>
                            
                        </>
                    )}
                    </div>
               <div className='mt-5'>
               {!showMore && (
                    <button className="btn text-white bg-gradient-to-r from-lime-600 to-lime-500 " onClick={handleBtn}>Learn More</button>
                )}
               </div>

                </div>
                <div className='w-[35%] '>
                  <img className='h-[400px] rounded-xl w-full' src={nature} alt="" />
                </div>
        </div>
    );
};

export default About;