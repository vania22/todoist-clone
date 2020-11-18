import React from 'react';
import {Link, useLocation} from "react-router-dom";

import './styles.scss'


const ListItem = ({id, name, color}) => {
    const {pathname} = useLocation()

    const isClassActive = () => {
        if (pathname.includes(id) && id) {
            return true
        } else if (pathname === '/' && !id) {
            return true
        }
        return false
    }

    return (
        <Link to={`/${id}`}>
            <div className={!isClassActive() ? 'list-item-container' : 'list-item-container--active'}>
                <div className='list-item-color' style={{backgroundColor: color}}></div>
                <div className='list-item-name'>{name}</div>
            </div>
        </Link>
    )
}

export default ListItem;