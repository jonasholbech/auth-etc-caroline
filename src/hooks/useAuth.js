import { useContext } from "react";
import { AuthContext } from "../context/auth";

const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    console.error("This does not work");
    return;
  }

  return value;
};

export { useAuth };
