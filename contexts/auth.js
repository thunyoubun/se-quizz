import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";
import { JWTPayload } from "../types/JWTPayload";

//api here is an axios instance which has the baseURL set according to the env.
/* import api from "../services/Api"; */

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const { code } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  const callGetCookie = () => {
    const token = getCookie("cmu-oauth-example-token", { req, res });
  };
  async function loadUserFromCookies() {
    /* callGetCookie(); */
    if (token) {
      console.log("Got a token in the cookies, let's see if it is valid");
      try {
        const resp = await axios.get(`/api/user`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (resp.data.ok) {
          setUser({ ...resp.data.user });
          setLoading(false);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log(err.response.data.messasge);
      }
    } else {
      setUser(null);
      setLoading(true);
    }
  }

  useEffect(() => {
    loadUserFromCookies();
  }, [code]);

  const login = async () => {
    const { data: token } = await api.post("auth/signIn");
    if (token) {
      console.log("Got token");
      Cookies.set("token", token, { expires: 60 });
      api.defaults.headers.Authorization = `Bearer ${token.token}`;
      const { data: user } = await api.get("users/me");
      setUser(user);
      console.log("Got user", user);
    }
  };

  function logout() {
    //Call sign out api without caring what is the result
    //It will fail only in case of client cannot connect to server
    //This is left as an exercise for you. Good luck.
    axios.post("/api/auth/signOut").finally(() => {
      setUser(null);
      router.push("/");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        loading,
        logout,
        setToken,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const verifyAuth = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return res.json({
      token: token,
    });
  } catch (error) {
    return res.status(401).json({ ok: false, message: "Invalid token" });
  }
};
