import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderCard from "../components/ui/OrderCard";
import useAuth from "../hooks/useAuth";
import "./Account.css";

function AccountPage() {
  const { auth } = useAuth();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const userId = jwtDecode(auth.accessToken).iss;
        const { data } = await axios.get("User/" + userId);
        setUserData(data);
        console.log(data);
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
            <ul>
              <li>Sign out</li>
              <li>My cart</li>
              <br></br>
              <li>Overview</li>
              <li>My orders</li>
              <li>Refund and return</li>
              <li>Payment</li>
              <li>Security</li>
              <li>Settings</li>
              <li>Shipping address</li>
            </ul>
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
                <hr></hr>
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
                <div>
                  IN DISPUTE
                </div>
                <hr></hr>
              </section>
              <section className="payment" id="pay">
                <h2>Payment</h2>
                <hr></hr>
              </section>
              <section className="address" id="adr">
                ADDRESS
              </section>
              <section className="security" id="sec">
                SECURITY
              </section>
              <section className="settings" id="set">
                SETTINGS
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
