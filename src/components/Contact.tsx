import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-primary">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-slate-900">
            Let's Discuss Your Financial Needs
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to take control of your finances? Get in touch with our team today 
            for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <Card className="p-6 md:p-8 mb-6 border-slate-200 bg-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-900">Send us a message</h3>
                  <p className="text-sm text-slate-600">We'll respond within 24 hours</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 text-slate-900">Full Name</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-slate-900">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-slate-900">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-slate-900">Message</label>
                  <Textarea
                    placeholder="Tell us about your accounting needs..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-slate-50"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2 text-slate-900">Phone</h4>
                  <p className="text-slate-600 mb-1">Main: (555) 789-0123</p>
                  <p className="text-slate-600">Fax: (555) 789-0124</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2 text-slate-900">Email</h4>
                  <p className="text-slate-600 mb-1">info@redfirecpa.com</p>
                  <p className="text-slate-600">support@redfirecpa.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2 text-slate-900">Office Address</h4>
                  <p className="text-slate-600">
                    123 Financial Plaza, Suite 500<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2 text-slate-900">Business Hours</h4>
                  <p className="text-slate-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-600 mb-1">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
