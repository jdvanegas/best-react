import React from "react";
import { toast } from "react-toast";

export const notify = {
  error: (message: string) =>
    toast.error(message, {
      backgroundColor: "#c20a75",
    }),
  success: (message: string) =>
    toast.error(message, {
      backgroundColor: "#30b300",
    }),
};

export const validate = (error: any): JSX.Element[] => {
  const errorMessages: string[] = [];
  const messages: any = {
    required: `Este campo es requerido`,
    minLength: `Este campo no cumple el mínimo de caracteres`,
    pattern: `Este campo no tiene el formato correcto`,
  };

  for (const property in messages) {
    if (error && error.type === property)
      errorMessages.push(messages[property]);
  }

  return errorMessages.map((message) => (
    <span className="form-text text-danger">{message}</span>
  ));
};

export const addLoading = (): void => {
  const main = document.createElement("div");
  const div = document.createElement("div");
  div.classList.add("lds-ripple");
  div.appendChild(document.createElement("div"));
  div.appendChild(document.createElement("div"));
  main.classList.add("loading-background");
  main.appendChild(div);
  document.body.appendChild(main);
};

export const removeLoading = (): void => {
  document.body.querySelector(".loading-background")?.remove();
};
