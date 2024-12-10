export default function Signup() {
  return (
    <div className="h-screen w-full m-0">
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="w-full max-w-md border-none sm:border-gray-200 sm:border-solid sm:rounded-3xl sm:p-8 sm:border p-4">
          <div>
            <h2 className="text-2xl font-bold text-center">
              Get started with us!
            </h2>
          </div>
          <div className="mt-4">
            <div className="flex flex-col">
              <span className="text-sm">School Name</span>
              <input
                className="mt-1 h-8  rounded-lg border indent-2.5 border-black border-gray"
                placeholder="Enter your school name"
              />
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-sm">School Address</span>
              <input
                className="mt-1 h-8  rounded-lg border indent-2.5 border-black border-gray"
                placeholder="Enter your school name"
              />
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-sm">Email Address</span>
              <input
                className="mt-1 h-8  rounded-lg border indent-2.5 border-black border-gray"
                placeholder="Enter your school name"
              />
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-sm">School Name</span>
              <input
                className="mt-1 h-8  rounded-lg border indent-2.5 border-black border-gray"
                placeholder="Enter your school name"
              />
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-sm">Phone Number</span>
              <input
                className="mt-1 h-8  rounded-lg border indent-2.5 border-black border-gray"
                placeholder="Enter your school name"
              />
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-sm">Preferred Subdomain</span>
              <input
                className="mt-1 h-8  rounded-lg border indent-2.5 border-black border-gray"
                placeholder="Enter your school name"
              />
            </div>
          </div>
          <div className="mt-5">
            <button className="h-12 w-full bg-[#5573EF] text-white-50 rounded-xl">
              Next
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#e1d6a4] h-screen"></div> */}
    </div>
  );
}
