import React from "react";
import { useProvideAuth } from "../../hooks/provide-auth";
import { AuthContext } from "../../hooks/auth";

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
