import { NavLink, useNavigate } from "react-router-dom";
import reg from '../assets/reg.json';
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const {createUser, user, setUser, updateUsersProfile } = useContext(AuthContext);

  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

    const handleRegister = e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;
      console.log(name, email, photo, password);

      if(password.length < 6){
        setError('password must be atleast six characters')
        return
      }

      if(!/[A-Z]/.test(password)){
        setError("password must have an uppercase letter")
        return
      }
  
      if(!/[a-z]/.test(password)){
        setError("password must have a lowercase letter")
        return
      }

      setError('')


      createUser(email, password)
      .then(result => {
           setUser(result.user)
           updateUsersProfile(name, photo)
           .then(() => {
             toast.success("Registration complete", {
               position: "top-right",
               autoClose: 2000,
               onClose: () =>{
                 setTimeout(() => {
                   navigate('/')
                 });
               }
             })
     
               setUser({...user,displayName:name,photoURL:photo,email:email})
               
           })
      })
      .catch(error =>{
        console.log(error)
      })
    }

    return (
        <div>

<div className="">
    <div>
        <h3 className="md:text-3xl font-semibold lg:w-[50%] md:w-[80%] mx-auto text-center">Sign up now for personalized <span className="text-green-700">travel experiences</span> and <span className="text-green-700">exclusive offers!</span></h3>
    </div>
        <div className="hero min-h-screen p-3">
        <div className="flex items-center flex-col md:flex-row lg:justify-around md:justify-between w-full h-full ">
          <div className=" lg:text-left lg:w-[30%] md:w-[44%] w-[70%]">
            <div className='lg:w-[400px] mb-10'>
            <Lottie animationData={reg} loop={true}></Lottie>
            </div>
          </div>
          <div className="card shrink-0 mb-6 lg:w-[70%] w-full max-w-sm shadow-2xl border border-green-700 ">
            <form onSubmit={handleRegister} className="card-body w-full">
              <div className='text-center'>
                <h2 className='text-3xl font-bold text-green-900'>Create Account</h2>
                <p className='text-green-900 mb-2'>Register Now</p>
              </div>
              <div className='border-t border-green-700 border-dotted'>

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold">Full Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter Your Full Name" className="input input-bordered" required
                   
                 />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required
              
                 />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Your Photo URL" className="input input-bordered"
                  
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-green-900 font-semibold">Password</span>
                </label>
                <input type={showPass ? 'text' : "password"} name="password" placeholder="Enter Your Password" className="input input-bordered" required
                 />
                 <span className='absolute left-[90%] top-[62%]' onClick={() => setShowPass(!showPass)}>
                  {
                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                 </span>
                
              </div>
              {error &&  <small className='text-red-500'>{error}</small>}
             
              <div className="form-control mt-6">
                <button className="btn text-white bg-gradient-to-r from-lime-600 to-lime-500">Register</button>
              </div>
              <div>
                <p>Already Have an Account? please <NavLink className='text-green-700 link link-hover' to='/login'>Login</NavLink></p>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      <ToastContainer />
        </div>
    );
};

export default Register;