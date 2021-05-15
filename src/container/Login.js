import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = ({
  setError,
  errorMessage,
  setUser,
  handleViewPass,
  viewPass,
}) => {
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
      const userId = response.data._id;
      setUser(token, userId);
      history.push("/");
    } catch (e) {
      setError(e);
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
    <div className="form">
      <span>{errorMessage && errorMessage}</span>
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
            type={viewPass ? "text" : "password"}
            placeholder="Mot de passe"
            onChange={handlePass}
          />
          <i onClick={handleViewPass} className="fas fa-eye"></i>
        </div>
        <input
          onClick={handleSubmit}
          className="bleu"
          type="submit"
          value="Se connecter"
        />
      </form>
    </div>
  );
};

export default Login;
