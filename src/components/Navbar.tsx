import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
      </div>
      {user ? (
        <div className="user">
          {user.displayName}
          {<img src={user.photoURL || ""} />}
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            Signout
          </button>
        </div>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </div>
  );
};
