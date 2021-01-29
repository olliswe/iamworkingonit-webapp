import { IUser } from "../models/user";
import create from "zustand";

type TSessionStore = {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: any;
  setUser: (input: IUser) => void;
  setAuth: (input: boolean) => void;
  setLoading: (input: boolean) => void;
  setError: (input: any) => void;
};

const useSessionStore = create<TSessionStore>(set => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
  setUser: user => set(_ => ({ user })),
  setAuth: isAuthenticated => set(_ => ({ isAuthenticated })),
  setLoading: loading => set(_ => ({ loading })),
  setError: error => set(_ => ({ error }))
}));

export default useSessionStore;
