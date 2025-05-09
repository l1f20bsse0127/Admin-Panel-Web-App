import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;
  const storeTokenInLs = (server_token) => {
    setToken(server_token);
    return localStorage.setItem("token", server_token);
  };

  let isLoggedIN = !!token;
  const LogoutUser = () => {
    setToken("");
    setUser("");
    return localStorage.removeItem("token");
  };

  // JWT Authentication - To get the currently logedin user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data:", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIN,
        storeTokenInLs,
        LogoutUser,
        user,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
//Custom Hook
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  return authContextValue;
};
