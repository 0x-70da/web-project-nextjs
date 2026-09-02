'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password
        }),
      });

      const data = await res.json();
      if(data.success){
        toast.success("Account created successfully! Please log in.");
        router.push('/login')
      }
      else {
        toast.error(data.message);
      }

    } catch(err) {
      console.error("Error during sign up:", err);
      toast.error("An error occurred during sign up. Please try again.");
    }
  }
  return (
    <main className="flex justify-center items-center w-full h-screen p-15">
      <form onSubmit={handleSubmit} className="form w-100 h-110">
        <h1 className="text-4xl text-green-700 font-bold">Sign Up</h1>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value.trim())}
          className="input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value.trim())}
          className="input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value.trim())}
          className="input"
          required
        />
        <button type="submit" className="btn w-full">
          Sign Up
        </button>
        <div className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-green-700 font-semibold">
            Log In
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUpPage;
