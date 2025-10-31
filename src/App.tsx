import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Mission from "./components/Mission";
import About from "./components/About";
import Team from "./components/Team";
import Insights from "./components/Insights";
import Testimonials from "./components/Testimonials";
import ClientPortal from "./components/ClientPortal";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portal" element={<ClientPortal />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
