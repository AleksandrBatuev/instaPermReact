import React, { useState, useEffect } from 'react'

export const root_counter = {
    display: "flex",
    paddingTop: "10px"
}

export const btn_counter = {
    width: '80px',
    height: '60px',
    fontSize: '120%',
    color: 'white',
    backgroundColor: 'rgba(135,152,167,.8)',
    border: '1px solid rgba(135,152,167,.8)',
    borderRadius: '5%'
}

export const input_counter = {
    width: '120px',
    height: 'auto',
    backgroundColor: 'white',
    fontSize: '22px',
    textAlign: 'center',
    color:  'rgb(135,152,167)',
    border: '1px solid rgb(135,152,167)',
    margin: '0px -2px 0px',
    padding:'13px 0px 0px',
    zIndex: '1'
}

export const NumericInput = ({ step, digits, min, max, initialValue, childInc, childDec, funcInc, funcDec }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (!initialValue) {
            setCounter(prevCounter => prevCounter = 0)
        } else {
            setCounter(prevCounter => prevCounter = initialValue)
        }
    }, [initialValue])

    function increment() {
        setCounter(prevCounter => prevCounter + step)
        if (funcInc) {
            funcInc()
        }
    }

    function decrement() {
        setCounter(prevCounter => prevCounter - step)
        if (funcDec) {
            funcDec()
        }
    }

    if (max < min) {
        return <h1>Минимальное значение не можеть быть больше максимального</h1>
    }

    return (
        <div style={root_counter}>
            <button
                onClick={decrement}
                disabled={counter - step < min}
                style={btn_counter}
            >{childDec || '-'}</button>
            <p
                style={input_counter}
            >{counter.toFixed(digits)}</p>
            <button
                onClick={increment}
                disabled={counter + step > max}
                style={btn_counter}
            >{childInc || '+'}</button>
        </div>
    )
}