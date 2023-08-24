import React from 'react';
import Services from '../Services/Services';
import Banner from '../Header/Banner';
import Blog from '../Blog/Blog';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Blog></Blog>
            <Services></Services>
        </div>
    );
};

export default Home;