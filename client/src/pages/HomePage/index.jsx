import React, {useContext, useEffect} from 'react';

import {TodoContext} from "../../contexts/TodoContextProvider";

import Header from "../../components/Header";
import LeftPanel from "../../components/LeftPanel";
import RightPanel from "../../components/RightPanel";

import './styles.scss'
import {getAllLists} from "../../api/lists";

const HomePage = () => {
    const {dispatch} = useContext(TodoContext);

    useEffect(() => {
        getAllLists().then(data => {
            console.log(data)
        })
    }, [])

    return <div className='home-background'>
        <div className='home-wrapper'>
            <Header/>
            <div className='home-container'>
                <LeftPanel/>
                <RightPanel/>
            </div>
        </div>
    </div>
}

export default HomePage;