import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return <header className = {s.header}>
         <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/630px-Logo_NIKE.svg.png"></img>
            <div className={s.item} > 
                <NavLink to="/Review" activeClassName={s.active} className={s.a}> Review </NavLink>
                <NavLink to="/Users" activeClassName={s.active} className={s.a}>Users</NavLink>
                <NavLink to="/Messenger" activeClassName={s.active} className={s.a}> Messenger</NavLink>
            </div>
           </header>

}

export default Header;