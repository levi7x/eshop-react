import CreditCardItem from "./CreditCardItem";
import "./CreditCardList.css";

function CreditCardList(props){
    return <div>
    <ul className="credit-card-content">
      {props.items.map((item) => (
        <CreditCardItem
          key={item.id}
          id={item.id}
          name={item.name}
          surname={item.surname}
          num={item.num}
          cvc={item.cvc}
          exp={item.exp}
        />
      ))}
    </ul>
    </div>
}

export default CreditCardList;