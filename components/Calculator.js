import React, { useEffect, useState } from 'react';

const Calculator = () => {
    // TODO: start coding here!
    const [totalBill, setTotalBill] = useState(0);
    const [totalTipPercentage, setTotalTipPercentage] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case 'totalBill':
                setTotalBill(value);
                console.log(value);
                break;
            case 'totalTipPercentage': {
                setTotalTipPercentage(parseFloat(value));
                break;
            }
            case 'numberOfPeople':
                setNumberOfPeople(parseFloat(value));
                break;
            default:
                break;
        }
    }

    const handleCalculate = () => {
        const tipAmountPerPerson = (totalBill * (totalTipPercentage / 100)) / numberOfPeople;
        const initialPricePerPerson = totalBill / numberOfPeople;
        const totalPricePerPerson = initialPricePerPerson + tipAmountPerPerson;

        setTipAmount(tipAmountPerPerson);
        setTotalPrice(totalPricePerPerson);

        console.log(totalBill);
    }

    useEffect(() => {
        handleCalculate();
    }, [totalBill, totalTipPercentage, numberOfPeople])

    const handleReset = () => {
        setTotalBill(0);
        setTotalTipPercentage(0);
        setNumberOfPeople(0);
        setTipAmount(0);
        setTotalPrice(0);
    }
    return (
        <main>
            <img
                src="./icons/logo.svg"
                className="logo"
                alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
            />
            <section className="card">
                <div className="card-left">
                    <div className="input-group" id="totalBillGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="totalBill">Bill</label>
                            <small className="body-text input-error" id="totalBillError">Input field is valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="totalBill"
                            id="totalBill"
                            value={totalBill}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="input-group" id="totalTipPercentageGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label">Select Tip %</label>
                            <small className="body-text input-error" id="totalTipPercentageError">Input field is
                                valid</small>
                        </div>
                        <div className="input-tips-container">
                            <button className="body-l-text input-tip" id="tip5" name='totalTipPercentage' value={5} onClick={handleInputChange}>5% 
                            </button>
                            <button className="body-l-text input-tip" id="tip10" name='totalTipPercentage' value={10} onClick={handleInputChange}>10%
                            </button>
                            <button className="body-l-text input-tip" id="tip15" name='totalTipPercentage' value={15} onClick={handleInputChange}>15%
                            </button>
                            <button className="body-l-text input-tip" id="tip25" name='totalTipPercentage' value={25} onClick={handleInputChange}>25%
                            </button>
                            <button className="body-l-text input-tip" id="tip50" name='totalTipPercentage' value={50} onClick={handleInputChange}>50%
                            </button>
                            <input type="number" className="body-l-text input-field" placeholder="Custom"
                                   id="totalTipPercentage" name='totalTipPercentage' value={totalTipPercentage} onChange={handleInputChange}></input>
                        </div>
                    </div>

                    <div className="input-group" id="numberOfPeopleGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="numberOfPeople">Number of People</label>
                            <small className="body-text input-error" id="numberOfPeopleError">Input field is
                                valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="numberOfPeople"
                            value={numberOfPeople}
                            onChange={handleInputChange}
                            id="numberOfPeople"
                            

                        />
                    </div>
                </div>
                <div className="card-right">
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Tip Amount</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="tipAmount">${tipAmount.toFixed(2)}</strong>
                    </section>
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Total</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="totalPrice">${totalPrice.toFixed(2)}</strong>
                    </section>
                    <button className="btn btn-primary btn-reset" onClick={handleReset}>Reset</button>
                </div>
            </section>
        </main>
    );
};

export default Calculator;