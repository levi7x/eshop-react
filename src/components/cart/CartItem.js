import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./CartItem.module.css";

function CartItem(props) {
  const navigate = useNavigate();


  const disableButtons = () => {
    const buttons = document.querySelectorAll("#btn-container button");
    buttons.forEach(button => {
      button.disabled = true;
    });
    setTimeout(() => {
      buttons.forEach(button => {
        button.disabled = false;
      });
    }, 500);
  }



  const increaseHandler = async () => {

    try {
      disableButtons();
      await axios.post("/Order/cart/" + props.id);
      props.onChange(props.pieces);
    } catch (err) {
      console.log(err);
      navigate("/internal");
    }
  };

  const decreaseHandler = async () => {
    try {
      disableButtons();
      await axios.delete("/Order/cart/" + props.id);
      props.onChange(props.pieces);

    } catch (err) {
      console.log(err);
      navigate("/internal");
    }

  };

  const removeItemHandler = async () =>{
    try{
      disableButtons();
      await axios.delete("/Order/cart/" + props.id, {
        params: {
          atOnce: true
        }
      });
      props.onChange(props.pieces);
    }
    catch(err){
      console.log(err);
      navigate("/internal");
    }
  }
  return (
    <Card>
      <div>
        <div className={classes.img}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.info}>
          <h3>{props.name}</h3>
          <p>{props.price}</p>
          <p>{props.stock}</p>
        </div>

        <div className={classes.btns} id="btn-container">
          <p>{props.pieces}</p> 
          <button onClick={increaseHandler}>
            +
          </button>
          <button onClick={decreaseHandler}>
            -
          </button>
          <button onClick={removeItemHandler}>X</button>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;
