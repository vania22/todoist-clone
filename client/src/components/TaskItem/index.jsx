import React, {useState, useContext, useEffect} from 'react';

import './styles.scss';
import {TodoContext} from "../../contexts/TodoContexProvider";

const TaskItem = ({task: {_id, name, completed, listId}, showList}) => {
    const {state, dispatch} = useContext(TodoContext);
    const [isCompleted, setIsCompleted] = useState(completed)
    const [list, setList] = useState('');

    useEffect(() => {
        if (showList) {
            const list = state.find(list => list._id === listId);
            setList(list)
        }
    }, [listId, showList, state])


    const toggleCompleted = () => {
        setIsCompleted(prevIsCompleted => !prevIsCompleted)
    }

    return (
        <div className='task-container'>
            <div
                className={`task-checkbox ${isCompleted ? 'task-checkbox--completed' : null}`}
                onClick={toggleCompleted}
            />
            <p className='task-text'>{name}</p>
            {showList &&
                <div className='task-list'>
                    <p className='task-list-name'>{list.name}</p>
                    <div className='task-list-color' style={{backgroundColor: list.color}}/>
                </div>
            }

        </div>
    )
}

export default TaskItem;