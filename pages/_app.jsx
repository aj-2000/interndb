
import { FiltersProvider } from "context/FiltersContext";
import "@/styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <FiltersProvider>
        <Component {...pageProps} />
      </FiltersProvider>
    </>
  );
};

export default App;
