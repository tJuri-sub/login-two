export const RegForm = () => {
  return (
    <div className="shadow-2xl p-3 w-[20%] bg-white rounded-md">
      <img
        className="w-[30%] rounded-md flex m-auto"
        src="/logo.jpg"
        alt="Logo VigiWheel"
      />
      <h1 className="text-center text-2xl">Login</h1>
      <form action="">
        <div className="flex flex-col my-6">
          <input
            className="border-[1px] border-slate-600 rounded-md p-[3px] mb-4"
            type="text"
            placeholder="username"
          />
          <input
            className="border-[1px] border-slate-600 rounded-md p-[3px] mb-[2px]"
            type="password"
            placeholder="password"
          />
          <a className="text-slate-400 text-[14px]" href="#">
            forget passowrd?
          </a>
        </div>
        <div>
          <input
            className="text-white bg-[#121212] px-4 py-1 flex m-auto rounded-md"
            type="submit"
            value="Log in"
          />
        </div>
      </form>
    </div>
  );
};
