import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Mission } from "./components/Mission";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Insights } from "./components/Insights";
import { ClientPortal } from "./components/ClientPortal";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Mission />
        <About />
        <Team />
        <Testimonials />
        <Insights />
        <ClientPortal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
