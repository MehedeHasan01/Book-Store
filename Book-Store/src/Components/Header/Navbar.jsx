import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/image/Banner/Logo.jpg'
import UseAuth from "../../Utils/Hook/UseAuth";
const Navbar = () => {
    const {user, LogOut} = UseAuth()
    const navLink = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/bestSell'}>Best Sell</NavLink></li>
    <li><NavLink to={'/login'}>Login</NavLink></li>
    <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    return (
        <div className=" px-4 md:px-0 py-2 bg-[#F7F7F7]">
            <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className=" dropdown-content mt-3 z-[4] p-5 shadow rounded-box w-52 mx-auto bg-[#F7F7F7]  text-gray-800 font-bold text-xl">
                    {navLink}

                </ul>
                </div>

                <div>
                    <img src={Logo} alt="" className="rounded-full h-[6rem] w-[7rem] border " />
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex gap-6 text-gray-800 font-bold text-xl">
                {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                    <>
                    <div className="mr-2">
                        {
                            user?.photoURL ? <>
                            <img className=" w-[50%] rounded-full" src={user?.photoURL} alt="Not Found" />
                            <p className="text-gray-900 font-bold ">{user.displayName}</p>

                            </> :
                            <>
                            <p className="text-gray-900 font-bold ">{user.displayName}</p>
                            </>
                        }
                    </div>
                    <Link onClick={()=>LogOut()} className="btn  btn-secondary font-semibold text-lg">LogOut</Link>
                    </>
                    :

                    <Link to={'/login'} className="btn  btn-secondary font-semibold text-lg">Login</Link>
                }
            </div>
            </div>
        </div>
    );
};

export default Navbar;