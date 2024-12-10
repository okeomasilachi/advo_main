export default function SetPassword() {
  return (
    <div className="h-screen flex justify-center sm:items-center bg-white">
      <div className="rounded-3xl w-full max-w-lg sm:border-color mt-10 sm:mt-0 p-4 sm:p-10 sm:border border-solid sm:border-[#EDEFF5]">
        <div className="text-center">
          <h1 className="text-2xl">Welcome back!</h1>
        </div>
        <div className="flex flex-col mt-6 gap-5">
          <div className="flex flex-col">
            <span>Enter Password</span>
            <input
              type="password"
              className="border border-solid border-[#EDEFF5] p-3 rounded-xl mt-1"
              placeholder="Enter Admin password"
            />
          </div>
          <div className="flex flex-col">
            <span>Confirm Password</span>
            <input
              type="password"
              className="border border-solid border-[#EDEFF5] p-3 rounded-xl mt-1"
              placeholder="Confirm Admin password"
            />
          </div>
          {/* <div className="text-right">
                        <Link to='/forgot_password'>
                            <p className="text-[#5573EF] cursor-pointer">Forgot your password?</p>
                        </Link>
                    </div> */}
          <div>
            <button className="rounded-xl w-full text-[white] bg-[#5573EF] p-3">
              Set Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
