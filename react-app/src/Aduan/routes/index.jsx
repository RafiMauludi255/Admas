import { BrowserRouter, Routes, Route } from "react-router";
import Page from "../page";
import About from "../pages/about";
import Register from "../pages/register";
import Login from "../pages/login";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Page />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/register" element={<Register />} />
        <Route path="/pages/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
