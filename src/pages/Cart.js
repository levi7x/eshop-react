import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartList from "../components/cart/CartList";
import Loader from "../components/ui/Loader";
import "./Cart.css";

function Cart() {
  const [cartContent, setCartContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const handleAmountChange = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    setIsLoading(true);
    console.log("RENDERING " + flag);
    (async () => {
      const { data } = await axios.get("Order/cart/content");
      setCartContent(data);
    })();
    setIsLoading(false);
  }, [flag]);

  const totalAmount = () => {
    return cartContent
      .map((item) => item.price * item.pieces)
      .reduce((a, b) => a + b).toFixed(2);
  };

  let content;
  let total;

  if (cartContent && cartContent.length === 0) {
    content = <><p className="cart-empty">At the moment your cart is empty</p></>;
  } else if (cartContent) {
    total = totalAmount();
    content = <CartList items={cartContent} onChange={handleAmountChange} />;
  }

  const backToShopHandler = () =>{
        navigate("/");
  }

  const continueToShopHandler = () =>{
    navigate("/")
  }

  return (
    <div className="cart-content">
      <div className="cart-container">
        <div className="cart-header">
          steps:cart-deliveryinfo-payment This is the content of your cart
          <hr></hr>
        </div>
        <div className="cart-list">
          {isLoading && <Loader />}
          {content}
        </div>
        <hr></hr>
        <div className="cart-bottom">
          <div className="flex-amount">Total amount {total} $</div>
          <div className="flex-btns">
            <button className="btn-shop" onClick={backToShopHandler}>BACK TO SHOPPING</button>
            <button className="btn-cnt" onClick={continueToShopHandler}>CONTINUE TO PAY</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
