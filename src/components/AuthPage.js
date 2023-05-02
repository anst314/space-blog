import { useState } from "react";

import SignUpForm from "./SignUpForm";
import LoginForm from "./LogInForm";
//import Logo from "../../components/Logo/Logo";
import styles from "./AuthPage.module.css";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main 
    //className={styles.AuthPage}
    >
      <h3 onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up" : "Sign in"}
      </h3>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;