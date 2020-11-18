import React from 'react';

import Header from "../../components/Header";
import LeftPanel from "../../components/LeftPanel";
import RightPanel from "../../components/RightPanel";

import './styles.scss'

const HomePage = () => {

    return <div className='home-background'>
        <div className='home-wrapper'>
            <Header />
            <div className='home-container'>
                <LeftPanel/>
                <RightPanel/>
            </div>
        </div>
    </div>
}

export default HomePage;