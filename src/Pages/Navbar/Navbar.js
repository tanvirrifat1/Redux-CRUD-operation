import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <Link className=' text-xl hover:text-white duration-500 p-3 hover:text-2xl rounded-lg font-semibold ml-2' to='/add_book'>AddBook</Link>
        <Link className=' text-xl hover:text-white duration-500 p-3 hover:text-2xl rounded-lg font-semibold ml-2' to='/show_books'>ShowBook</Link>
    </>

    return (
        <div
            style={{
                backgroundColor: '#16a085',
            }}

        >
            <div className="navbar flex justify-around text-white p-8 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content bg-black mt-3 p-2 shadow  rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="  hover:text-white duration-500 p-3 hover:text-2xl rounded-lg  normal-case text-xl font-bold ">Home</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;


