import { User } from "apollo/codegen";

export type TUser = Pick<
  User,
  | "id"
  | "firstName"
  | "lastName"
  | "email"
  | "avatar"
  | "createdAt"
  | "updatedAt"
>;
