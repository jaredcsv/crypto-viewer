import CoinsTable from "./components/CoinsTable";
import MenuBar from "./components/MenuBar";
import MenuBarMobile from "./components/MenuBarMobile";
import "./App.css";
import HomeBanner from "./components/HomeBanner";

function App() {
  return (
    <>
      <MenuBarMobile />
      <MenuBar />
      <HomeBanner />
      <CoinsTable />
    </>
  );
}

export default App;
