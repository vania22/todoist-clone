import React, {useContext, useEffect} from 'react';

import {TodoContext} from "../../contexts/TodoContexProvider";

import Header from "../../components/Header";
import LeftPanel from "../../components/LeftPanel";
import RightPanel from "../../components/RightPanel";

import {getAllLists} from "../../api/lists";

import './styles.scss'
import {setLists} from "../../contexts/TodoContexProvider/actions";


const HomePage = () => {
    const {dispatch} = useContext(TodoContext);

    useEffect(() => {
        getAllLists()
            .then(data => {
            dispatch(setLists(data))
            })
            .catch(error => console.log(error));
    }, [])

    return <div className='home-background'>
        <div className='home-wrapper'>
            <div className='home-helper'>
                <Header/>
                <div className='home-container'>
                    <LeftPanel/>
                    <RightPanel/>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage;