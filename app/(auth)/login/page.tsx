'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();
    if(data.success){
      router.push('/');
    }else{
      alert(data.message);
    }
  }

  return (
    <main className="flex justify-center items-center w-full h-screen p-15">
      <form onSubmit={handleSubmit} className="form w-100 h-110">
        <h1 className="text-4xl text-green-700 font-bold">Log In</h1>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          className="input"
          onChange={(e) => setUsername(e.target.value)}
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
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="w-4 h-4 accent-green-700"
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <Link
            href="/forgot-password"
            className="text-green-700 font-semibold"
          >
            Forgot Password?
          </Link>
        </div>
        <button type="submit" className="btn w-full">
          Log In
        </button>
        <div className="text-center">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-green-700 font-semibold">
            Sign up
          </Link>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
