import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import jwtDecode from "jwt-decode";

function LoginPage() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const [navigate, setNavigate] = useState(false);
  const { setAuth } = useAuth();
  const { auth } = useAuth();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "Auth/login",
        { userName, password },
        { withCredentials: true }
      );

      axios.defaults.headers.common["Authorization"] = `Bearer ${data}`;

      const role =
        jwtDecode(data)[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
      const roles = [];
      const accessToken = data;
      roles.push(role);

      setAuth({ userName, roles, accessToken });
      setNavigate(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Bad credentials");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  if (navigate || auth?.userName) {
    return <Navigate to="/" />;
  }

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <p className="text-danger" aria-live="assertive">{errMsg}</p>
        <div className="form-floating">
          <input
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </main>
  );
}

export default LoginPage;
