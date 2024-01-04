import { useState, ChangeEvent, useEffect } from 'react';
import './App.css';

function App(): JSX.Element {
  const [usdAmount, setUsdAmount] = useState<number>(0);
  const [cedisAmount, setCedisAmount] = useState<number>(0);

  function calcAmount(): void {
    // Assuming the exchange rate is 12.01
    const convertedAmount: number = usdAmount * 12.01;
    setCedisAmount(convertedAmount);
  }

  const handleUsdChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsdAmount(Number(e.target.value));
  };

  const handleCedisChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCedisAmount(Number(e.target.value));
  };


  useEffect(() => {
calcAmount()
  },[usdAmount,cedisAmount])

  return (
    <>
      <h1>Currency Converter</h1>
      <h2>{cedisAmount}</h2>
      <p>
        <label htmlFor='usdInput'>USD</label>
        <input
          type="number"
          id="usdInput"
          onChange={handleUsdChange}
        />
      </p>

      <p>
        <label htmlFor='cedisInput'>Cedis</label>
        <input
          type='number'
          id='cedisInput'
          onChange={handleCedisChange}
        />
      </p>
    </>
  );
}

export default App;
