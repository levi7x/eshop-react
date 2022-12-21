import Card from "../ui/Card";

function ProductItem(props) {
  return (
    <li>
      <Card>
        <div>
          <img src={props.image} />
        </div>
        <div>
          <h3>{props.name}</h3>
          <h3>{props.price}</h3>
          <h3>{props.stock}</h3>
          <p>{props.description}</p>
        </div>
        <div>
          <button>Add to cart</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
