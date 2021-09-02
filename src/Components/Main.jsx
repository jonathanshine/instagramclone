import React from 'react';
import Gallery from './Gallery';
import Header from './Header';
import Tab from './Tab';

const Main = () => {
    return (
        <div className="mainContainer">
            <Header/>
            <Tab/>
            <Gallery/>
        </div>
    )
}

export default Main
