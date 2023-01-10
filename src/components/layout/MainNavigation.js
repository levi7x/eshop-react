import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const { auth } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const signOut = async () => {
    await logout();
    console.log("Logging out..", auth);
  };

  const toCart = () => {
    if (auth?.userName) {
      navigate("/cart");
    } else {
      setModalIsOpen(true);
    }
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
          </ul>

          <div className="text-end">
            {!auth?.userName && (
              <>
                <Link
                  to="/login"
                  type="button"
                  className="btn btn-outline-light me-2"
                >
                  Login
                </Link>
              </>
            )}
            <Link
              to="/about"
              type="button"
              className="btn btn-outline-light me-2"
            >
              About us
            </Link>
            <Link
              to="/brands"
              type="button"
              className="btn btn-outline-light me-2"
            >
              Brands
            </Link>
            {auth?.userName && (
              <>
                <button
                  onClick={signOut}
                  className="btn btn-outline-light me-2"
                >
                  Sign Out
                </button>
              </>
            )}
            <img onClick={toCart} src="cart.png" className={classes.cart} />
          </div>
        </div>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </header>
  );
}

export default MainNavigation;
