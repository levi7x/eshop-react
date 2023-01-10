import axios from "axios";

const useCartContent = () =>{

    const incrementPieces = async () =>{
        try{
            const { response } = await axios.post('Order/cart/')
        }
        catch(err){
            console.log(err);
        }
    }



}

export default useCartContent;