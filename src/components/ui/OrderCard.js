import classes from "./OrderCard.module.css";

function OrderCard(props){
    return <div className={classes.card}>{props.children}</div>
}

export default OrderCard;