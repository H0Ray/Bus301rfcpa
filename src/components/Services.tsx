import { Card } from "./ui/card";
import { Calculator, FileText, TrendingUp, Building2, Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Calculator,
    title: "Tax Preparation & Planning",
    description: "Strategic tax planning and preparation services to minimize liabilities and maximize returns for individuals and businesses."
  },
  {
    icon: FileText,
    title: "Bookkeeping Services",
    description: "Accurate and timely bookkeeping to keep your financial records organized and your business running smoothly."
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    description: "Expert financial advice to help you make informed decisions and achieve your business goals."
  },
  {
    icon: Building2,
    title: "Business Formation",
    description: "Comprehensive support for starting your business, including entity selection and registration assistance."
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "Efficient payroll processing and compliance management to ensure your employees are paid accurately and on time."
  },
  {
    icon: Shield,
    title: "Audit & Assurance",
    description: "Professional audit and assurance services to provide confidence in your financial statements."
  }
];

export default function Services() {
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

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-slate-900">
            Comprehensive Accounting Solutions
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            We offer a full range of accounting and financial services designed to meet 
            the unique needs of your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200 bg-white">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90">
            Schedule a Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
