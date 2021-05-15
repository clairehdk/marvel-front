import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const SignUp = ({
  setError,
  errorMessage,
  setUser,
  handleViewPass,
  viewPass,
}) => {
  let history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        username,
        email,
        password,
      };
      const response = await axios.post("http://localhost:3001/signup", data);
      console.log(response);
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
  const handleUserName = (event) => {
    const value = event.target.value;
    setUserName(value);
  };

  return (
    <div className="form">
      <span>{errorMessage && errorMessage}</span>
      <form>
        <input
          name="username"
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUserName}
        />
        <input
          name="email"
          type="text"
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
          value="S'inscrire"
        />
      </form>
    </div>
  );
};

export default SignUp;
