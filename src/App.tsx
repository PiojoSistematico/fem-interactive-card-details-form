import { useState } from "react";
import completeIcon from "./assets/images/icon-complete.svg";
import cardLogo from "./assets/images/card-logo.svg";
import validateCreditCard from "./helpers/validateCreditCard";

function App() {
  const [isCompleted, setIsCompleted] = useState(false);

  const [cardData, setCardData] = useState({
    cardName: "Jane Appleseed",
    cardNumber: "0000000000000000",
    cardExpirationMonth: "MM",
    cardExpirationYear: "YY",
    cardCVC: "123",
  });

  function handleChange(e): void {
    setCardData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e): void {
    e.preventDefault();
    console.log(e);
    const allFieldsValid = Object.values(validateCreditCard(cardData)).every(
      (elem) => elem == true
    );
    allFieldsValid ? setIsCompleted(true) : console.log("Wrong");
  }

  function handleContinue(e): void {
    setIsCompleted(false);
    setCardData({
      cardName: "Jane Appleseed",
      cardNumber: "0000000000000000",
      cardExpirationMonth: "MM",
      cardExpirationYear: "YY",
      cardCVC: "123",
    });
  }

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
            />
          </div>
          <div className="card-number">
            <label htmlFor="">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={handleChange}
            />
          </div>
          <div className="card-expiration">
            <label htmlFor="">Exp. Date (MM/YY)</label>
            <div className="card-date">
              <input
                type="text"
                name="cardExpirationMonth"
                placeholder="MM"
                onChange={handleChange}
              />
              <input
                type="text"
                name="cardExpirationYear"
                placeholder="YY"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="card-cvc">
            <label htmlFor="">CVC</label>
            <input
              type="text"
              name="cardCVC"
              placeholder="e.g. 123"
              onChange={handleChange}
            />
          </div>

          <button className="confirm">Confirm</button>
        </form>
      )}
    </main>
  );
}

export default App;
