import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserContextProvider from "./context/UserContext";

import "./App.css";
import RoutesSkeleton from "./components/RoutesSkeleton";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Navbar />

        <RoutesSkeleton />
      </UserContextProvider>
    </Router>
  );
}

export default App;
