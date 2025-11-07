import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css'

const index = ({ noOfStars = 10 }) => {
    const [rating, setRating] = useState(0); // actual
    const [hover, setHover] = useState(0); // current

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }
    function handleMouseLeave(getCurrentIndex) {
        setRating(rating);
    }
    // index += 1 to make 0 index to 1 like 0 1 2 3 4
    // make it                              1 2 3 4 5 
    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1
                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating) ? 'active' : 'notActive'}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            size={40} />
                    );
                })
            }
        </div>
    )
}

export default index
