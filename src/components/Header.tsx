import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/pic.webp";
import { Button } from "./ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 bg-white/98 backdrop-blur-md border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="RedFire CPA LLC" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>

            {/* ABOUT DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                About
                <ChevronDown className="w-4 h-4" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 bg-white w-48 rounded-lg shadow-lg border border-border py-2 z-50">
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-primary transition-colors text-left"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/team"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-primary transition-colors text-left"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            <Link to="/insights" className="text-foreground hover:text-primary transition-colors">
              Insights
            </Link>

            <Link to="/testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>

            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>

            <Link to="/portal">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Client Portal
              </Button>
            </Link>

            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-4 mt-4 pb-4 border-t pt-4">

            <Link to="/" className="text-left hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <Link to="/services" className="text-left hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>

            <Link to="/about" className="text-left hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>

            <Link to="/team" className="text-left hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Our Team
            </Link>

            <Link to="/insights" className="text-left hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Insights
            </Link>

            <Link to="/testimonials" className="text-left hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </Link>

            <Link to="/contact" className="text-left hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            <Link to="/portal">
              <Button variant="outline" className="border-primary text-primary w-full">
                Client Portal
              </Button>
            </Link>

            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 w-full">
                Get Started
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
