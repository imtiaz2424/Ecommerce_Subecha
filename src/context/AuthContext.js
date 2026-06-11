"use client";

import {createContext, useState, useEffect, } from "react";

export const AuthContext =
createContext();

export default function AuthProvider({
children,
}) {
const [isLoggedIn, setIsLoggedIn] =
useState(false);

useEffect(() => {
const token =
localStorage.getItem(
"access_token"
);


setIsLoggedIn(!!token);


}, []);

const login = () => {
setIsLoggedIn(true);
};

const logout = () => {
localStorage.removeItem(
"access_token"
);


localStorage.removeItem(
  "refresh_token"
);

localStorage.removeItem(
  "user_id"
);

setIsLoggedIn(false);


};

return (
<AuthContext.Provider
value={{ isLoggedIn, login, logout, }}
>
{children}
</AuthContext.Provider>
);
}
