import { useRef, useState } from "react";

function App() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, i) => {
    const newOtp = [...otp];
    newOtp[i] = value;
    if (value && i < otp.length - 1) {
      inputRefs.current[i + 1].focus();
    }
    setOtp(newOtp);
  };
  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && i > 0 && !otp[i]) {
      const newOtp = [...otp];
      newOtp[i - 1] = "";
      inputRefs.current[i - 1].focus();
      setOtp(newOtp);
    }
  };
  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the 4-digit verification code that was sent to your phone
          number.
        </p>
      </header>
      <form id="otp-form">
        <div className="flex items-center justify-center gap-3">
          {otp.map((digit, i) => (
            <input
              key={i}
              type="text"
              className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              pattern="\d*"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              ref={(ref) => (inputRefs.current[i] = ref)}
              autoFocus={i === 0}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>
        <div className="max-w-[260px] mx-auto mt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
          >
            Verify Account
          </button>
        </div>
      </form>
      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?
        <a
          className="font-medium text-indigo-500 hover:text-indigo-600"
          href="#0"
        >
          Resend
        </a>
      </div>
    </div>
  );
}

export default App;
