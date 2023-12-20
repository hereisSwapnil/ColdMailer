import React from "react";

const Login = () => {
  return (
    <>
      <div class="container mx-auto p-8 bg-white rounded shadow-md flex justify-center flex-col items-center w-fit-content">
        <h2 class="text-2xl font-bold mb-4">Login with Google</h2>
        <button
          id="loginButton"
          class="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Login;
