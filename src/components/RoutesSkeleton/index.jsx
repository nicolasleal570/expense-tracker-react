import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import RickAndMortyAPI from "../../pages/RickAndMortyAPI";
import LoginPage from "../../pages/LoginPage";
import RickAndMortyAPISingleCharacter from "../../pages/RickAndMortyAPISingleCharacter";
import RegisterPage from "../../pages/RegisterPage";
import { UserContext } from "../../context/UserContext";
import PrivateRoute from "../PrivateRoute";

const AboutPage = () => <h1>About page</h1>;

const ContactPage = () => <h1>Contact page</h1>;

const Page404 = () => <h1>404 Not found</h1>;

export default function RoutesSkeleton() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={user?.id ? <Homepage /> : <Navigate to="/login" />}
      />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/rick-and-morty" element={<RickAndMortyAPI />} />
      <Route
        path="/rick-and-morty/:characterId"
        element={<RickAndMortyAPISingleCharacter />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
