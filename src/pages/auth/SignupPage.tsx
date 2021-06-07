import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Checkbox from "../../components/Forms/Checkbox";
import Input from "../../components/Forms/Input";
import { PATTERNS } from "../../helpers/constants";
import { useAuth } from "../../hooks/auth";
import { UserSignup } from "../../models/user";
import "../../styles/pages/signup.scss";

const SignupPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignup>();

  useEffect(() => {
    if (auth.isAuthenticated) history.push("/");
  }, [auth, history]);

  const onSubmit = (data: UserSignup) => {
    auth.signup(data, () => history.push("/"));
  };

  return (
    <div className="container">
      <form
        className="signup-form ms-box shadow"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Únete Micro Shops</h1>
        <p>Regístrate para comprar y vender.</p>
        <div className="row">
          <div className="col-md-6">
            <Input
              options={{ placeholder: "Nombre" }}
              register={register("name", { required: true, pattern: PATTERNS.withSpace })}
              errors={errors}
            />
          </div>
          <div className="col-md-6">
            <Input
              options={{ placeholder: "Apellido" }}
              register={register("lastName", { required: true, pattern: PATTERNS.withSpace })}
              errors={errors}
            />
          </div>
        </div>
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
        <Checkbox
          label="Aceptar terminos y condiciones."
          register={register("terms", { required: true })}
          errors={errors}
        />
        <button className="btn btn-primary btn-lg">Registrarme</button>
      </form>
    </div>
  );
};

export default SignupPage;
