'use client';

import { useState } from "react";
import toast from "react-hot-toast";

const SendMessagePage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        setMessage('');
      } else {
        toast.error("Failed to send message: " + data.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }
  return (
    <main className="flex min-h-screen items-center justify-center">
        <form onSubmit={handleSubmit} className="form w-100 h-100">
            <h1 className="text-4xl font-bold text-gray-950 dark:text-gray-50">Send Message</h1>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Send Message..." className="min-h-50 w-full p-3 border border-gray-950 dark:border-gray-50"></textarea>
            <button type="submit" className="btn w-full">Send</button>
        </form>
    </main>
  )
}

export default SendMessagePage