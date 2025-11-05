import React, { useState, useEffect } from 'react'

const index = () => {
    const [color, setColor] = useState("#ffff");
    const [typeOfColor, setTypeOfColor] = useState('hex');

    useEffect(() => {
        if (typeOfColor === 'hex') handleChangeHexColor();
        else handleChangeRgbColor();
    }, [typeOfColor]);

    function handleChangeRgbColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        const randomColor = `rgb(${r}, ${g}, ${b})`;
        setColor(randomColor);
    }
    function handleChangeHexColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    }


    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            background: color,
            transition: 'background 0.5s ease'
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Change Hex Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Change RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleChangeHexColor
                : handleChangeRgbColor}>Generate Random Color</button>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                border: '5px solid white',
                marginTop: '50px',
                fontSize: '60px'
            }}>
                <h3 style={{
                    marginBottom: '20px'
                }}>{typeOfColor === 'hex' ? 'HEX Color-' : 'RGB Color-'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default index
