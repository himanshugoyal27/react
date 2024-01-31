// import { SetStateAction } from "react";

// interface InputProps {
//   Icon?: React.ElementType;
//   placeholder: string;
//   value: any;
//   err?: string;
//   setValue: React.Dispatch<SetStateAction<any>>;
//   showError?: boolean;
//   type?: string;
// }

// export function Input({
//   Icon,
//   value,
//   setValue,
//   placeholder,
//   err,
//   showError,
//   type = "text",
// }: InputProps) {
//   return (
//     <div>
//       <div
//         className={`group bg-white focus-within:border-blue-500 border w-full space-x-4 flex justify-center items-center px-4 jj bd  `}
//       >
//         {Icon && <Icon className="text-xl text-[#2C5FC3] " />}
//         <label className="flex items-center w-full relative cursor-pointer  py-1 ">
//           <input
//             // style={{border:"3px solid red"}}
//             value={value}
//             required
//             type={type}
//             placeholder={placeholder}
//             className="h-10 w-full px-2 bg-white border-none outline-none focus  transition duration-200"
//             onChange={(e) => {
//               setValue(e.target.value);
//             }}
//           />
//         </label>
//       </div>
//       {showError ? <p className=" mt-3 text-red-500 text-sm">{err}</p> : null}
//     </div>
//   );
// }


import React, { useState } from 'react';
import { SetStateAction } from "react";

interface InputProps {
  Icon?: React.ElementType;
  placeholder: string;
  value: any;
  err?: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  showError?: boolean;
  type?: string;
}

export function Input({
  Icon,
  value,
  setValue,
  placeholder,
  err,
  showError,
  type = 'text',
}: InputProps) {
  const isEmail = type === 'email';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    // Add your email validation logic here
    if (isEmail) {
      const isValidEmail = validateEmail(e.target.value);
      // You can set an error state or handle the validation as needed
      // For simplicity, I'm logging the validation result to the console
      console.log('Is valid email:', isValidEmail);
    }
  };

  const validateEmail = (email: string) => {
    // Add your email validation logic here
    // This is a basic example, you might want to use a more robust solution
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <div
        className={`group bg-white focus-within:border-blue-500 border w-full space-x-4 flex justify-center items-center px-4 jj bd  `}
      >
        {Icon && <Icon className="text-xl text-[#2C5FC3] " />}
        <label className="flex items-center w-full relative cursor-pointer  py-1 ">
          <input
            value={value}
            required={isEmail} // Make the field required if it's an email input
            type={type}
            placeholder={placeholder}
            className="h-10 w-full px-2 bg-white border-none outline-none focus  transition duration-200"
            onChange={handleChange}
          />
        </label>
      </div>
      {showError ? <p className="mt-3 text-red-500 text-sm">{err}</p> : null}
    </div>
  );
}
