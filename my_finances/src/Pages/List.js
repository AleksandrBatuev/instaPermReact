import React, {Fragment, useContext, useEffect} from 'react'
import { ListOfAccount } from '../components/ListOfAccount'
import { ListContext } from '../context/ListContext/listContext'

export const List = () => {
    const {list, fetchAccount} = useContext(ListContext)
    
    useEffect(() => {
        fetchAccount()
    }, [])

    if (list.length == 0) {
        return (
            <h2>Счетов нет</h2>
        )
    }

    return (
        <Fragment>
            <ListOfAccount list={list}/>
        </Fragment>
    )
}