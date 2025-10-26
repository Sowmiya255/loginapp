import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, logoutUser } = useContext(AuthContext);
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:3000/name", {
          headers: { Authorization: token },
        });
        setWelcomeMsg(res.data[0].welcome);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>
      {user ? (
        <>
          <h2>{welcomeMsg}, {user.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h3>Please login first</h3>
      )}
    </div>
  );
}
