import React, {useEffect, useState} from 'react';
import Clients from "./components/clients";
import {getClientsData, getFeatureData, getFooterData, getHeaderData, getHeroData} from "./butter-client";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";


const Homepage = () => {
    const [cmsData, setCmsData] = useState({
        headerData: [],
        heroData: [],
        clientData: [],
        featureData: [],
        footerData: []
    });

    useEffect(() => {
        getHeaderData(setCmsData, 'headerData');
        getHeroData(setCmsData, 'heroData');
        getClientsData(setCmsData, 'clientData');
        getFeatureData(setCmsData, 'featureData');
        getFooterData(setCmsData, 'footerData');
    }, []);

    return (
        <>
            {cmsData.headerData && <Header {...cmsData.headerData}/>}
            {cmsData.heroData && <Hero {...cmsData.heroData}/>}
            {cmsData.clientData &&
            <Clients headline={cmsData.clientData.headline} clients={cmsData.clientData.clients}/>}
            {cmsData.featureData && <Features feature={cmsData.featureData.features}/>}
            {cmsData.footerData && <Footer links={cmsData.footerData.footer}/>}
        </>
    );
};

export default Homepage;