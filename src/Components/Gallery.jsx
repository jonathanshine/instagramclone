import React, { useState } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';

const Gallery = ({ data }) => {
    const [rowOne, setRowOne] = useState("");
    const [rowTwo, setRowTwo] = useState("");
    const [rowThree, setRowThree] = useState("");
    const [rowFour, setRowFour] = useState("");
    const [rowFive, setRowFive] = useState("");

    const row1 = data.slice(0, 3).map((img, index) => {
        return <div onMouseEnter={ () =>setRowOne( index ) } onMouseLeave={ () =>setRowOne("") } className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
            <div className="imgInfo" style={index === rowOne ? {display: "flex"} : {display: "none"}}>
                <div>
                    <span>
                        <FaHeart/> {img.likes}
                    </span>
                    <span>
                        <FaComment/> {img.comments}
                    </span>
                </div>
            </div>
        </div>
    });

    const row2 = data.slice(3, 6).map((img, index) => {
        return <div onMouseEnter={ () => setRowTwo( index ) } onMouseLeave={ () => setRowTwo("") } className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
            <div className="imgInfo" style={index === rowTwo ? {display: "flex"} : {display: "none"}}>
                <div>
                    <span>
                        <FaHeart/> {img.likes}
                    </span>
                    <span>
                        <FaComment/> {img.comments}
                    </span>
                </div>
            </div>
        </div>
    });
    
    const row3 = data.slice(6, 9).map((img, index) => {
        return <div onMouseEnter={ () => setRowThree( index ) } onMouseLeave={ () => setRowThree("") } className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
            <div className="imgInfo" style={index === rowThree ? {display: "flex"} : {display: "none"}}>
                <div>
                    <span>
                        <FaHeart/> {img.likes}
                    </span>
                    <span>
                        <FaComment/> {img.comments}
                    </span>
                </div>
            </div>
        </div>
    });

    const row4 = data.slice(9, 12).map((img, index) => {
        return <div onMouseEnter={ () => setRowFour( index ) } onMouseLeave={ () => setRowFour("") } className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
            <div className="imgInfo" style={index === rowFour ? {display: "flex"} : {display: "none"}}>
                <div>
                    <span>
                        <FaHeart/> {img.likes}
                    </span>
                    <span>
                        <FaComment/> {img.comments}
                    </span>
                </div>
            </div>
        </div>
    });

    const row5 = data.slice(12, 15).map((img, index) => {
        return <div onMouseEnter={ () => setRowFive( index ) } onMouseLeave={ () => setRowFive("") } className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
            <div className="imgInfo" style={index === rowFive ? {display: "flex"} : {display: "none"}}>
                <div>
                    <span>
                        <FaHeart/> {img.likes}
                    </span>
                    <span>
                        <FaComment/> {img.comments}
                    </span>
                </div>
            </div>
        </div>
    });

    return (
        <div className="galleryContainer">
            <div className="galleryRow">
               {row1}
            </div>
            <div className="galleryRow">
               {row2}
            </div>
            <div className="galleryRow">
               {row3}
            </div>
            <div className="galleryRow">
               {row4}
            </div>
            <div className="galleryRow">
               {row5}
            </div>
        </div>
    )
}

export default Gallery
