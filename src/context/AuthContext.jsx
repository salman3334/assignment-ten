import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Named export
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const id = await getIdToken(u, true);
        setToken(id);
        localStorage.setItem("homehero_token", id);
      } else {
        setToken(null);
        localStorage.removeItem("homehero_token");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const register = (name, email, password, photoURL) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => updateProfile(auth.currentUser, { displayName: name, photoURL }));

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, token, register, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

