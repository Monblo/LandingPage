import React from 'react';

const Footer = ({links}) => {
    return (
        <section className={'footer'}>
            <div className={'container'}>
                <ul className={'footer__list'}>
                    {links && links.map((el, index) => <li key={index}>{el.text}</li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Footer;