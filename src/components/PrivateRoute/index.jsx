import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  console.log({ user });

  if (Object.keys(user || {}).length > 0) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
