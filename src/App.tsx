import Sidebar from "./components/SideBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <NavBar />
      </div>
    </>
  );
}
export default App;
