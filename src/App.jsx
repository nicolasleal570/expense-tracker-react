import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RickAndMortyAPI from "./pages/RickAndMortyAPI";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import UserContextProvider from "./context/UserContext";

import "./App.css";
import LoginPage from "./pages/LoginPage";

const AboutPage = () => <h1>About page</h1>;

const ContactPage = () => <h1>Contact page</h1>;

const Page404 = () => <h1>404 Not found</h1>;

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/rick-and-morty" element={<RickAndMortyAPI />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
