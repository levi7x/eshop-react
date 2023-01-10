import ProductItem from "./ProductItem";
import classes from './ProductList.module.css'

function ProductList(props) {
  return (
    <ul  className={classes.content}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.productImageUrl}
          name={product.productName}
          price={product.price}
          stock={product.stock}
          description={product.description}
          increase={props.increase}
          decrease={props.decrease}
        />
      ))}
    </ul>
  );
}

export default ProductList;
