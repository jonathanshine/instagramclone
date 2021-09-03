import React from 'react';

const Gallery = ({ data }) => {
    const row1 = data.slice(0, 3).map(img => {
        return <div className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
        </div>
    });

    const row2 = data.slice(3, 6).map(img => {
        return <div className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
        </div>
    });
    
    const row3 = data.slice(6, 9).map(img => {
        return <div className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
        </div>
    });

    const row4 = data.slice(9, 12).map(img => {
        return <div className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
        </div>
    });

    const row5 = data.slice(12, 15).map(img => {
        return <div className="galleryIMG" key={ img.id }>
            <img src={`${process.env.PUBLIC_URL}/img/gallery/${img.url}`} alt={`${ img.name }`} />
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
