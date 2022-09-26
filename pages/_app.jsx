import { FiltersProvider } from "context/FiltersContext";
import { SearchProvider } from "context/SearchContext";
import { FavoritesProvider } from "context/FavoritesContext";
import "@/styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <FavoritesProvider>
        <SearchProvider>
          <FiltersProvider>
            <Component {...pageProps} />
          </FiltersProvider>
        </SearchProvider>
      </FavoritesProvider>
    </>
  );
};

export default App;
