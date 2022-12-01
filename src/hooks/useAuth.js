import { AuthContext } from "../context/auth";

const useAuth = () => {
  const value = React.useContext(AuthContext);

  if (!value) {
    console.error("This does not work");
    return;
  }

  return value;
};

export { useAuth };
