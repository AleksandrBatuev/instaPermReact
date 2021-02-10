import React, {useReducer} from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { FETCH_ACCOUNT, FETCH_TRANS } from '../types'
import { ListContext } from './listContext'
import { listReducer } from './listReducer'
import uuid from 'react-uuid'

const url = process.env.REACT_APP_URL

export const ListState = ({children}) => {
    const initialState = {
        list: [],
        trans: []
    }
    const [state, dispatch] = useReducer(listReducer, initialState)

    const fetchAccount = async () => {
        const res = await fetch(`${url}/all_account`)
        let data = await res.json()
        const payload = Object.keys(data).map(key => {
            return {
                ...data[key]
            }
        })
        dispatch({type:FETCH_ACCOUNT, payload})
    }

    const fetchTrans = async id => {
        const req = {
            id: id   
        }
        const res = await fetch(`${url}/all_trans`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(req)
        })
        let data = await res.json()
        const payload = Object.keys(data).map(key => {
            return {
                ...data[key],
                id: key
            }
        })
        dispatch({type:FETCH_TRANS, payload})
    }

    const addAccount = async name => {
        const req = {
            id: uuid(),
            name: name,
            balance: 0    
        }
        const res = await fetch(`${url}/new_account`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(req)
        })
    }

    const refill = async data => {
        const req = {
            id: data.id,
            date: data.date,
            refill: data.sum,
            commit: data.commit
        }
        const res = await fetch(`${url}/refill`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(req)
        })
    }

    const expense = async data => {
        const req = {
            id: data.id,
            date: data.date,
            expense: data.sum,
            commit: data.commit
        }
        const res = await fetch(`${url}/expense`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(req)
        })
    }

    return (
        <ListContext.Provider value ={{
            fetchAccount, addAccount, fetchTrans, refill, expense,
            list: state.list,
            trans: state.trans
        }}>
            {children}
        </ListContext.Provider>
    )
}