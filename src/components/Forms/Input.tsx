import React from "react";
import { validate } from "../../helpers/functions";

const Input = ({ state, options: { type, placeholder }, register, errors }: any): JSX.Element => {
  // const handleChange = (e: any) => {
  //   state.setValue(e.target.value);
  // };

  return register ? (
    <div className="form-group">
      <input
        placeholder={placeholder}
        className="form-control form-control-lg"
        type={type || "text"}
        {...register}
      />
      {validate(errors[register.name])}
    </div>
  ) : (
    <></>
  );
};

export default Input;
