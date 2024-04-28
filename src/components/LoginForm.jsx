import Lottie from "lottie-react";
import log from '../assets/log.json';
import { NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../providers/AuthProvider";

const LoginForm = () => {

    const { signInUser } = useContext(AuthContext)

    const [showPass, setShowPass] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })


    }

    return (
        <div>
            <div className="">
                <div className="text-center text-3xl">
                    <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Log in to{' '}
                        <span style={{ color: 'green', fontWeight: 'bold' }}>

                            <Typewriter
                                words={['Explore', 'Discover', 'Customize', 'Organize!']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>
                </div>
                <div className="flex justify-between items-center flex-col md:flex-row ">
                    <div className="lg:w-[40%] md:w-[50%] w-[70%]">
                        <div className="w-full ">
                            <Lottie animationData={log} loop={true}></Lottie>
                        </div>
                    </div>

                    <div className="hero min-h-screen lg:w-[50%] md:w-[50%] w-full flex justify-center">
                        <div className="hero-content flex flex-col md:flex-row-reverse ">
                            <div className="text-center lg:text-left md:w-[50%] w-[80%] lg:w-full">

                            </div>
                            <div className="card shrink-0 lg:w-[600px] border border-green-700 max-w-sm shadow-2xl">
                                <form onSubmit={handleLogin} className="card-body">
                                    <div>

                                        <p className='text-green-900 font-semibold text-3xl'>Login to continue...</p>
                                    </div>
                                    <div className='border-t border-green-700 border-dotted'>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-green-900 font-semibold">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Enter Email" className="input input-bordered"

                                        />

                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text text-green-900 font-semibold">Password</span>
                                        </label>

                                        <input type={showPass ? 'text' : "password"} name="password" placeholder="Enter Password" className="input input-bordered"
                                        />
                                        <span className='absolute left-[90%] top-[62%]' onClick={() => setShowPass(!showPass)}>
                                            {
                                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }
                                        </span>

                                    </div>


                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <div className="form-control mt-3">
                                        <button className="btn text-white bg-gradient-to-r from-lime-600 to-lime-500">Login</button>
                                    </div>

                                    <div className='mt-4'>
                                        <p>Do Not Have any Account? <NavLink className='link link-hover text-green-600' to='/register'>Sign UP</NavLink> </p>
                                    </div>
                                    <div className='flex mt-3 justify-between'>
                                        <div className='w-[30%] '>
                                            <h3 className='border-t border-green-800 mt-3'></h3>
                                        </div>
                                        <div className='text-center'>
                                            <p className='font-bold text-green-900'>continue with</p>
                                        </div>
                                        <div className='w-[30%]'>
                                            <h3 className='border-t border-green-800 mt-3'></h3>
                                        </div>
                                    </div>
                                </form>

                                <div className="">
                                    <button className="w-[80%] mx-auto border border-green-700 flex p-2 rounded-xl items-center justify-center gap-4">
                                        <FaGoogle className="text-xl"></FaGoogle>
                                        <p className="text-2xl"> Google</p>
                                    </button>
                                    <button className="w-[80%] my-5 p-2 mx-auto border border-green-700 rounded-xl flex items-center justify-center gap-4">
                                        <FaGithub className="text-xl"></FaGithub>
                                        <p className="text-2xl"> Github</p>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginForm;