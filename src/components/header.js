import React from 'react';

const Header = ({name, image, links, options, language, navlink, button_text}) => {
    return (
        <section className={'header'}>
            <div className={'header__field__links'}>
                <img alt={name} src={image} style={{
                    height: '40%',
                    width: '5rem',
                    cursor: 'pointer'
                }}/>
                <ul>
                    {links && links.map((el, index) => <li key={index} className={'links__el'}>
                        {el.text}
                    </li>)}
                </ul>
                {options && options.map((el, index) => <select key={index} value={el.option} className={'links__el'}>
                    <option value={el.option}>{el.option}</option>
                </select>)}
            </div>
            <div className={'header__field__nav'}>
                <select value={language} className={'links__el'}>
                    <option value={language}>{language}</option>
                </select>
                <p className={'links__el'}>{navlink}</p>
                <button className={'header__button links__el'}>{button_text}</button>
            </div>
        </section>
    );
};

export default Header;