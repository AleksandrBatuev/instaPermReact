import React, {Fragment, useContext, useState} from 'react'
import { ListContext } from '../context/ListContext/listContext'
import { NumericInput } from '../components/NumericInput.js'

export const Operations = (item_list) => {
    const {refill, expense} = useContext(ListContext)
    const [sum, setSum] = useState(0)
    const [commit, setCommit] = useState('')
    const data_user = JSON.parse(item_list.location.item_list)

    function incFunc() {
        const data = {
            id: data_user.id,
            sum: sum,
            date: new Date(),
            commit: commit
        }
        refill(data)
    }

    function decFunc() {
        const data = {
            id: data_user.id,
            sum: sum,
            date: new Date(),
            commit: commit
        }
        expense(data)
    }

    return (
        <Fragment>
            <div className='input_trans_div'>
                <input 
                    placeholder='Введите сумму'
                    className='input_trans'
                    onChange={e => setSum(prevSum => prevSum = e.target.value)}
                />
                <input 
                    placeholder='Введите комментарий'
                    className='input_trans'
                    onChange={e => setCommit(prevCommit => prevCommit = e.target.value)}
                />
            </div>
            <NumericInput 
                min={0}
                max={100000000000}
                childInc={'Внести'}
                childDec={'Снять'}
                initialValue={data_user.balance}
                digits={'2'}
                step={sum}
                funcInc={incFunc}
                funcDec={decFunc}
            />
        </Fragment>
    )
}