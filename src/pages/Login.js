import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.token) {
        // Cookies.set("token-vinted", response.data.token, { expires: 14 });
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      //   console.log(error.message);
      console.log(error.response.data);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleLogin}
      >
        <h1>Login</h1>
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="Se connecter" />
        <Link to="/signup">Pas encore de compte ? Inscris-toi</Link>
      </form>
    </div>
  );
};

/* const Login = ({
    handleSubmit,
    setEmail,
    setPassword,
    email,
    password
}) => {
    return (
        <div className="container">

            <form onSubmit={e => handleSubmit(e)}>
                <label>Se connecter</label>
               
                <input
                    value={email}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
               
                <input
                    value={password}
                    placeholder="Mot de passe"
                    onChange={e => setPassword(e.target.value)}
                />
                
                <input className="submit-button" value="S'inscrire" type="submit" />

                <label>Pas encore de compte ? Inscrivez-vous ?</label>
            </form>
        </div>
    );
}; */

export default Login;
