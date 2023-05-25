import React from 'react';
import Banner from './Banner';
import ShortInfo from './ShortInfo';
import RedLine from './RedLine';
import Appointment from '../Appointment/Appointment/Appointment';
// import Blog from '../Blog/Blog';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RedLine></RedLine>
            <ShortInfo></ShortInfo>
            <Appointment></Appointment>
            {/* <Blog></Blog> */}
            <About></About>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;