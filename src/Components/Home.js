import React from 'react';
import day from '../images/5day.png';
import current from '../images/currentweather.png';
import { Link } from '@reach/router';

const Home = () => {
    return (
        <div className="home">
            <Link to="/current"><img src={current} className="current" alt={'current weather screenshot'}></img></Link>
           <Link to="/forecast"><img src={day} className="day" alt={'5 day screenshot'}></img></Link>
        </div>
    );
};

export default Home;