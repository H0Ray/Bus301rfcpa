import { Button } from "./ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
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

  const scrollToServices = () => {
    const element = document.getElementById("services");
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
    <section id="home" className="pt-20 md:pt-28 pb-16 md:pb-20 bg-gradient-to-b from-red-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary">Trusted CPA Firm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900">
              Expert Tax & Accounting Solutions for Your Success
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              RedFire CPA delivers comprehensive accounting, tax preparation, and business advisory services. 
              Our certified professionals provide personalized solutions to help your business thrive.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary w-4 h-4" />
                </div>
                <span className="text-slate-700">Certified Public Accountants</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary w-4 h-4" />
                </div>
                <span className="text-slate-700">25+ Years Combined Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary w-4 h-4" />
                </div>
                <span className="text-slate-700">Personalized Service & Support</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToServices}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Our Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhY2NvdW50YW50JTIwb2ZmaWNlfGVufDF8fHx8MTc2MTA1NzA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional accounting office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-slate-100">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl text-primary">500+</span>
              </div>
              <p className="text-slate-600">Satisfied Clients</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-primary p-6 rounded-xl shadow-xl hidden lg:block">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl text-white">98%</span>
              </div>
              <p className="text-red-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
