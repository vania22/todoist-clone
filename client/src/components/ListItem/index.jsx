import React from 'react';
import {Link, useLocation} from "react-router-dom";

import './styles.scss'


const ListItem = ({id, name, color}) => {
    const {pathname} = useLocation()
    const isActive = pathname.includes(id)

    return (
        <Link to={`/${id}`}>
            <div className={!isActive ? 'list-item-container' : 'list-item-container--active'}>
                <div className='list-item-color' style={{backgroundColor: color}}/>
                <div className='list-item-name'>{name}</div>
            </div>
        </Link>
    )
}

export default ListItem;