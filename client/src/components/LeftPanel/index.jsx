import React from 'react';

import ListItem from "../ListItem";

import './styles.scss'

const LeftPanel = () => {

    return (
        <aside className='home-left-panel'>
            <div className='lists-container'>
                <ListItem id='' color='pink' name='All Tasks'/>
                <ListItem id='1' color='crimson' name='Weekend'/>
            </div>
        </aside>
    )
}

export default LeftPanel;