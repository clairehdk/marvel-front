import "./App.css";
import Cookies from "js-cookie";
// Import des hooks
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
// Import des composants / containers
import Home from "./container/Home";
import Comics from "./container/Comics";
import Characters from "./container/Characters";
import Header from "./component/Header";
import CharDetails from "./container/CharDetails";
import SignUp from "./container/SignUp";
import Login from "./container/Login";
import Favorites from "./container/Favorites";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [userId, setUserId] = useState(Cookies.get("userId") || null);
  const [searchBar, setSearchBar] = useState(false);
  const [title, setTitle] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [viewPass, setViewPass] = useState(false);

  const setUser = (token, userId) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 10 });
      Cookies.set("userId", userId, { expires: 10 });
      setUserToken(token);
      setUserId(userId);
    } else {
      Cookies.remove("userToken");
      Cookies.remove("userId");
      setUserId(null);
      setUserToken(null);
    }
  };

  const handleViewPass = () => {
    setViewPass(!viewPass);
  };

  const setError = (e) => {
    setErrorMessage(e.response.data);
  };

  const handleSearchBar = () => {
    setSearchBar(true);
  };
  const handleSearch = (event) => {
    const value = event.target.value;
    // Peut-être setPage(1) si ça fou la merde
    setPage(1);
    setSkip(0);
    setTitle(value);
  };

  return (
    <Router>
      <Header
        handleSearch={handleSearch}
        title={title}
        token={userToken}
        setUser={setUser}
      />
      <Switch>
        <Route path="/user/favorites">
          <Favorites userId={userId} userToken={userToken} />
        </Route>
        <Route path="/signup">
          <SignUp
            setUser={setUser}
            setError={setError}
            errorMessage={errorMessage}
            handleViewPass={handleViewPass}
            viewPass={viewPass}
          />
        </Route>
        <Route path="/login">
          <Login
            setUser={setUser}
            setError={setError}
            errorMessage={errorMessage}
            handleViewPass={handleViewPass}
            viewPass={viewPass}
          />
        </Route>
        <Route path="/comics/:characterId">
          <CharDetails />
        </Route>
        <Route path="/comics">
          <Comics
            handleSearchBar={handleSearchBar}
            title={title}
            skip={skip}
            limit={limit}
            setLimit={setLimit}
            setSkip={setSkip}
            page={page}
            setPage={setPage}
          />
        </Route>
        <Route path="/characters">
          <Characters
            handleSearchBar={handleSearchBar}
            name={title}
            limit={limit}
            skip={skip}
            setLimit={setLimit}
            setSkip={setSkip}
            page={page}
            setPage={setPage}
            userToken={userToken}
          />
        </Route>
        <Route path="/">
          <Home setTitle={setTitle} token={userToken} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
