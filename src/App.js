import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserList from "./pages/UserList";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container space-y-5 w-full h-full pa-4">
          <NavBar />
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-7">
              <img
                className="w-full h-full"
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt=""
              />
            </div>
            <div className="col-span-5">
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/userlist">
                <UserList />
              </Route>
              <Redirect to="/login" />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
