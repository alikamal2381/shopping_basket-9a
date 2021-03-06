import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <header>
            <Link to="/">React Shopping Cart</Link>
            <Link to="/admin">Admin</Link>
          </header>
          <main>
            {/* Products List */}
            <Route path="/admin" component={AdminScreen} />
            <Route path="/" component={HomeScreen} exact />
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
