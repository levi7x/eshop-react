import axios from "axios";
import { useEffect, useState } from "react";
import CartList from "../components/cart/CartList";
import Loader from "../components/ui/Loader";

function Cart(){
    const [cartContent, setCartContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState();
    
    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
    }

    useEffect(() =>{
        setIsLoading(true);
        console.log('RENDERING ' + amount);
        (async () =>{
            const { data } = await axios.get('Order/cart/content');
            setCartContent(data);
        })();
        setIsLoading(false);
    }, [amount]);

    let content;

    if (cartContent && cartContent.length === 0) {
        content = <p>The cart is empty</p>
      } else if (cartContent) {
        content = <CartList items={cartContent} onChange={handleAmountChange}/>;
      }

    return <div>
        {isLoading && <Loader />}
        {content}
        <div>
        </div>
    </div>
}

export default Cart;