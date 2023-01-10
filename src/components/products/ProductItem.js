import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Backdrop from "../ui/Backdrop";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import classes from "./ProductItem.module.css";

function ProductItem(props) {
  const { auth } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toCart = async (e) =>{
    e.preventDefault();
    if(!auth?.userName){
      setModalIsOpen(true);
    }
    else{
      console.log('Adding to cart product ' + props.name);
      
      const data = await axios.post('/Order/cart/' + props.id);
      console.log(data.response);
    }
  }

  const closeModalHandler = () =>{
    setModalIsOpen(false);
  }

  return (
      <Card>
        <div>
          <img src={props.image} alt={props.name}/>
        </div>
        <div>
          <h3>{props.name}</h3>
          <p className={classes.price}>{props.price} $</p>
          <p>{props.description}</p>
          <p>{props.stock}</p>
          <button onClick={toCart} className={classes.btn}>Add to cart</button>
        </div>
        {modalIsOpen && <Modal onCancel={closeModalHandler}/>}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      </Card>
  );
}

export default ProductItem;
