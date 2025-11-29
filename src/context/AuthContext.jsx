import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken
} from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const un = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const id = await getIdToken(u, /* forceRefresh */ true);
        setToken(id);
        // optionally persist token to localStorage
        localStorage.setItem("homehero_token", id);
      } else {
        setToken(null);
        localStorage.removeItem("homehero_token");
      }
    });
    return () => un();
  }, []);

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
