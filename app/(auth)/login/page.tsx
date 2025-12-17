'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          rememberMe
        }),
      });

      const data = await res.json();
      if(data.success){
        router.push('/');
        router.refresh();
      }else {
        alert(data.message);
      }

    } catch(err) {
      console.error("Error during login:", err);
      alert("An error occurred during login. Please try again.");
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
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
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
