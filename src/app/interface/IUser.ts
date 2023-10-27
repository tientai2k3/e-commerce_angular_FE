export interface Singup {
  id?: number;
  user_name?: string;
  password?: string;
  email?: string;
  phone_number?: string;
}

export interface Singin {
  user_name?: string;
  password?: string;
}

export interface IUser {
  id?:number;
  userName?: string;
  password?: string;
  email?: string;
  phone_Number?: string;
}
