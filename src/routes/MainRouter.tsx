import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
