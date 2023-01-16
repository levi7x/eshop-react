import "./CreditCard.css";

function CreditCardItem(props) {
  return (
      <div class="card">
        <div class="card__front card__part">
          <p class="card_numer">**** **** **** {props.num.substr(props.num.length - 4)}</p>
          <div class="card__space-75">
            <span class="card__label">Card holder</span>
            <p class="card__info">{props.name} {props.surname}</p>
          </div>
          <div class="card__space-25">
            <span class="card__label">Expires</span>
            <p class="card__info">{props.exp}</p>
          </div>
        </div>

        <div class="card__back card__part">
          <div class="card__black-line"></div>
          <div class="card__back-content">
            <div class="card__secret">
              <p class="card__secret--last">{props.cvc}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CreditCardItem;
