import React from 'react';
import Client from "./client";

const Clients = ({headline, clients}) => {

    return (
        <section className={'clients'}>
            <div className={'container'}>
                <h4 className={'clients__title'}>{headline}</h4>
                <ul className={'clients__list'}>
                    {clients && clients.map((el, index) => {
                        return (
                            <li key={index}>
                                <Client name={el.name} image={el.image}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Clients;