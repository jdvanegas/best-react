import { useState } from "react";
import { GlobalContent, Nullable } from "../models/global";
import { User } from "../models/user";

export const useProvideAuth = (): GlobalContent => {
  const [user, setUser] = useState<Nullable<User>>(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email: string, password: string, cb?: () => void) => {
    setUser({ id: "1", name: "Usuario", lastName: "Logeado", email: email });
    if (cb) cb();
  };

  const signup = (user: User): User => {
    return user;
  };

  const signout = () => {
    return setUser(null);
  };

  const sendPasswordResetEmail = (email: string) => {
    return;
  };

  const confirmPasswordReset = (code: string, password: string): boolean => {
    return true;
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  // useEffect(() => {
  // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     setUser(user);
  //   } else {
  //     setUser(null);
  //   }
  // });
  // // Cleanup subscription on unmount
  // return () => unsubscribe();
  // }, []);

  // Return the user object and auth methods
  return {
    user,
    isAuthenticated: user !== null,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
};
