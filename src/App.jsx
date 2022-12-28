import "./App.css";
import Characters from "./components/Characters";

import Header from "./components/Header";
import { ThemeContext } from "./context/ThemContext";
function App() {
  return (
    <>
      <ThemeContext.Provider value="red">
        <Header />
        <Characters />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
