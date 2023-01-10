import CartItem from "./CartItem";

function CartList(props) {
  return (
    <ul>
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
