import React from 'react';

const Client = ({name, image}) => {
    return (
        <div>
            <img alt={name} src={image} style={{
                height: '40%',
                width: '5rem'
            }}/>
        </div>
    );
};

export default Client;