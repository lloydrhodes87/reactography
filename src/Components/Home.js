import React from 'react';
import day from '../images/5day.png';
import current from '../images/currentweather.png'

const Home = () => {
    return (
        <div className="home">
            <img src={current} className="current" alt={'current weather screenshot'}></img>
           <img src={day} className="day" alt={'5 day screenshot'}></img>
            

        </div>
    );
};

export default Home;