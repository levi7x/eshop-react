import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal(props){
    const navigate = useNavigate();

    const logInHandler = () =>{
        navigate("/login");
        props.onCancel();
    }

    const cancelHandler = () =>{
        props.onCancel();
    }

    return <div className={classes.modal}>
        <p className={classes.par}>Please log in to use this feature</p>
        <button className={classes.btn} onClick={logInHandler}>Log in now</button>
        <button className={classes.btn} onClick={cancelHandler}>Cancel</button>
    </div>
}

export default Modal;