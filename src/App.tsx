import NavBar from "./components/NavBar/NavBar";
import AllInBox from "./components/AllInbox/AllInbox";
import ViewMail from "./components/ViewMail/ViewMail";
import Sidebar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="h-screen w-full bg-black text-white flex flex-col">
      <NavBar />
      <div className="flex w-full" style={{ height: "calc(100vh - 64px)" }}>
        <Sidebar />
        <AllInBox />
        <div className="flex-grow">
          <ViewMail />
        </div>
      </div>
    </div>
  );
}

export default App;
