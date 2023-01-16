import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

function UserAddress() {
  const { auth } = useAuth();
  const [address, setAddress] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const userId = jwtDecode(auth.accessToken).iss;
        const { data } = await axios.get("Address/" + userId);
        setAddress(data);
        console.log(data);
      } catch (err) {}
    })();
  }, []);
  return (
    <div>
      <p>This is your primary shipping addres.</p>
      <p>State: {address.state}</p>
      <p>Street: {address.street}</p>
      <p>City: {address.city}</p>
      <p>Postal code: {address.postalCode}</p>
    </div>
  );
}

export default UserAddress;
