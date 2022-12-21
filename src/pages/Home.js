import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";

function HomePage() {
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    (async () => {
        const { data } = await axios.get('https://localhost:7257/api/Product');
        setProductArray(data);
        console.log({ data });
    })();
}, []);

  return (
    <section>
      <h1>Products</h1>
      <ProductList products={productArray} />
    </section>
  );
}

export default HomePage;


//2:02:00  https://youtu.be/Dorf8i6lCuk?t=7324