import ProductItem from "./ProductItem";

function ProductList(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.productImageUrl}
          name={product.productName}
          price={product.price}
          stock={product.stock}
          description={product.description}
        />
      ))}
    </ul>
  );
}

export default ProductList;
