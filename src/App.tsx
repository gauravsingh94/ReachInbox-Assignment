import Popup from "./components/PopUpCard/PopUpCard";
import ViewMail from "./components/ViewMail/ViewMail";
function App() {
  return (
    <div className="h-screen w-full bg-black text-white flex flex-col">
      <ViewMail />
      <Popup isOpen={true} />
    </div>
  );
}

export default App;
