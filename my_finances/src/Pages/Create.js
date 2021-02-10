import React, {Fragment, useContext, useState} from 'react'
import { ListContext } from '../context/ListContext/listContext'

const url = process.env.REACT_APP_URL

export const Create = () => {
    const [name, setName] = useState('')
    const {addAccount} = useContext(ListContext)

    function addAccountClick() {
        addAccount(name)
        window.location.assign('http://localhost:3000/')
    }

    return (
        <Fragment>
            <input
                className ='input_acc_create'
                placeholder='Введите название счета'
                onChange={e => setName(e.target.value)}
            />
            <button 
                className='btn_acc_create'
                onClick={addAccountClick}
            >Созать</button>
        </Fragment>
    )
}