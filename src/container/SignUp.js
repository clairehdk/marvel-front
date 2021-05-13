import axios from "axios";

import { useHistory } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  let history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        username: username,
        email: email,
        password: password,
      };
      const response = await axios.post("http://localhost:3001/signup", data);
      //   console.log(response.data);
      //   const token = response.data.token;
      //   setUser(token);
      history.push("/");
    } catch (e) {
      //   setError(e);
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
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUserName}
        />
        <input type="text" placeholder="Email" onChange={handleEmail} />
        <div>
          <input
            className="pass"
            // type={view ? "text" : "password"}
            placeholder="Mot de passe"
            onChange={handlePass}
          />
          <i class="fas fa-eye"></i>
        </div>
        <input className="bleu" type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default SignUp;
