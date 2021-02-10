export enum UserRole{
  Cleint,
  Organisation,
  Admin
}

export interface User {
  id: number;
  name: string;
  username: string;
  role:UserRole;
}
