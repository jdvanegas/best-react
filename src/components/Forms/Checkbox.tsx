import React from "react";
import { validate } from "../../helpers/functions";

const Input = ({ state, label, register, errors }: any): JSX.Element => {
  const handleChange = (e: any) => {
    state.setValue(e.target.checked);
  };
  return register ? (
    <div className="form-group">
      <div className="form-check">
        <input id={register.name} className="form-check-input" type="checkbox" {...register} />
        <label className="form-check-label" htmlFor={register.name}>
          {label}
        </label>
      </div>
      {validate(errors[register.name])}
    </div>
  ) : (
    <div className="form-group">
      <div className="form-check">
        <input
          id={state.name}
          className="form-check-input"
          checked={state.value}
          onChange={handleChange}
          type="checkbox"
        />
        <label className="form-check-label" htmlFor={state.name}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Input;
