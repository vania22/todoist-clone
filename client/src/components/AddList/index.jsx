import React, {useState, useEffect, useRef, useContext} from 'react'
import {SliderPicker} from 'react-color'

import {TodoContext} from "../../contexts/TodoContexProvider";
import {createList as createListAction} from '../../contexts/TodoContexProvider/actions';
import {createList} from "../../api/lists";


import './styles.scss';


const defaultColors = [
    '#E8C547', '#5C80BC', '#B4DC7F',
    '#DAB6C4', '#A4031F', '#A42CD6'
]

const AddList = () => {
    const {dispatch} = useContext(TodoContext);
    const [name, setName] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [activeColor, setActiveColor] = useState('#E8C547')
    const [showColorPicker, setShowColorPicker] = useState(false)
    const dropdownRef = useRef();

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('mousedown', onDocumentClick)
        } else {
            document.removeEventListener('mousedown', onDocumentClick)
        }

        return () => document.removeEventListener('mousedown', onDocumentClick)
    }, [isDropdownOpen])

    const onDocumentClick = e => {
        const withinDropdown = e.path.find(el => el === dropdownRef.current)
        if (!withinDropdown) {
            setIsDropdownOpen(false)
        }
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(isDropdownOpen => !isDropdownOpen)
    }

    const toggleColorPicker = () => {
        setShowColorPicker(showColorPicker => !showColorPicker)
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onSubmit = () => {
        if (name.trim().length > 0) {
            createList({name, color: activeColor})
                .then(data => dispatch(createListAction(data)))
                .catch(error => console.log(error))
        }
    }

    return (
        <div className='add-list-container'>
            <button className='add-list-button' onClick={toggleDropdown}>
                <span>+</span>
                <div>Add List</div>
            </button>
            <div
                className={
                    isDropdownOpen
                        ? 'add-list-dropdown add-list-dropdown--active'
                        : 'add-list-dropdown'
                }
                ref={dropdownRef}
            >
                <div className='close-dropdown-button' onClick={toggleDropdown}>x</div>
                <input
                    type='text'
                    placeholder='List name'
                    className='dropdown-input'
                    value={name}
                    onChange={onNameChange}
                />
                <div className='dropdown-colors-container'>
                    {defaultColors.map(color => (
                        <div
                            key={color}
                            onClick={() => setActiveColor(color)}
                            className={
                                activeColor === color
                                    ? 'list-item-color dropdown-color active-color'
                                    : 'list-item-color dropdown-color'
                            }
                            style={{backgroundColor: color}}
                        />
                    ))}
                    <div className='custom-color-button' onClick={toggleColorPicker}>custom</div>
                </div>
                {showColorPicker &&
                <SliderPicker
                    className='color-picker'
                    color={activeColor}
                    onChange={(color) => setActiveColor(color.hex)}
                />}
                <button className='create-list-button' onClick={onSubmit}>Create</button>
            </div>
        </div>

    )
}

export default AddList;