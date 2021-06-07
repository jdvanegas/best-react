export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  roleName: string;
  token: string;
}
export interface UserSignin {
  email: string;
  password: string;
}
export interface UserSignup {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  terms: string;
  password: string;
}
