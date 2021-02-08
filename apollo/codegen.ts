import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Updatetype = {
  __typename?: 'Updatetype';
  /** Id of Update Type */
  id: Scalars['String'];
  /** Content of Update Type */
  type: Scalars['String'];
  statusupdates: Array<Statusupdate>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type Statusupdate = {
  __typename?: 'Statusupdate';
  /** Id of Status Update */
  id: Scalars['String'];
  /** Content of Status Update */
  status: Scalars['String'];
  updatetype: Updatetype;
  user?: Maybe<User>;
  team?: Maybe<Team>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Teamsecret = {
  __typename?: 'Teamsecret';
  /** id */
  id: Scalars['String'];
  secret: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Team = {
  __typename?: 'Team';
  /** Id of team */
  id: Scalars['String'];
  /** Avatar of Team (URL) */
  avatar?: Maybe<Scalars['String']>;
  /** Name of team */
  teamName: Scalars['String'];
  /** Latest Statusupdates of a Team */
  statusupdates?: Maybe<Array<Statusupdate>>;
  /** Users of a Team */
  users?: Maybe<Array<User>>;
  secret?: Maybe<Teamsecret>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  teamsecret: Teamsecret;
};


export type TeamStatusupdatesArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  /** id */
  id: Scalars['String'];
  /** Avatar of User (URL) */
  avatar?: Maybe<Scalars['String']>;
  /** First name of user */
  firstName: Scalars['String'];
  /** Last name of user */
  lastName: Scalars['String'];
  /** Email of user */
  email: Scalars['String'];
  /** Password of a user */
  password: Scalars['String'];
  team?: Maybe<Team>;
  statusupdates?: Maybe<Array<Statusupdate>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type UserStatusupdatesArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  accessToken: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user: User;
  team: Team;
};


export type QueryTeamArgs = {
  queryTeamInput?: Maybe<QueryTeamInput>;
};

export type QueryTeamInput = {
  limit: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: User;
  login: LoginOutput;
  createUser: User;
  joinTeam: User;
  createStatusupdate: Statusupdate;
  createTeam: Team;
  generateSecret: Teamsecret;
};


export type MutationSignupArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationJoinTeamArgs = {
  joinTeamInput: JoinTeamInput;
};


export type MutationCreateStatusupdateArgs = {
  createStatusupdateInput: CreateStatusupdateInput;
};


export type MutationCreateTeamArgs = {
  createTeamInput: CreateTeamInput;
};

export type CreateUserInput = {
  /** User First Name */
  firstName: Scalars['String'];
  /** User Last Name */
  lastName: Scalars['String'];
  /** User Email */
  email: Scalars['String'];
  /** User Password */
  password: Scalars['String'];
};

export type LoginInput = {
  /** User Email */
  email: Scalars['String'];
  /** User Password */
  password: Scalars['String'];
};

export type JoinTeamInput = {
  /** Current Secret of Team */
  secret: Scalars['String'];
};

export type CreateStatusupdateInput = {
  /** Content of Status Update */
  status: Scalars['String'];
};

export type CreateTeamInput = {
  /** Team Name */
  teamName: Scalars['String'];
};

export type CreateStatusupdateMutationVariables = Exact<{
  status: Scalars['String'];
}>;


export type CreateStatusupdateMutation = (
  { __typename?: 'Mutation' }
  & { createStatusupdate: (
    { __typename?: 'Statusupdate' }
    & Pick<Statusupdate, 'id' | 'status' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
    )>, team?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'teamName'>
    )> }
  ) }
);

export type CreateTeamMutationVariables = Exact<{
  teamName: Scalars['String'];
}>;


export type CreateTeamMutation = (
  { __typename?: 'Mutation' }
  & { createTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'teamName'>
  ) }
);

export type GenerateSecretMutationVariables = Exact<{ [key: string]: never; }>;


export type GenerateSecretMutation = (
  { __typename?: 'Mutation' }
  & { generateSecret: (
    { __typename?: 'Teamsecret' }
    & Pick<Teamsecret, 'secret'>
  ) }
);

export type JoinTeamMutationVariables = Exact<{
  secret: Scalars['String'];
}>;


export type JoinTeamMutation = (
  { __typename?: 'Mutation' }
  & { joinTeam: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
    & { team?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'teamName'>
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginOutput' }
    & Pick<LoginOutput, 'accessToken'>
  ) }
);

export type SignupMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);

export type TeamQueryVariables = Exact<{
  statusUpdateLimit?: Scalars['Int'];
}>;


export type TeamQuery = (
  { __typename?: 'Query' }
  & { team: (
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'teamName'>
    & { secret?: Maybe<(
      { __typename?: 'Teamsecret' }
      & Pick<Teamsecret, 'id' | 'secret'>
    )>, statusupdates?: Maybe<Array<(
      { __typename?: 'Statusupdate' }
      & Pick<Statusupdate, 'status' | 'createdAt' | 'id'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'email' | 'firstName' | 'lastName'>
      )> }
    )>>, users?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
      & { statusupdates?: Maybe<Array<(
        { __typename?: 'Statusupdate' }
        & Pick<Statusupdate, 'id' | 'createdAt' | 'status'>
        & { team?: Maybe<(
          { __typename?: 'Team' }
          & Pick<Team, 'teamName'>
        )> }
      )>> }
    )>> }
  ) }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
    & { team?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'teamName'>
    )> }
  ) }
);


export const CreateStatusupdateDocument = gql`
    mutation CreateStatusupdate($status: String!) {
  createStatusupdate(createStatusupdateInput: {status: $status}) {
    id
    status
    createdAt
    updatedAt
    user {
      id
      email
      firstName
      lastName
    }
    team {
      id
      teamName
    }
  }
}
    `;
export type CreateStatusupdateMutationFn = Apollo.MutationFunction<CreateStatusupdateMutation, CreateStatusupdateMutationVariables>;

/**
 * __useCreateStatusupdateMutation__
 *
 * To run a mutation, you first call `useCreateStatusupdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStatusupdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStatusupdateMutation, { data, loading, error }] = useCreateStatusupdateMutation({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCreateStatusupdateMutation(baseOptions?: Apollo.MutationHookOptions<CreateStatusupdateMutation, CreateStatusupdateMutationVariables>) {
        return Apollo.useMutation<CreateStatusupdateMutation, CreateStatusupdateMutationVariables>(CreateStatusupdateDocument, baseOptions);
      }
export type CreateStatusupdateMutationHookResult = ReturnType<typeof useCreateStatusupdateMutation>;
export type CreateStatusupdateMutationResult = Apollo.MutationResult<CreateStatusupdateMutation>;
export type CreateStatusupdateMutationOptions = Apollo.BaseMutationOptions<CreateStatusupdateMutation, CreateStatusupdateMutationVariables>;
export const CreateTeamDocument = gql`
    mutation createTeam($teamName: String!) {
  createTeam(createTeamInput: {teamName: $teamName}) {
    id
    teamName
  }
}
    `;
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      teamName: // value for 'teamName'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, baseOptions);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;
export const GenerateSecretDocument = gql`
    mutation GenerateSecret {
  generateSecret {
    secret
  }
}
    `;
export type GenerateSecretMutationFn = Apollo.MutationFunction<GenerateSecretMutation, GenerateSecretMutationVariables>;

/**
 * __useGenerateSecretMutation__
 *
 * To run a mutation, you first call `useGenerateSecretMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSecretMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateSecretMutation, { data, loading, error }] = useGenerateSecretMutation({
 *   variables: {
 *   },
 * });
 */
export function useGenerateSecretMutation(baseOptions?: Apollo.MutationHookOptions<GenerateSecretMutation, GenerateSecretMutationVariables>) {
        return Apollo.useMutation<GenerateSecretMutation, GenerateSecretMutationVariables>(GenerateSecretDocument, baseOptions);
      }
export type GenerateSecretMutationHookResult = ReturnType<typeof useGenerateSecretMutation>;
export type GenerateSecretMutationResult = Apollo.MutationResult<GenerateSecretMutation>;
export type GenerateSecretMutationOptions = Apollo.BaseMutationOptions<GenerateSecretMutation, GenerateSecretMutationVariables>;
export const JoinTeamDocument = gql`
    mutation JoinTeam($secret: String!) {
  joinTeam(joinTeamInput: {secret: $secret}) {
    id
    firstName
    lastName
    email
    team {
      id
      teamName
    }
  }
}
    `;
export type JoinTeamMutationFn = Apollo.MutationFunction<JoinTeamMutation, JoinTeamMutationVariables>;

/**
 * __useJoinTeamMutation__
 *
 * To run a mutation, you first call `useJoinTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinTeamMutation, { data, loading, error }] = useJoinTeamMutation({
 *   variables: {
 *      secret: // value for 'secret'
 *   },
 * });
 */
export function useJoinTeamMutation(baseOptions?: Apollo.MutationHookOptions<JoinTeamMutation, JoinTeamMutationVariables>) {
        return Apollo.useMutation<JoinTeamMutation, JoinTeamMutationVariables>(JoinTeamDocument, baseOptions);
      }
export type JoinTeamMutationHookResult = ReturnType<typeof useJoinTeamMutation>;
export type JoinTeamMutationResult = Apollo.MutationResult<JoinTeamMutation>;
export type JoinTeamMutationOptions = Apollo.BaseMutationOptions<JoinTeamMutation, JoinTeamMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password}) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  signup(
    createUserInput: {firstName: $firstName, lastName: $lastName, email: $email, password: $password}
  ) {
    id
    email
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const TeamDocument = gql`
    query Team($statusUpdateLimit: Int! = 100) {
  team {
    id
    teamName
    secret {
      id
      secret
    }
    statusupdates(limit: $statusUpdateLimit) {
      status
      createdAt
      id
      user {
        email
        firstName
        lastName
      }
    }
    users {
      id
      email
      firstName
      lastName
      statusupdates(limit: 1) {
        id
        createdAt
        status
        team {
          teamName
        }
      }
    }
  }
}
    `;

/**
 * __useTeamQuery__
 *
 * To run a query within a React component, call `useTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamQuery({
 *   variables: {
 *      statusUpdateLimit: // value for 'statusUpdateLimit'
 *   },
 * });
 */
export function useTeamQuery(baseOptions?: Apollo.QueryHookOptions<TeamQuery, TeamQueryVariables>) {
        return Apollo.useQuery<TeamQuery, TeamQueryVariables>(TeamDocument, baseOptions);
      }
export function useTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamQuery, TeamQueryVariables>) {
          return Apollo.useLazyQuery<TeamQuery, TeamQueryVariables>(TeamDocument, baseOptions);
        }
export type TeamQueryHookResult = ReturnType<typeof useTeamQuery>;
export type TeamLazyQueryHookResult = ReturnType<typeof useTeamLazyQuery>;
export type TeamQueryResult = Apollo.QueryResult<TeamQuery, TeamQueryVariables>;
export const UserDocument = gql`
    query User {
  user {
    id
    firstName
    lastName
    email
    avatar
    createdAt
    updatedAt
    team {
      id
      teamName
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;