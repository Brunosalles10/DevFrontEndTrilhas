import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Trilha-3/About";
import Animal from "./components/Trilha-3/Animal";
import BookingSuccess from "./components/Trilha-3/BookingSuccess";
import Contact from "./components/Trilha-3/Contact";
import Home from "./components/Trilha-3/Home";
import RoomDetails from "./components/Trilha-3/RoomDetails";
import Rooms from "./components/Trilha-3/Rooms";
import SistemaNav from "./components/Trilha-3/SistemaNav";

function App() {
  return (
    <Router>
      <SistemaNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomdetails/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
