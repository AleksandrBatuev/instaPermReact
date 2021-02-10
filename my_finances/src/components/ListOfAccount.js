import React from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'react-uuid'

export const ListOfAccount = ({list}) => {
    return (
        <ul>
            {list.map(item_list => (
                <li
                    className='account_item'
                    key = {uuid()}
                >
                    <h2 className='account_item_name'>{item_list.name}</h2>
                    <p className='account_item_balance'>{item_list.balance} RUB</p>
                    <div className='btn_block'>
                        <NavLink 
                            className='account_item_detalis'
                            to={{
                                pathname: 'transact',
                                id: JSON.stringify(item_list.id)
                            }}
                        >
                            Детали счета
                        </NavLink>
                        <NavLink
                            className='account_item_opertions'
                            to={{
                                pathname: 'opertions',
                                item_list: JSON.stringify(item_list)
                            }}
                        >
                            Совершение транзакций
                        </NavLink>
                    </div>
                </li>
            ))}
        </ul>
    )
}