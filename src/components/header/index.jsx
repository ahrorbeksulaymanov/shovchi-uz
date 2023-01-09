import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <header className="py-5 shadow-sm fixed top-0 left-0 right-0 bg-white z-10">
            <div className="container mx-auto">
                <div className="flex justify-between" style={{alignItems:"center"}}>
                    <Link to='/'><h1 className="mb-0 text-black">Logo</h1></Link>
                    <div className="sm:flex justify-end hidden">
                        <Link to='/' className="mb-0 mr-10 text-black">Asosiy sahifa</Link>
                        <Link to={'/chat'} className="mb-0 mr-10 text-black">Xabarlar</Link>
                        <p className="mb-0 mr-10">Profile</p>
                        <p className="mb-0">Yordam</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export  default Header;