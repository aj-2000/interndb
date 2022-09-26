import { createContext, ReactNode, useContext, useState } from "react";

type favoritesState = {
  onlyFavorites: boolean;
  userFavorites: any[];
};

type favoritesContextType = {
  favoritesState: favoritesState;
  handleFavorites: (newFavoritesState: any) => void;
};

const favoriteContextDefaultValues: favoritesContextType = {
  favoritesState: { onlyFavorites: false, userFavorites: [] },
  handleFavorites: (newFavoritesState: any) => {},
};

const FavoritesContext = createContext<favoritesContextType>(
  favoriteContextDefaultValues
);

export default function useFavorites() {
  return useContext(FavoritesContext);
}

type Props = {
  children: ReactNode;
};

export function FavoritesProvider({ children }: Props) {
  const [favoritesState, setFavoritesState] = useState<any>({
    onlyFavorites: false,
    userFavorites: [],
  });
  const handleFavorites = (newFavoriteState: any) => {
    setFavoritesState({ ...favoritesState, ...newFavoriteState });
  };
  const value = {
    favoritesState,
    handleFavorites,
  };

  return (
    <>
      <FavoritesContext.Provider value={value}>
        {children}
      </FavoritesContext.Provider>
    </>
  );
}
