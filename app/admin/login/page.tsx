'use client';
import { useState } from "react";

const AdminLoginPage = () => { // I know that I duplicated this code
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      }),
    });

    const data = await res.json();

    if(data.success) {
      alert("Welcome Admin");
    }else {
      alert(data.message);
    }
  }

  return (
    <main className="flex justify-center items-center w-full h-screen p-15">
      <form onSubmit={handleSubmit} className="form w-100 h-100">
        <h1 className="text-4xl text-green-700 font-bold">Log In</h1>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="btn w-full mt-12">
          Log In
        </button>
      </form>
    </main>
  );
};

export default AdminLoginPage;
