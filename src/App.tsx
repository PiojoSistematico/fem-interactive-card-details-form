import React, { useState } from "react";
import completeIcon from "./assets/images/icon-complete.svg";
import cardLogo from "./assets/images/card-logo.svg";
import validateCreditCard from "./helpers/validateCreditCard";

const dummyCard = {
  cardName: "",
  cardNumber: "",
  cardExpirationMonth: "",
  cardExpirationYear: "",
  cardCVC: "",
};

/* const dummyCard = {
  cardName: "Jane Appleseed",
  cardNumber: "0000000000000000",
  cardExpirationMonth: "02",
  cardExpirationYear: "25",
  cardCVC: "123",
}; */

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [cardData, setCardData] = useState(dummyCard);

  // Add a state variable to track if any input field was touched
  const [isTouched, setIsTouched] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    // Mark the form as touched when any input is changed
    setIsTouched(true);

    setCardData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const allFieldsValid = Object.values(validateCreditCard(cardData)).every(
      (elem) => elem == true
    );
    if (allFieldsValid) setIsCompleted(true);
  }

  function handleContinue(): void {
    setIsCompleted(false);
    setCardData(dummyCard);
    // Reset the touched state when continuing
    setIsTouched(false);
  }

  const validation = validateCreditCard(cardData);

  return (
    <main>
      <section className="card card-section">
        <div className="card front-card">
          <img src={cardLogo} alt="" />
          <h1>{cardData.cardNumber}</h1>
          <div className="flex-between">
            <h2>{cardData.cardName}</h2>
            <span>
              {cardData.cardExpirationMonth}/{cardData.cardExpirationYear}
            </span>
          </div>
        </div>
        <div className="card back-card">{cardData.cardCVC}</div>
      </section>
      {isCompleted ? (
        <section className="complete-section">
          <img src={completeIcon} alt="" className="icon-complete" />
          <div className="thanks">
            <p className="thanks-title">Thank you!</p>
            <p className="thanks-paragraph">We've added your card details</p>
          </div>
          <button className="continue" onClick={handleContinue}>
            Continue
          </button>
        </section>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <div className="card-holder">
            <label htmlFor="">Cardholder Name</label>
            <input
              type="text"
              name="cardName"
              placeholder="e.g. Jane Appleseed"
              onChange={handleChange}
              className={isTouched && !validation.cardName ? "input-error" : ""}
            />
            {isTouched && cardData.cardName === "" ? (
              <span className="showError">Can not be blank</span>
            ) : (
              isTouched &&
              !validation.cardName && (
                <span className="showError">Please provide a valid name</span>
              )
            )}
          </div>
          <div className="card-number">
            <label htmlFor="">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={handleChange}
              className={
                isTouched && !validation.cardNumber ? "input-error" : ""
              }
            />
            {isTouched && cardData.cardNumber === "" ? (
              <span className="showError">Can not be blank</span>
            ) : (
              isTouched &&
              !validation.cardNumber && (
                <span className="showError">Wrong format</span>
              )
            )}
          </div>
          <div className="card-expiration">
            <label htmlFor="">Exp. Date (MM/YY)</label>
            <div className="card-date">
              <input
                type="text"
                name="cardExpirationMonth"
                placeholder="MM"
                onChange={handleChange}
                className={
                  isTouched && !validation.cardExpirationMonth
                    ? "input-error"
                    : ""
                }
              />
              <input
                type="text"
                name="cardExpirationYear"
                placeholder="YY"
                onChange={handleChange}
                className={
                  isTouched && !validation.cardExpirationYear
                    ? "input-error"
                    : ""
                }
              />
              {isTouched &&
              (cardData.cardExpirationMonth === "" ||
                cardData.cardExpirationYear === "") ? (
                <span className="showError">Can not be blank</span>
              ) : (
                isTouched &&
                (!validation.cardExpirationMonth ||
                  !validation.cardExpirationYear) && (
                  <span className="showError">Numbers only</span>
                )
              )}
            </div>
          </div>
          <div className="card-cvc">
            <label htmlFor="">CVC</label>
            <input
              type="text"
              name="cardCVC"
              placeholder="e.g. 123"
              onChange={handleChange}
              className={isTouched && !validation.cardCVC ? "input-error" : ""}
            />
            {isTouched && cardData.cardCVC === "" ? (
              <span className="showError">Can not be blank</span>
            ) : (
              isTouched &&
              !validation.cardCVC && (
                <span className="showError">Numbers only</span>
              )
            )}
          </div>

          <button className="confirm">Confirm</button>
        </form>
      )}
    </main>
  );
}

export default App;
