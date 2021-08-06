import React from 'react';
import { BsGearWide } from 'react-icons/bs';

const Header = () => {
    return (
        <header>
            <div className='leftHeader'>
                <div className='profPicContainer'>
                    <img src={`${process.env.PUBLIC_URL}/img/igProfPic.jpg`} alt="Profile picture" />
                </div>
            </div>
            <section>
                <div className='profInfoContainer'>
                    <h1>shineikins</h1>
                    <a href="#">Edit Profile</a>
                    <button>
                        <BsGearWide/>
                    </button>
                </div>
                <ul>
                    <li><span>15</span> posts</li>
                    <li><span>201</span> followers</li>
                    <li><span>554</span> following</li>
                </ul>
            </section>
        </header>
    )
}

export default Header
