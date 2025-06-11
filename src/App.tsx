import "./App.css";
import TopHeader from "./topHeader/TopHeader";
import SearchBarHeader from "./searchBarHeader/SearchBarHeader";
import NavBar from "./navBar/NavBar";
import SideMenu from "./sideMenu/SideMenu";

function App() {
  return (
    <div className="app">
      <TopHeader />
      <SearchBarHeader />
      <NavBar />
      <SideMenu />
    </div>
  );
}

export default App;
