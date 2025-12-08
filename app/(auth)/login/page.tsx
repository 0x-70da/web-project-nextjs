import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen p-15">
      <form action="" className="form w-100 h-110">
        <h1 className="text-4xl text-green-700 font-bold">Log In</h1>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          className="input"
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
