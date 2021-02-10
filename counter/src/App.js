import React, { useState } from 'react'
import { NumericInput } from './components/NumericInput';

function App() {
  const [initialValue, setInitialValue] = useState(0);
  const [step, setStep] = useState(1);
  const [digits, setDigits] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  return (
    <div className="root">
      <div className="div_input">
        <input
          className="input"
          onChange={e => setMin(e.target.value)}
          placeholder="Введите минимальное значение"
        />
        <input
          className="input"
          onChange={e => setMax(e.target.value)}
          placeholder="Введите максимальное значение"
        />
        <input
          className="input"
          onChange={e => setDigits(e.target.value)}
          placeholder="Введите количество знаков после запятой"
        />
        <input
          className="input"
          onChange={e => setStep(parseFloat(e.target.value))}
          placeholder="Введите шаг"
        />
        <input
          className="input"
          placeholder="Введите начальное значение"
          onChange={e => setInitialValue(parseFloat(e.target.value))}
        />
      </div>
      <hr></hr>
      <div className='center'>
      <NumericInput 
        min={min}
        max={max}
        digits={digits}
        step={step}
        initialValue={initialValue}
      />
      </div>
      
    </div>
  );
}

export default App;
