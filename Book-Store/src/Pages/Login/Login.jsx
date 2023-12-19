import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Utils/Hook/UseAuth";
import swal from "sweetalert";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const {Login} = UseAuth()
    const location = useLocation()
    const Navigate = useNavigate()
    const handleLoginForm = e=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        Login(email, password)
        .then((res)=>{
            console.log(res.user);
            swal("Good job!", "Login successfully", "success");
            location?.state ? Navigate(location.state) : Navigate('/');
            e.target.reset()
        })
        .catch(error => {
            toast.error(`${error.message}`)
        })
    }
    return (
        <div>
        <div className=" py-6  px-16 md:px-0 md:w-[50%] mx-auto   h-[80vh]">
        <div className="bg-white p-10 rounded-md">
            <h1 className="text-center font-bold text-gray-700 text-2xl pb-3">Login</h1>
        <form className="space-y-2" onSubmit={handleLoginForm}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
        </form>
        <p className="pt-5 text-lg font-semibold text-gray-600">Create New Accoute visite Now? Please <span><Link to={'/register'} className="link text-secondary">Register</Link></span>. </p>

        </div>
        </div>
        <Toaster/>
    </div>
    );
};

export default Login;