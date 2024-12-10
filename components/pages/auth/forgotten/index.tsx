import { useRef, useState } from "react";

export default function ForgotPassword() {
  const [inputs, setInputs] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>(Array(5).fill(""));

  // Function to handle input change
  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    // Move focus to the next input field
    if (
      value !== "" &&
      index < inputs.length - 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <div className="h-screen flex justify-center sm:items-center bg-white">
      <div className="rounded-3xl w-full max-w-md border-color g-gray-200 p-10 sm:border sm:border-solid sm:border-[#EDEFF5]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Forgot Password?</h1>
          <p>We sent an OTP code to your email address</p>
        </div>
        <div className="flex flex-col mt-6 gap-5">
          <div className="flex gap-2 justify-evenly">
            {inputs.map((value, index) => (
              <input
                className="rounded-xl h-14 w-14 border border-solid text-center border-black text-black-100 text-2xl"
                key={index}
                type="text"
                maxLength={1}
                size={1}
                pattern="[0-9]"
                value={value}
                onChange={(event) => handleChange(index, event.target.value)}
                required
                ref={(el) => (inputRefs.current[index] = el)} // Store input reference
              />
            ))}
          </div>
          {/* <h2>Hello mate</h2> */}
          <div>
            <button className="rounded-xl w-full text-[white] bg-[#5573EF] p-3">
              Continue
            </button>
          </div>
          <div className="text-center">
            <p>
              Resent code in <span className="text-[#5573EF]">3:50</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
