const ForgotPasswordPage = () => {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <form action="" className="form w-100 h-60">
        <h1 className="text-4xl font-bold text-green-700">Forgot Password</h1>
        <input type="email" name="email" className="input" placeholder="Enter your email" />
        <button className="btn w-full">Send Code</button>
      </form>
    </main>
  )
}

export default ForgotPasswordPage