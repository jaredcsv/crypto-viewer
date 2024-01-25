import CoinsTable from "./components/CoinsTable";
import MenuBar from "./components/MenuBar";
import MenuBarMobile from "./components/MenuBarMobile";
import "./App.css";
import HomeBanner from "./components/HomeBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MenuBarMobile />
      <MenuBar />
      <HomeBanner />
      <CoinsTable />
      <Footer/>
    </>
  );
}

export default App;
