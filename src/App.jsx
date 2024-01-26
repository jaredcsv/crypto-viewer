import CoinsTable from "./components/CoinsTable/CoinsTable";
import MenuBar from "./components/MenuBar/MenuBar";
import MenuBarMobile from "./components/MenuBarMobile/MenuBarMobile";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Footer from "./components/Footer/Footer";

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
