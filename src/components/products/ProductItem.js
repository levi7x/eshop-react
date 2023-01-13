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
    <>
    {modalIsOpen && <Modal onCancel={closeModalHandler} />}
    {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    
    <Card>
      <div className={classes.product}>
        <img className={classes.img} src={props.image} alt={props.name} />
        <p className={classes.name}>{props.name}</p>
        <p className={classes.price}>{props.price} $</p>
        <p className={classes.stock}>{props.stock} in stock</p>
        <button onClick={toCart} className={classes.btn}>
          Add to cart
        </button>
      </div>
    </Card>
    </>
  );
}

export default ProductItem;
