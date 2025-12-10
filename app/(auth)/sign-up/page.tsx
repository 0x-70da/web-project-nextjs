'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
      })
    });
    const data = await res.json();
    if(data.success){
      router.push('/login');
    }else{
      alert(data.message);
    }
  }

  return (
    <main className="flex justify-center items-center w-full h-screen p-15">
      <form className="form w-100 h-140" onSubmit={handleSubmit}>
        <h1 className="text-4xl text-green-700 font-bold">Sign Up</h1>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name..."
          className="input"
        />
        <input
          type="text"
          name="username"
          placeholder="Username..."
          className="input"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email..."
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password..."
          className="input"
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
