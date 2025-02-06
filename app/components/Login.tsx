import React from 'react';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF]">
      <div className="bg-[#FFFFFF] p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <Image src="/vector.png" alt="Nike Logo" width={100} height={100} />
        </div>
        <h1 className="text-3xl tracking-wide font-bold text-center mb-6">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
        <form>
          <div className="mb-4">
            <input type="email" id="email" placeholder='Email' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-4">
            <input type="password" id="password" placeholder='Password' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-[#BCBCBC] text-sm">Keep me signed in</span>
            </label>
            <a href="#" className="hover:underline text-[#BCBCBC] text-sm">Forgotten your password?</a>
          </div>
          <div className="mb-4">
            <p className="text-[#8D8D8D] text-sm text-center">
              By logging in, you agree to Nike Privacy Policy and Terms of Use
            </p>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">SIGN IN</button>
        </form>
        <div className="mt-4 text-center text-sm">
          <p className="text-[#8D8D8D]">Not a Member? <a href="/JoinUs" className="text-[#111111] bold hover:underline">Join Us.</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
