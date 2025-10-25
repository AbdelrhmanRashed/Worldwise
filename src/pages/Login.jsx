import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";
import Button from "../components/Button";

const Login = () => {
  // PRE-FILL FOR DEV PURPOSES
  const navigate = useNavigate();
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const [error, setError] = useState(null);
  const [attempted, setAttempted] = useState(false);
  const { isAuthenticated, login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      setAttempted(true);
    } else {
      setError("Please enter your email and password!");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    } else if (attempted) {
      setError("Your email or password is wrong!");
    }
  }, [isAuthenticated, attempted, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
      {error && <Message message={error} />}
    </main>
  );
};

export default Login;
