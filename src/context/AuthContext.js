"use client";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

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


if (token) {
  setIsLoggedIn(true);
}


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

setIsLoggedIn(false);


};

return (
<AuthContext.Provider
value={{
isLoggedIn,
login,
logout,
}}
>
{children}
</AuthContext.Provider>
);
}
