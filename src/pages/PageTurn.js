import React, { useEffect, useState } from 'react';
import '../styles/PageTurn.css'; // Ensure you have this CSS file
import page01 from '../images/page01.jpg'; // Replace with your image paths
import page02 from '../images/page02.jpg';
import page03 from '../images/page03.jpg'; // Replace with your image paths

const PageTurn = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const images = [page01, page02, page03]; // Array of images

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % images.length); // Cycle through pages
        }, 3000); // Change page every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div id="all">
            <div id="page-flip">
                {images.map((image, index) => (
                    <div key={index} className={`page ${currentPage === index ? 'active' : ''} ${currentPage === (index + 1) % images.length ? 'next' : ''}`}>
                        <img src={image} alt={`Page ${index + 1}`} className="page-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageTurn;
