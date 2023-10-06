"use client"
// @ts-nocheck

import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
	  <div className="lg:w-2/5 md:w-1/2 w-full">
		<form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
			<h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Create an account</h1>
			<div>
				<label className="text-gray-800 font-semibold block my-3 text-md" id="username">Username</label>
				<input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" />
      </div>
				<div>
					<label className="text-gray-800 font-semibold block my-3 text-md" id="email">Email</label>
					<input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
      </div>
					<div>
						<label className="text-gray-800 font-semibold block my-3 text-md" id="password">Password</label>
						<input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
      </div>
						<div>
							<label className="text-gray-800 font-semibold block my-3 text-md" id="confirm">Confirm password</label>
							<input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="confirm password" />
      </div>
							<button type="submit"  className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
							<button type="submit" className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Login</button>
		</form>
	</div>
</div>
  );
};

export default SignupPage;
