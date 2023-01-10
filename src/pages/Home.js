import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";
import useAuth from "../hooks/useAuth";
import Loader from "../components/ui/Loader";

function HomePage() {
  const [productArray, setProductArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const {auth} = useAuth();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
        const { data } = await axios.get('Product');
        setProductArray(data);
        setIsLoading(false);
    })();
}, []);

  return (
    <section>
      <h1>Products {auth?.userName}</h1>
      {isLoading && <Loader />}
      <ProductList products={productArray} />
    </section>
  );
}

export default HomePage;


//2:02:00  https://youtu.be/Dorf8i6lCuk?t=7324