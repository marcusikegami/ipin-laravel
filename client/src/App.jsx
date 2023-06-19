import Header from "./components/Header";
import Events from "./views/Events";
import About from "./views/About";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Partners from "./views/Partners";
import Sponsorship from "./views/Sponsorship";
import Test from "./views/Test";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Mission from "./views/Mission";

function App() {
    return (
        <BrowserRouter>
            <Header />
            {/* Body Rendered Here within the Routes Component. Header and Footer are rendered on all pages (Footer is not rendered at '/' *see Footer.js) */}
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/about/" element={<About />} />
                <Route
                    path="/about/officers"
                    element={<About selection="Officers" />}
                />
                <Route
                    path="/about/board"
                    element={<About selection="Board" />}
                />
                <Route
                    path="/about/events"
                    element={<About selection="Events" />}
                />
                <Route path="/about/mission" element={<Mission />} />
                <Route
                    path="/partnerships/sponsorship"
                    element={<Sponsorship />}
                />
                <Route path="/partnerships/partners" element={<Partners />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/test" element={<Test />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
