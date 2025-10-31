import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of professional excellence in everything we do."
  },
  {
    icon: Target,
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical principles."
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our priority. We're dedicated to helping you achieve your financial goals."
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?auto=format&q=80&w=1200"
                alt="Professional business meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-primary">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-slate-900">
              Your Trusted Financial Partner
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              RedFire CPA LLC was founded with a simple mission: to provide exceptional accounting services with a
              personal touch. We believe that every client deserves individualized attention and strategic guidance.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team brings decades of combined experience across various industries, ensuring that we can handle
              any financial challenge your business faces with expertise and precision.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-3xl md:text-4xl text-primary mb-1">25+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-primary mb-1">500+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-primary mb-1">98%</div>
                <div className="text-sm text-slate-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}