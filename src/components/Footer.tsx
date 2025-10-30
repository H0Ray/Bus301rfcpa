import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "figma:asset/63b93e8a190ac212ad107fd88a94b580ce699ad0.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="RedFire CPA LLC" 
                className="h-10 md:h-12 w-auto" 
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for comprehensive accounting and financial services. 
              Building lasting relationships through excellence and integrity.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-red-400 transition-colors">
                  Tax Preparation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-red-400 transition-colors">
                  Bookkeeping
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-red-400 transition-colors">
                  Financial Consulting
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-red-400 transition-colors">
                  Business Formation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-red-400 transition-colors">
                  Payroll Management
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-red-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("team")} className="hover:text-red-400 transition-colors">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("insights")} className="hover:text-red-400 transition-colors">
                  Insights & Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("testimonials")} className="hover:text-red-400 transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-red-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">📞</span>
                <div>
                  <p className="mb-1">(555) 789-0123</p>
                  <p className="text-sm">Main Office</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✉️</span>
                <div>
                  <p className="mb-1">info@redfirecpa.com</p>
                  <p className="text-sm">Email Us</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">📍</span>
                <div>
                  <p>123 Financial Plaza</p>
                  <p>Suite 500</p>
                  <p>New York, NY 10001</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} RedFire CPA LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
