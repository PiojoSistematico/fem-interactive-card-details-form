import { useState } from "react";
import completeIcon from "./assets/images/icon-complete.svg";
import cardLogo from "./assets/images/card-logo.svg";
function App() {
  const [isCompleted, setIsCompleted] = useState(false);

  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    cardExpirationDay: "",
    cardExpirationMonth: "",
    cardCVC: "",
  });

  function handleChange(e): void {
    console.log(e);
  }

  function handleSubmit(e): void {
    console.log(e);
  }

  function handleContinue(e): void {
    console.log(e);
  }

  return (
    <main>
      <section className="card card-section">
        <div className="card front-card">
          <img src={cardLogo} alt="" />
          <h1>0000 0000 0000 0000</h1>
          <div className="flex-between">
            <h2>Jane Appleseed</h2>
            <span>00/00</span>
          </div>
        </div>
        <div className="card back-card">000</div>
      </section>
      {isCompleted ? (
        <form action="">
          <div className="card-holder">
            <label htmlFor="">Cardholder Name</label>
            <input type="text" placeholder="e.g. Jane Appleseed" />
          </div>
          <div className="card-number">
            <label htmlFor="">Card Number</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
          </div>
          <div className="card-expiration">
            <label htmlFor="">Exp. Date (MM/YY)</label>
            <div className="card-date">
              <input type="text" placeholder="MM" />
              <input type="text" placeholder="YY" />
            </div>
          </div>
          <div className="card-cvc">
            <label htmlFor="">CVC</label>
            <input type="text" placeholder="e.g. 123" />
          </div>

          <button className="confirm">Confirm</button>
        </form>
      ) : (
        <section className="complete-section">
          <img src={completeIcon} alt="" className="icon-complete" />
          <div className="thanks">
            <p className="thanks-title">Thank you!</p>
            <p className="thanks-paragraph">We've added your card details</p>
          </div>
          <button className="continue">Continue</button>
        </section>
      )}
    </main>
  );
}

export default App;
