import React from 'react';
import { FaRegPaperPlane, FaRegCompass, FaRegHeart, FaRegCircle } from 'react-icons/fa';
import { CgHome } from 'react-icons/cg';


const Navbar = () => {
    return (
        <nav>
            <div className="navInside">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/instaLogo.png`} alt='instagram logo' />
                </div>
                <div>
                    <input type="search" name="search" id="search" placeholder='&#8981;Search'/>
                </div>
                <div className='icons'>
                    <a href="#"><CgHome/></a>
                    <a href="#"><FaRegPaperPlane/></a>
                    <a href="#"><FaRegCompass/></a>
                    <a href="#"><FaRegHeart/></a>
                    <a href="#"><FaRegCircle/></a>
                </div>
            </div>
        </nav>
    )
}


export default Navbar