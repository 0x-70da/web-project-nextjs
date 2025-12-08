import Link from "next/link";

const SignUpPage = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen p-15">
      <form action="" className="form w-100 h-140">
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
        />
        <input
          type="email"
          name="email"
          placeholder="Email..."
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          className="input"
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
