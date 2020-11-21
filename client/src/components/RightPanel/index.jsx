import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import {TodoContext} from "../../contexts/TodoContexProvider";

import './styles.scss'
import {HiDotsHorizontal} from 'react-icons/hi';
import TaskItem from "../TaskItem";


const RightPanel = () => {
    const {state} = useContext(TodoContext)
    const {listId} = useParams();
    const [list, setList] = useState({})

    useEffect(() => {
        if (listId !== 'all') {
            const list = state.find(list => list._id === listId)
            setList(list)
        } else {
            const allTasks = state.reduce((acc, curr) => {
                acc = [...acc, ...curr.tasks]
                return acc
            }, [])
            setList({name: 'All Tasks', tasks: allTasks})
        }

    }, [listId, state])

    return (
        <div className='home-right-panel'>
            <div className='right-panel-header'>
                <h1 className='right-panel-list-title'>{list.name}</h1>
                <HiDotsHorizontal className='right-panel-more-button'/>
            </div>
            <div className='tasks-container'>
                {list.tasks && list.tasks.map(task => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        showList={listId === 'all'}
                    />))}
            </div>
        </div>
    )
}

export default RightPanel;