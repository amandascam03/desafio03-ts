import { createContext, useState, useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import { changeLocalStorage } from "../services/storage";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  authLogin: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const authLogin = (user: User) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    changeLocalStorage({ login: false });
    setUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, authLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
