const ChangePasswordPage = () => {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <form action="" className="form w-100 h-110 border-2 border-green-700">
        <h1 className="text-4xl font-bold text-green-700">Change Password</h1>
        <label htmlFor="password" className="flex flex-col">
          Current Password
          <input
            type="password"
            id="password"
            name="password"
            className="input"
          />
        </label>
        <label htmlFor="new-password" className="flex flex-col">
          New Password
          <input
            type="password"
            id="new-password"
            name="new-password"
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
        <button className="btn w-full">Change Password</button>
      </form>
    </main>
  );
};

export default ChangePasswordPage;
