import axios from "axios";
import { useEffect, useState } from "react";

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
      <ul>
        {productArray.map((item) => {
            return <li key={item.id}>{item.productName}</li>
        })}
      </ul>
    </section>
  );
}

export default HomePage;
