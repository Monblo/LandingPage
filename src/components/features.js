import React from 'react';
import Feature from "./feature";

const Features = ({feature}) => {
    return (
        <section className={'feature'}>
            <div className={'container'}>
                <ul className={'feature__list'}>
                    {feature && feature.map((el, index) => {
                        return (
                            <li key={index}>
                                <Feature headline={el.headline} subheadline={el.subheadline}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Features;