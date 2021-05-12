import "./App.css";
// Import des hooks
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
// Import des composants / containers
import Home from "./container/Home";
import Comics from "./container/Comics";
import Characters from "./container/Characters";
import Header from "./component/Header";
import CharDetails from "./container/CharDetails";

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [title, setTitle] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);

  const handleSearchBar = () => {
    setSearchBar(true);
  };
  const handleSearch = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  return (
    <Router>
      <Header handleSearch={handleSearch} title={title} />
      <Switch>
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
          />
        </Route>
        <Route path="/characters">
          <Characters
            handleSearchBar={handleSearchBar}
            name={title}
            limit={limit}
            skip={skip}
            setLimit={setLimit}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
