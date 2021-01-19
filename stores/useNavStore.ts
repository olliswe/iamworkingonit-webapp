import create from "zustand";

type TNavStore = {
  pageTitle: string;
  setPage: (pageTitle: string) => void;
};

const useNavStore = create<TNavStore>((set) => ({
  pageTitle: "",
  setPage: (pageTitle) => set((state) => ({ pageTitle })),
}));

export default useNavStore;
