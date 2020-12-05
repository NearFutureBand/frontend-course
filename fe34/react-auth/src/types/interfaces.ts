export interface IUserShortInfo {
  index: number;
  picture: string;
  name: {
    first: string,
    last: string,
  }
}

export interface IUser extends IUserShortInfo {
  _id: string;
  guid: string;
  isActive: boolean;
  balance: string;
  age: number;
  eyeColor: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: string;
  longitude: string;
  tags: string[];
  range: number[];
  friends: Array<IUserShortInfo>;
  greeting: string;
  favoriteFruit: string;
  token: string;
}

export interface IAuthState {
  phone: string;
  password: string;
  user: object | null;
  errors: string;
  loading: boolean;
}

export interface IUsersState {
  users: IUserShortInfo[];
}

export interface IStore {
  auth: IAuthState;
  users: IUsersState;
}