import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => (
    <div className="header_root">
        <ul className="header">
            <li>
                <NavLink
                    to="/"
                    className="header_item"
                    exact
                >
                    Список счетов
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/create"
                    className="header_item"
                >
                    Создать счет
                </NavLink>
            </li>
        </ul>
    </div>
)