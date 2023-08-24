import React from 'react';
import Services from '../Services/Services';
import Banner from '../Header/Banner';
import Blog from '../Blog/Blog';
import Gallery from '../Gallery/Gallery';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Explorer Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Blog></Blog>
            <Services></Services>
        </div>
    );
};

export default Home;