import React, {useState} from 'react';

const Hero = ({headline, button_1, button_2, image, hover}) => {
    const [current, setCurrent] = useState(0);

    const images=[image, hover];

    const handleIsOn = () => {
        setCurrent(1);
    };

    const handleIsOut = () => {
        setCurrent(0)
    }

    const heroStyle = {
        backgroundImage: `url(${images[current]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: '.5s ease-in-out',
        height: '100%'
    }

    return (
        <div className={'hero'} onMouseEnter={handleIsOn} onMouseLeave={handleIsOut}>
            <div style={heroStyle} >
                <h1 className={'hero__headline'}>{headline}</h1>
                <div className={'btn__field'}>
                    <button className={'btn button_1'}>{button_1}</button>
                    <button className={'btn button_2'}>{button_2}</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;