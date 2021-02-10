import React, {Fragment, useContext, useEffect} from 'react'
import uuid from 'react-uuid'
import { ListContext } from '../context/ListContext/listContext'

export const Transactions = (id) => {
    const {trans, fetchTrans} = useContext(ListContext)

    useEffect(() => {
        fetchTrans(JSON.parse(id.location.id))
    }, [])

    if (trans.length == 0) {
        return (
            <h2>Транзакций нет</h2>
        )
    }
    
    return (
        <Fragment>
            <ul>
                {trans.map(e => {
                    if (e.mark === 1) {
                        return <li
                            className='account_item'
                            key = {uuid()}
                        >
                            <h2 className='account_item_name'>{e.commit}</h2>
                            <p className='account_item_balance refill'>{e.refill} RUB</p>
                            <small className='date_trans'>{e.date}</small>
                        </li>
                    } else {
                        return <li
                            className='account_item'
                            key = {uuid()}
                        >
                            <h2 className='account_item_name'>{e.commit}</h2>
                            <p className='account_item_balance expense'>{e.expense} RUB</p>
                            <small className='date_trans'>{e.date}</small>
                        </li>
                    }
                })}
            </ul>
        </Fragment>
    )
}