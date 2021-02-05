import { TeamQuery, UserQuery } from "apollo/codegen";

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];

export type TUser = UserQuery["user"];

export type TTeam = Exclude<TeamQuery["team"], null | undefined>;
export type TTeamUser = ArrayElement<Exclude<TTeam["users"], null | undefined>>;
export type TTeamUserStatusUpdate = ArrayElement<
  Exclude<TTeamUser["statusupdates"], null | undefined>
>;
