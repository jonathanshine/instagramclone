import React from 'react';


const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={`${process.env.PUBLIC_URL}/img/instaLogo.png`} alt='instagram logo' />
            </div>
            <div>
                <input type="search" name="search" id="search" placeholder='Search'/>
            </div>
            <div>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="home" /></a>
                <a href="#">Message</a>
                <a href="#">Explore</a>
                <a href="#">Activity</a>
                <a href="#">Profile</a>
            </div>
        </nav>
    )
}


export default Navbar