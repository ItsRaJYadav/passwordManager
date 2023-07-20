import React, { useState } from 'react';
import { toast } from "react-hot-toast";

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const generatePassword = () => {
    let charset = '';
    let generatedPassword = '';

    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecialChars) charset += '!@#$%^&*()';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    calculatePasswordStrength(generatedPassword);
  };

  const calculatePasswordStrength = (password) => {
    let strength = '';

    if (password.length < 12) {
      strength = 'Weak';
    } else if (password.length < 20) {
      strength = 'Moderate';
    } else {
      strength = 'Strong';
    }

    setPasswordStrength(strength);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
    toast.success('Password Copied Successfully')
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center mt-14 ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>

        <div className="mb-4">
          <label className="block mb-2">Password Length:</label>
          <input
            type="number"
            className="border-gray-300 border p-2 w-full"
            min="1"
            max="30"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            Include Uppercase Letters
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            Include Lowercase Letters
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Include Numbers
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={includeSpecialChars}
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            />
            Include Special Characters
          </label>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4 w-full"
          onClick={generatePassword}
        >
          Generate Password
        </button>

        {password && (
          <div className="mb-4 flex items-center">
            <label className="block mr-2">Generated Password:</label>
            <input
              type="text"
              className="border-gray-300 border p-2 mr-2 w-full"
              value={password}
              readOnly
            />
            <button
              className={`bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition-opacity ${
                isCopied ? 'opacity-40' : ''
              }`}
              onClick={copyPassword}
              disabled={isCopied}
            >
              Copy
            </button>
          </div>
        )}

        {passwordStrength && (
          <div className="text-center">
            <span
              className={`${
                passwordStrength === 'Weak'
                  ? 'text-red-500'
                  : passwordStrength === 'Moderate'
                  ? 'text-yellow-500'
                  : 'text-green-500'
              } font-semibold`}
            >
              Password Strength: {passwordStrength}
            </span>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default PasswordGenerator;
