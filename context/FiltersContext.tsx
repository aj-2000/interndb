import { createContext, ReactNode, useContext, useState } from "react";

type filtersState = {
  filterByMode: string;
  filterByDifficulty: string;
  filterByExperience: string;
  filterByProgram: string;
  filterByInternType: string;
  filterByBranch: string;
  filterByYear: string;
  filterByCompany: string;
  filterByVerdict: string;
};

type filtersContextType = {
  filtersState: filtersState;
  handleFilters: (newFiltersState: any) => void;
};

const filtersContextDefaultValues: filtersContextType = {
  filtersState: {
    filterByMode: "",
    filterByDifficulty: "",
    filterByExperience: "",
    filterByProgram: "",
    filterByInternType: "",
    filterByBranch: "",
    filterByYear: "",
    filterByCompany: "",
    filterByVerdict: "",
  },
  handleFilters: (newFiltersState: any) => {},
};

const FiltersContext = createContext<filtersContextType>(
  filtersContextDefaultValues
);

export function useFilters() {
  return useContext(FiltersContext);
}

type Props = {
  children: ReactNode;
};

export function FiltersProvider({ children }: Props) {
  const [filtersState, setFiltersState] = useState<filtersState>({
    filterByMode: "",
    filterByDifficulty: "",
    filterByExperience: "",
    filterByProgram: "",
    filterByInternType: "",
    filterByBranch: "",
    filterByYear: "",
    filterByCompany: "",
    filterByVerdict: "",
  });
  const handleFilters = (newFiltersState: any) => {
    console.log("handleFilters");
    setFiltersState({ ...filtersState, ...newFiltersState });
  };
  const value = {
    filtersState,
    handleFilters,
  };

  return (
    <>
      <FiltersContext.Provider value={value}>
        {children}
      </FiltersContext.Provider>
    </>
  );
}
