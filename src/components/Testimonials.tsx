import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Peterson",
    title: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 5,
    text: "RedFire CPA has been instrumental in our company's growth. Their tax planning strategies saved us thousands while keeping us fully compliant. Highly recommend!"
  },
  {
    name: "Maria Gonzalez",
    title: "Owner, Bella Boutique",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 5,
    text: "The team at RedFire CPA truly understands small business needs. Their personalized service and attention to detail give me peace of mind with my finances."
  },
  {
    name: "Robert Chen",
    title: "Managing Director, Chen Capital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 5,
    text: "Professional, knowledgeable, and always responsive. RedFire CPA handles our complex financial needs with expertise and integrity. They're more than accountants—they're trusted advisors."
  },
  {
    name: "Sarah Williams",
    title: "Founder, Williams Consulting",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 5,
    text: "I've worked with several accounting firms over the years, and RedFire CPA stands out for their proactive approach and clear communication. They genuinely care about my success."
  },
  {
    name: "Michael Torres",
    title: "President, Torres Manufacturing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 5,
    text: "Outstanding service and expertise. RedFire CPA helped us streamline our accounting processes and provided valuable insights that improved our bottom line."
  },
  {
    name: "Emily Richardson",
    title: "Director, Richardson & Associates",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 5,
    text: "The most reliable and trustworthy CPA firm I've worked with. Their team is always available to answer questions and provide guidance. Exceptional service!"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses and individuals who trust RedFire CPA 
            with their financial success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-slate-200 bg-white relative">
              <div className="absolute top-6 right-6 text-red-100">
                <Quote className="w-12 h-12" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-red-100"
                />
                <div>
                  <h4 className="text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-red-50 px-8 py-6 rounded-xl">
            <div>
              <div className="text-3xl md:text-4xl text-primary mb-1">4.9/5</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div>
              <div className="text-3xl md:text-4xl text-primary mb-1">500+</div>
              <div className="text-sm text-slate-600">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div>
              <div className="text-3xl md:text-4xl text-primary mb-1">98%</div>
              <div className="text-sm text-slate-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
