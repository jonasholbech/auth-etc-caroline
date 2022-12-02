import { createContext, useEffect, useState } from "react";
import { supabaseClient } from "../supabaseClient";
const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      setAuth(session);
    });
    if (!auth) {
      supabaseClient.auth.getSession().then((response) => {
        if (!response.data.session) return;
        setAuth(response.data.session);
      });
    }
  }, []);

  const login = async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.error(error);
    }
  };
  const value = { auth, login };
  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthProvider, AuthContext };
