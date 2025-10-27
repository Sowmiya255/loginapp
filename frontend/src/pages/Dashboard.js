import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Dashboard = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/name", {
          headers: { Authorization: user.token },
        });
        setData(res.data[0].welcome);
      } catch (error) {
        setData("Error fetching data",error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}</p>
      <p>{data}</p>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Dashboard;
