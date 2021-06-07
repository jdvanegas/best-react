export const ENDPOINT = "https://localhost:44373/";

export const PATTERNS: any = {
  /* Numbers */
  whole: /^\d+$/,
  decimal: /^\d*\.\d+$/,
  wholeDecimal: /^\d*(\.\d+)?$/,
  real: /^-?\d*(\.\d+)?$/,

  /* Alphanumeric */
  withoutSpace: /^[a-zA-Z0-9]*$/,
  withSpace: /^[a-zA-Z0-9 ]*$/,

  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  username: /^[a-z0-9_-]{3,16}$/,
  email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
  phone:
    /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. \\/]?)?((?:\(?\d{1,}\)?[-. \\/]?){0,})(?:[-. \\/]?(?:#|ext\.?|extension|x)[-. \\/]?(\d+))?$/,
  // password:
  // /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
};
