import React from 'react';

export default function Navbar(props) {
  return (
    <div className="absolute top-0 left-0 w-full py-4 ">
      <div className="flex justify-between items-baseline w-11/12 mx-auto">
        <h4 className="text-primary-superdark text-lg font-bold">Writely</h4>
        <div className="text-primary-superlight font-semibold flex items-center">
          <p>Login</p>
          <p className="ml-4 bg-secondary rounded-sm px-4 py-1 text-primary-superlight">
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
}
