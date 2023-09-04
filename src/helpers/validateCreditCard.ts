/* chatgpt told me to use this ;) */

type CreditCard = {
  cardName: string;
  cardNumber: string;
  cardExpirationMonth: string;
  cardExpirationYear: string;
  cardCVC: string;
};
type ValidationResults = {
  cardName: boolean;
  cardNumber: boolean;
  cardExpirationMonth: boolean;
  cardExpirationYear: boolean;
  cardCVC: boolean;
};

function validateCreditCard(card: CreditCard): ValidationResults {
  const result: ValidationResults = {
    cardName: card.cardName !== "",
    cardNumber: /^\d{16}$/.test(card.cardNumber),
    cardExpirationMonth: /^(0[1-9]|1[0-2])$/.test(card.cardExpirationMonth),
    cardExpirationYear: /^\d{2}$/.test(card.cardExpirationYear),
    cardCVC: /^\d{3}$/.test(card.cardCVC),
  };

  return result;
}

export default validateCreditCard;
