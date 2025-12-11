'use client';

import { useState } from "react";

const ChangePasswordPage = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/auth/change-password',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, newPassword }),
      });

      const data = await res.json();
      if(data.success){
        alert('Password changed successfully');
      } else {
        alert('Error changing password: ' + data.message);
      }
    } catch (error) {
      alert('An unexpected error occurred');
    }

  }
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <form onSubmit={handleSubmit} className="form w-100 h-110 border-2 border-green-700">
        <h1 className="text-4xl font-bold text-green-700">Change Password</h1>
        <label htmlFor="password" className="flex flex-col">
          Current Password
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </label>
        <label htmlFor="new-password" className="flex flex-col">
          New Password
          <input
            type="password"
            id="new-password"
            name="new-password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="input"
          />
        </label>
        <label htmlFor="confirm-password" className="flex flex-col">
          Confirm Password
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="input"
          />
        </label>
        <button type="submit" className="btn w-full">Change Password</button>
      </form>
    </main>
  );
};

export default ChangePasswordPage;
