import axios from "axios";
import { useNavigate } from "react-router-dom";
import NumSpinner from "../ui/NumSpinner";
import classes from "./CartItem.module.css";

function CartItem(props) {
  const navigate = useNavigate();

  const disableButtons = () => {
    const buttons = document.querySelectorAll("#btn-container button");
    buttons.forEach((button) => {
      button.disabled = true;
    });
    setTimeout(() => {
      buttons.forEach((button) => {
        button.disabled = false;
      });
    }, 500);
  };

  const increaseHandler = async () => {
    try {
      disableButtons();
      console.log('PLUS');
      await axios.post("/Order/cart/" + props.id);
      props.onChange(props.pieces);
    } catch (err) {
      console.log(err);
      navigate("/internal");
    }
  };

  const decreaseHandler = async () => {
    try {
      console.log('MINUS');
      disableButtons();
      await axios.delete("/Order/cart/" + props.id);
      props.onChange(props.pieces);
    } catch (err) {
      console.log(err);
      navigate("/internal");
    }
  };

  const removeItemHandler = async () => {
    try {
      disableButtons();
      await axios.delete("/Order/cart/" + props.id, {
        params: {
          atOnce: true,
        },
      });
      props.onChange(props.pieces);
    } catch (err) {
      console.log(err);
      navigate("/internal");
    }
  };
  return (
    <div className={classes.cartitem}>
      <div className={classes.img}>
        <img src={props.image} alt={props.name} />
      </div>

      <div className={classes.name}>
        <h4>{props.name}</h4>
      </div>
      <div className={classes.price}>
        <p>{props.price} $</p>
      </div>
      <div className={classes.stock}>
        <p>{props.stock} available</p>
      </div>
      <div className={classes.btns} id="btn-container">
{/*         <p>{props.pieces}</p>
        <button onClick={increaseHandler}>+</button>
        <button onClick={decreaseHandler}>-</button> */}
        <NumSpinner value={props.pieces} increase={increaseHandler} decrease={decreaseHandler} />
      </div>
      <div className={classes.trash}>
      <i className="fa-solid fa-trash-can" onClick={removeItemHandler}></i>
      </div>
    </div>
  );
}

export default CartItem;
