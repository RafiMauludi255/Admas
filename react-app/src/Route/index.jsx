import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./home";
import About from "./about";

export default function Index() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}