import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import InboxPage from "./pages/InboxPage";

const App = () => {
  return (
    <div className=" w-full bg-white dark:bg-black text-black dark:text-white">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/inbox" element={<InboxPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
