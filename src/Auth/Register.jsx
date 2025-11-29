import { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      setUser(userCredential.user);
      toast.success("Registration Successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      toast.success("Google Login Successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <form onSubmit={handleRegister} className="bg-white p-10 rounded-xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Register</h2>

        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="input input-bordered w-full mb-4" required />
        <input type="text" placeholder="Photo URL" value={photoURL} onChange={(e)=>setPhotoURL(e.target.value)} className="input input-bordered w-full mb-4" />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input input-bordered w-full mb-4" required />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered w-full mb-4" required />

        <button type="submit" className="btn btn-primary w-full mb-4">Register</button>

        <div className="text-center mb-2 text-gray-400">OR</div>

        <button type="button" onClick={handleGoogleRegister} className="btn btn-outline w-full">Register with Google</button>
      </form>
    </div>
  );
};

export default Register;
