// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export default function Login() {
//   const { login, loginWithGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       toast.success("Login successful!");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await loginWithGoogle();
//       toast.success("Logged in with Google!");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded"/>
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-2">Login</button>
//         <button type="button" onClick={handleGoogleLogin} className="w-full bg-red-500 text-white p-2 rounded">Login with Google</button>
//       </form>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import toast from "react-hot-toast";

// export default function Login() {
//   const { login, loginWithGoogle } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       toast.success("Login successful!");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 shadow-lg rounded bg-white">
//       <h1 className="text-2xl font-bold mb-4">Login</h1>
//       <form onSubmit={handleLogin} className="flex flex-col gap-3">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border px-3 py-2 rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border px-3 py-2 rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
//           Login
//         </button>
//       </form>
//       <button
//         onClick={loginWithGoogle}
//         className="mt-3 w-full bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
//       >
//         Login with Google
//       </button>
//     </div>
//   );
// }
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3 hover:bg-blue-600 transition"
        >
          Login
        </button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
        >
          Login with Google
        </button>
      </form>
    </div>
  );
}
