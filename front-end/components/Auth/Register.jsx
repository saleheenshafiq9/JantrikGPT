import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here
    console.log('Signup form submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-lg font-semibold" htmlFor="name">Name:</label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-lg font-semibold" htmlFor="email">Email:</label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-lg font-semibold" htmlFor="password">Password:</label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
