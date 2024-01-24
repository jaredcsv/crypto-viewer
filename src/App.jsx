import CoinsTable from "./components/CoinsTable";
import MenuBar from "./components/MenuBar";
import MenuBarMobile from "./components/MenuBarMobile";
import "./App.css";
import HomeBanner from "./components/HomeBanner";

function App() {
  return (
    <>
      <MenuBarMobile />
      <HomeBanner />
      <MenuBar />
      <CoinsTable />
    </>
  );
}

export default App;
