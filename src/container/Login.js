import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = ({ setError, errorMessage, setUser }) => {
  let history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        email: email,
        password: password,
      };
      const response = await axios.post("http://localhost:3001/login", data);
      console.log(response.data);
      const token = response.data.token;
      setUser(token);
      history.push("/");
    } catch (event) {
      setError(event.message);
    }
  };

  const handlePass = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  return (
    <div>
      {errorMessage && errorMessage}
      <form>
        <input
          name="email"
          type="mail"
          placeholder="Email"
          onChange={handleEmail}
        />
        <div>
          <input
            name="password"
            className="pass"
            // type={view ? "text" : "password"}
            placeholder="Mot de passe"
            onChange={handlePass}
          />
          <i class="fas fa-eye"></i>
        </div>
        <input
          onClick={handleSubmit}
          className="bleu"
          type="submit"
          value="S'inscrire"
        />
      </form>
    </div>
  );
};

export default Login;
