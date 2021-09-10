import HomePage from "./components/HomePage";
import Cart from "./components/Cart";


import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
