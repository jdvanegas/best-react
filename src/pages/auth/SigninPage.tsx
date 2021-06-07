import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { PATTERNS } from "../../helpers/constants";
import { useAuth } from "../../hooks/auth";
import { UserSignin } from "../../models/user";
import { Link } from "react-router-dom";
import Input from "../../components/Forms/Input";

import "../../styles/pages/signin.scss";

const SinginPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const { redirect } = useParams<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignin>();

  useEffect(() => {
    if (auth.isAuthenticated)
      redirect ? history.push(decodeURIComponent(redirect)) : history.push("/");
  }, [auth, redirect, history]);

  const onSubmit = ({ email, password }: UserSignin) => {
    auth.signin(email, password, () =>
      redirect ? history.push(decodeURIComponent(redirect)) : history.push("/")
    );
  };

  return (
    <div className="container">
      <form className="signin-form ms-box shadow" onSubmit={handleSubmit(onSubmit)}>
        <h1>¡Hola!</h1>
        <p>Inicie sesión en su cuenta aquí.</p>
        <Input
          options={{ type: "email", placeholder: "Correo electrónico" }}
          register={register("email", { required: true, pattern: PATTERNS.email })}
          errors={errors}
        />
        <Input
          options={{ type: "password", placeholder: "Contraseña" }}
          register={register("password", { required: true, minLength: 8 })}
          errors={errors}
        />
        <button className="btn btn-primary btn-lg btn-block">Iniciar sesión</button>
        <div className="row mt-3">
          <div className="col-md-6">
            <Link to="/recuperar-clave">¿Olvidaste tu contraseña?</Link>
          </div>
          <div className="col-md-6">
            <Link to="/registrarse">Crear una cuenta</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SinginPage;
