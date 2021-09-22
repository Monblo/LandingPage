import React from 'react';

const Feature = ({headline, subheadline}) => {
    return (
        <div>
            <h2 className={'feature__headline'}>{headline}</h2>
            <p className={'feature__subHeadline'}>{subheadline}</p>
        </div>
    );
};

export default Feature;