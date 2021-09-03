import React from 'react';
import Gallery from './Gallery';
import Header from './Header';
import Tab from './Tab';

const Main = ({ data }) => {
    return (
        <div className="mainContainer">
            <Header/>
            <Tab/>
            <Gallery data={ data }/>
        </div>
    )
}

export default Main
