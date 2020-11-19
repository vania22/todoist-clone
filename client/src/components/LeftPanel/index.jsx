import React, {useContext} from 'react';

import ListItem from "../ListItem";

import './styles.scss'
import {TodoContext} from "../../contexts/TodoContexProvider";
import AddList from "../AddList";

const LeftPanel = () => {
    const {state} = useContext(TodoContext)
    return (
        <aside className='home-left-panel'>
            <div className='lists-container'>
                <ListItem id='all' color='pink' name='All Tasks'/>
                {state.map(list => (
                    <ListItem id={list._id} color={list.color} name={list.name} key={list._id}/>
                ))}
            </div>
            <AddList/>
        </aside>
    )
}

export default LeftPanel;