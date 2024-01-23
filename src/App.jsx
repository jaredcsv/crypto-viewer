import CoinsTable from "./components/CoinsTable";
import MenuBar from "./components/MenuBar";
import MenuBarMobile from "./components/MenuBarMobile";

import "./App.css";


function App() {
  return (
    <>
      <MenuBarMobile />
      <MenuBar />
      <CoinsTable />
    </>
  );
}

export default App;
