import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreditCardList from "../components/account/CreditCardList";
import PersonalInfo from "../components/account/PersonalInfo";
import Refund from "../components/account/Refund";
import Security from "../components/account/Security";
import UserAddress from "../components/account/UserAddress";
import OrderCard from "../components/ui/OrderCard";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";
import "./Account.css";

function AccountPage() {
  const { auth } = useAuth();
  const [userData, setUserData] = useState({});
  const [creditCardArray, setCreditCardArray] = useState([]);
  const logout = useLogout();
  const navigate = useNavigate();

  const signOut = async () => {
    await logout();
    console.log("Logging out..", auth);
    navigate('/');
  };

  useEffect(() => {
    (async () => {
      try {
        const userId = jwtDecode(auth.accessToken).iss;
        const { data } = await axios.get("User/" + userId);
        setUserData(data);

        //dummy data
        setCreditCardArray([
          {
            id: 1,
            name: data.name,
            surname: data.surname,
            num: "4852 6987 3342 2825",
            exp: "04/11",
            cvc: "174",
          },
          {
            id: 2,
            name: data.name,
            surname: data.surname,
            num: "4852 6987 3342 7855",
            exp: "06/02",
            cvc: "788",
          },
        ]);
      } catch (err) {
        console.log("ACC PG " + err);
        //navigate('/internal')
      }
    })();
  }, []);

  return (
    <div>
      <div className="acc-container">
        <div className="acc-content">
          <aside className="acc-sidebar">
              <button className="sgout-btn" onClick={signOut}>Sign out</button>
              <a href="/cart">My cart</a>
              <br></br>
              <a href="#ovw">Overview</a>
              <a href="#ord">My orders</a>
              <a href="#ref">Refund and return</a>
              <a href="#adr">Shipping address</a>
              <a href="#pay">Payment</a>
              <a href="#set">Settings</a>
              
          </aside>

          <div className="acc-info">
            <div className="sections">
              <section className="overview" id="ovw">
                <h2>Overview</h2>
                <hr></hr>
                <div className="ovw-info">
                  <p>Profile image: </p>
                  <p>Email: {auth.userName}</p>
                  <p>Name: {userData.name}</p>
                  <p>Surname: {userData.surname}</p>
                  <p>Phone number: {userData.phoneNumber}</p>
                </div>
              </section>
              <section className="orders" id="ord">
                <h2>My orders</h2>
                <hr></hr>
                <div className="order-cards">
                  <OrderCard>
                    <label>Unpaid</label>
                    <i class="fa-solid fa-wallet"></i>
                  </OrderCard>
                  <OrderCard>
                    <label>Delivered</label>
                    <i className="fa-solid fa-truck-fast "></i>
                  </OrderCard>
                  <OrderCard>
                    <label>Processing</label>
                    <i class="fa-solid fa-arrows-rotate"></i>
                  </OrderCard>
                  <OrderCard>
                    <label>Cancelled</label>
                    <i class="fa-solid fa-file-circle-xmark"></i>
                  </OrderCard>
                </div>
              </section>
              <section className="refund" id="ref">
                <h2>Refund and return</h2>
                <hr></hr>
                <Refund />
              </section>
              <section className="address" id="adr">
                <h2>Shipping address</h2>
                <hr></hr>
                <UserAddress />
              </section>
              <section className="payment" id="pay">
                <h2>Payment</h2>
                <hr></hr>
                <CreditCardList items={creditCardArray} />
              </section>
              <section className="settings" id="set">
                <h2>Settings</h2>
                <hr></hr>
                <Security/>
                <PersonalInfo/>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
