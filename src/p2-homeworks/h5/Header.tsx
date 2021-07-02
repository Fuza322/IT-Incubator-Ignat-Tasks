import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import {PATH} from './Routes'
import style from "./hw5.module.css"

export function Header() {

    const [activeMenu, setActiveMenu] = useState<boolean>(false)
    const toggle = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div className={style.menuWrapper}>
            <div className={style.burgerMenu} onClick={toggle}>&#9776;</div>
            <div className={`${style.containerMenuLinks} ${activeMenu && style.activeMenu}`}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={style.active} className={style.menuLinks}>PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={style.active} className={style.menuLinks}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={style.active} className={style.menuLinks}>Junior+</NavLink>
            </div>
        </div>
    )
}