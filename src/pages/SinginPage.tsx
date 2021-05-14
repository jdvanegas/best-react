import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useAuth } from "../hooks/auth";

const SinginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = useAuth();
  const history = useHistory();
  const { redirect } = useParams<any>();

  const handleSubmit = (e: React.MouseEvent) => {
    auth.signin(email, password, () =>
      redirect ? history.push(decodeURIComponent(redirect)) : history.push("/")
    );
    e.preventDefault();
  };

  return (
    <div className="container">
      <form>
        <input className="form-control" type="email" />
        <input className="form-control" type="password" />
        <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default SinginPage;
