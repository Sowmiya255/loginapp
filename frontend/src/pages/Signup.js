import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/signup", form);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert("Signup failed: " + err.response.data.message);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br/>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br/>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
