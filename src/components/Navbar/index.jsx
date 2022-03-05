import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { auth } from "../../utils/firebase-config";
import styles from "./Navbar.module.css";

function Navbar() {
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <ul className={styles.navbarContainer}>
      <li>
        <Link to="/" className={styles.link}>
          My History
        </Link>
      </li>

      {!user ? (
        <li className={styles.rightSide}>
          <div className={styles.container}>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </div>

          <div className={styles.container}>
            <Link to="/register" className={styles.link}>
              Register
            </Link>
          </div>
        </li>
      ) : (
        <li className={styles.rightSide}>
          <div className={styles.container}>{user.name}</div>

          <div className={styles.container}>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </li>
      )}
    </ul>
  );
}

export default Navbar;
