import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
