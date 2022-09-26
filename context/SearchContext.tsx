import { createContext, ReactNode, useContext, useState } from "react";

type searchState = {
  searchString: string;
};

type searchContextType = {
  searchState: searchState;
  handleSearch: (newSearchState: any) => void;
};

const searchContextDefaultValues: searchContextType = {
  searchState: {
    searchString: "",
  },
  handleSearch: (newSearchState: any) => {},
};

const SearchContext = createContext<searchContextType>(
  searchContextDefaultValues
);

export default function useSearchString() {
  return useContext(SearchContext);
}

type Props = {
  children: ReactNode;
};

export function SearchProvider({ children }: Props) {
  const [searchState, setSearchState] = useState<searchState>({
    searchString: "",
  });
  const handleSearch = (newSearchState: any) => {
    setSearchState({ ...searchState, ...newSearchState });
  };
  const value = {
    searchState,
    handleSearch,
  };

  return (
    <>
      <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    </>
  );
}
