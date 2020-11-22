import React, {useState, useContext, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

import {TodoContext} from "../../contexts/TodoContexProvider";

import {TiPencil} from 'react-icons/ti'
import {RiDeleteBin2Line} from 'react-icons/ri';
import './styles.scss';

const TaskItem = ({task: {_id, name, completed, listId}, showList}) => {
    const {state, dispatch} = useContext(TodoContext);
    const [list, setList] = useState('');
    const [taskName, setTaskName] = useState(name)
    const [isCompleted, setIsCompleted] = useState(completed)
    const textAreaRef = useRef();

    useEffect(() => {
        if (showList) {
            const list = state.find(list => list._id === listId);
            setList(list)
        }
    }, [listId, showList, state])

    // For textArea height
    useEffect(() => {
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }, [taskName])


    const toggleCompleted = () => {
        setIsCompleted(prevIsCompleted => !prevIsCompleted)
    }

    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    }

    return (
        <div className='task-container'>
            <div
                className={`task-checkbox ${isCompleted ? 'task-checkbox--completed' : ''}`}
                onClick={toggleCompleted}
            />
            <textarea
                className='task-text'
                ref={textAreaRef}
                value={taskName}
                onChange={handleTaskName}
                readOnly={true}
            />
            <div className='task-right-side-container'>
                {showList ?
                    <div className='task-list'>
                        <Link className='task-list-name' to={listId}>{list.name}</Link>
                        <div className='task-list-color' style={{backgroundColor: list.color}}/>
                    </div>
                    :
                    <div className='task-buttons-container'>
                        <TiPencil className='task-button task-button-edit'/>
                        <RiDeleteBin2Line className='task-button ask-button-remove'/>
                    </div>
                }
            </div>

        </div>
    )
}

export default TaskItem;