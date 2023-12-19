import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Utils/Hook/UseAuth";
import swal from "sweetalert";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import {  FaGithub, FaGoogle } from "react-icons/fa";




const Register = () => {
    const {createUser, googleLogin, githubLogin, } = UseAuth()
    const [registerError, setRegisterError]= useState('')
    const Navigate = useNavigate()
    const handleRegisterUser = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        // Remove old error message
        setRegisterError('')
        if(!regex.test(password)){
            setRegisterError('Minimum 6 characters, at least one letter, one number and one special character.');
            return
        }

        createUser(email, password)
        .then(res =>{
            const user = res.user;
            updateProfile(user, {displayName: name})
            .then(()=>{
                swal("Good job!", "User Create successfully", "success");
                e.target.reset()
                Navigate('/')
            })
        })
        .catch(error => {
            toast.error(`${error.message}`)
        })
    }

    const handleSocailMideaLogin =(media)=>{
        media().then(()=> {
            toast.success('User logged in successfully');
            Navigate('/')
        })
        .catch(() => toast.error('Login closed! Try Again Login.'))
    }

    return (
        <div>
            <div className=" pt-3  px-16 md:px-0 md:w-[50%] mx-auto   h-[80vh]">
            <div className="bg-white p-10 rounded-md">
                <h1 className="text-center font-bold text-gray-700 text-2xl pb-3">Register</h1>
            <form className="space-y-2" onSubmit={handleRegisterUser}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder="User Name..." className="input input-bordered" name="name" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email..." name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password..." className="input input-bordered" name="password" required />
                        <p className="text-error font-medium pt-2">{registerError}</p>
                        </div>
                        <div className="form-control ">
                        <button  className="text-lg btn btn-primary">Register</button>
                        </div>
            </form>
            <p className="pt-5 text-lg font-semibold text-gray-600">Already Create your Accout Visite Now? Please <span><Link to={'/login'} className="link text-secondary">Login</Link></span>. </p>

            <div className="flex gap-2  items-center py-3">
                <div className="border border-gray-700 w-full"></div>
                <div className="text-gray-900 font-bold text-xl">OR</div>
                <div className="border border-gray-700 w-full"></div>
            </div>

            <div className="w-fit mx-auto flex gap-6 items-center ">

            <p onClick={()=>handleSocailMideaLogin(googleLogin)} className="p-2 text-3xl text-blue-500 cursor-pointer rounded-full bg-red-100">
            <FaGoogle />
            </p>

            <p onClick={()=>handleSocailMideaLogin(githubLogin)} className="p-2 cursor-pointer text-3xl text-pink-400 rounded-full bg-blue-100">
            <FaGithub />
            </p>



            </div>




            </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Register;