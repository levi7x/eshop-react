import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";
import useAuth from "../hooks/useAuth";
import Loader from "../components/ui/Loader";
import "./Home.css";

function HomePage() {
  const [productArray, setProductArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { auth } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const { data } = await axios.get("Product");
      setProductArray(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="home-content">
      <aside className="sidebar">
         <h2>Categories</h2>
         <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
         </ul>
      </aside>
      <main className="product-list">
        <h1>Products {auth?.userName}</h1>
        {isLoading && <Loader />}
        <ProductList products={productArray} />
      </main>
    </div>
  );
}

export default HomePage;

//2:02:00  https://youtu.be/Dorf8i6lCuk?t=7324
