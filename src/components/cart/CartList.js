import CartItem from "./CartItem";
import classes from "./CartList.module.css"

function CartList(props) {
  return (
    <ul className={classes.content}>
      {props.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.productImageUrl}
          name={item.productName}
          price={item.price}
          stock={item.stock}
          pieces={item.pieces}
          onChange={props.onChange}
        />
      ))}
    </ul>
  );
}

export default CartList;
