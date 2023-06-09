import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/babypop.png";
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
    const nav =
        <div className='flex text-pink-500 font-medium italic'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/alltoys'>ALL Toys</Link></li>
            {
                user &&
                <li><Link to='/mytoys'>My Toys</Link></li>
            }
            {
                user && <li><Link to='/addatoy'>Add a Toy</Link></li>
            }
            <li><Link to='/blog'>Blog</Link></li>
        </div>
    return (
        <div className='w-9/12 mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}

                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                        <img className='h-10 w-10' src={logo} alt="" />
                        <h2 className="text-xl ml-2 text-pink-500">BaBy pUPuS</h2>

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Link to='/login'><button onClick={handleLogOut} className="btn bg-red-400" >LogOut</button></Link> :
                            <Link to='/login'><button className="btn bg-red-400">LogIn</button></Link>
                    }
                    {user &&
                        <div className="tooltip tooltip-bottom ml-2" data-tip={user.displayName}>
                            <img className='w-10 h-10 rounded-2xl' src={user.photoURL} alt="" />
                        </div>
                    }


                </div>
            </div>
        </div>

    );
};

export default Header;