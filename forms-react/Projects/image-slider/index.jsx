import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './style.css'

const index = ({ url, limit = 5, page = 1 }) => {
    const [image, setImage] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const res = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://picsum.photos/v2/list?page=${page}&limit=${limit}`
            );

            setImage(res.data);
        }
        catch (err) {
            setErrorMsg(err.message);
            console.error(err.message);
        }
        finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        if (url !== "")
            fetchImages(url);
    }, [url]);

    if (loading)
        return <h2> Loading images ...</h2>
    if (errMsg)
        return <h2 style={{ color: 'red' }}> Error: {errMsg} </h2>
    if (!image.length)
        return <h2> No images found</h2>

    console.log(image);

    function handlePrev() {
        setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
    }
    function handleNext() {
        setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
    }

    return (
        <div className='container'>
            <BsArrowLeftCircleFill onClick={handlePrev} className='arrow arrow-left' />
            {
                image && image.length > 0 ? (
                    image.map((img) => (
                        <img
                            key={img.id}
                            alt={img.download_url}
                            src={img.download_url}
                            className={currentSlide === index
                                ? "current-image"
                                : "current-image hide-current-image"}
                        />
                    ))
                ) : (
                    null
                )
            }
            <span className='circle-indicators'>
                {image && image.length ?
                    image.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlide(index)} className={currentSlide === index ? "current-indicator"
                            : "current-indicator inactive-indicator"}> </button>
                    ))
                    :

                    null
                }
            </span>
            <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
        </div>
    )
}

export default index
