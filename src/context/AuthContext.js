"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

export const AuthContext =
  createContext();

export default function AuthProvider({
  children,
}) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const savedUser =
      localStorage.getItem("authUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

  }, []);

  const login = (userData) => {

    localStorage.setItem(
      "authUser",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const logout = () => {

    localStorage.removeItem("authUser");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}