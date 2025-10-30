import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/63b93e8a190ac212ad107fd88a94b580ce699ad0.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
      setMobileAboutOpen(false);
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 bg-white/98 backdrop-blur-md border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="flex items-center">
            <img src={logo} alt="RedFire CPA LLC" className="h-10 md:h-12" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                About
                <ChevronDown className="w-4 h-4" />
              </button>
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border py-2">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-primary transition-colors"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="w-full text-left px-4 py-2 hover:bg-red-50 hover:text-primary transition-colors"
                  >
                    Our Team
                  </button>
                </div>
              )}
            </div>
            <button onClick={() => scrollToSection("insights")} className="text-foreground hover:text-primary transition-colors">
              Insights
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("portal")} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Client Portal
            </Button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-4 mt-4 pb-4 border-t pt-4">
            <button onClick={() => scrollToSection("home")} className="text-left text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <div>
              <button 
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="text-left text-foreground hover:text-primary transition-colors flex items-center justify-between w-full"
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-colors block">
                    About Us
                  </button>
                  <button onClick={() => scrollToSection("team")} className="text-left text-foreground hover:text-primary transition-colors block">
                    Our Team
                  </button>
                </div>
              )}
            </div>
            <button onClick={() => scrollToSection("insights")} className="text-left text-foreground hover:text-primary transition-colors">
              Insights
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-left text-foreground hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("portal")} variant="outline" className="border-primary text-primary w-full">
              Client Portal
            </Button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 w-full">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
