import React from 'react';
import Image from 'next/image';

const JoinUsPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF]">
      <div className="bg-[#FFFFFF] p-8 w-full max-w-md">

        <div className="flex justify-center mb-4">
          <Image src="/vector.png" alt="Nike Logo" width={100} height={100} />
        </div>

        <h1 className="text-2xl font-bold text-center mb-6">BECOME A NIKE MEMBER</h1>
        <p className="text-center mb-6 text-[#8D8D8D]">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>

        <form>
          <div className="mb-4">
            <input type="email" id="email" placeholder='Email' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          
          <div className="mb-4">
            <input type="password" id="password" placeholder='Password' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>

          <div className="mb-4">
            <input type="text" id="firstName" placeholder='First Name' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>

          <div className="mb-4">
            <input type="text" id="lastName" placeholder='Last Name' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>

          <div className="mb-4">
            <input type="date" id="dob" placeholder='Birthday' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>

          <p className='text-[#8D8D8D] text-[11px]'>Get a Nike Member Reward every year on your Birthday.</p>

          <div className="mb-4">
            <input type='text' placeholder='India' />
            <select id="country" className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="india">India</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4 flex justify-center items-center space-x-8">
            <div className='w-[153.89px] h-[43px] border border-[#153.89] mx-4 text-center pt-2 text-[#8D8D8D]'>Male</div>
            <div className='w-[153.89px] h-[43px] border border-[#153.89] mx-4 text-center pt-2 text-[#8D8D8D]'>Female</div>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Sign up for emails to get updates from Nike on products, offers, and your Member benefits</span>
            </label>
          </div>

          <div className="mb-4">
            <p className="text-[#8D8D8D] text-sm text-center">
              By creating an account, you agree to Nike <a href="#" className=" hover:underline">Privacy Policy</a> and <a href="#" className="hover:underline">Terms of Use</a>.
            </p>
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">JOIN US</button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-[#8D8D8D] text-sm">Already a Member? <a href="/Login" className=" hover:underline">Sign In.</a></p>
        </div>

      </div>
    </div>
  );
};

export default JoinUsPage;
