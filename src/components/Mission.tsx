import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Flame, Target, Users2, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Flame,
    title: "Passion for Your Success",
    description: "Like a flame that never dies, our commitment to your financial success burns bright. We're not just number crunchers—we're your dedicated partners in growth."
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "Every number matters. Our meticulous approach ensures your financials are accurate, compliant, and optimized for your unique business goals."
  },
  {
    icon: Users2,
    title: "Personalized Service",
    description: "You're not a file number to us. We take time to understand your business, your challenges, and your aspirations to provide tailored solutions."
  },
  {
    icon: TrendingUp,
    title: "Proactive Growth Strategy",
    description: "We don't just report what happened—we help you plan what's next. Our forward-thinking approach helps you stay ahead of the curve."
  }
];

export function Mission() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50/50">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-primary">Our Mission</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-slate-900">
            Empowering Your Financial Future
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-700 mb-6 leading-relaxed">
              At RedFire CPA, our mission is to ignite financial success for businesses and individuals 
              through expert accounting services, personalized guidance, and unwavering dedication. We transform 
              complex financial challenges into clear, actionable strategies that fuel growth and peace of mind.
            </p>
            <p className="text-lg text-slate-600">
              We believe accounting should be more than compliance—it should be a catalyst 
              for your success. Here's what sets us apart and ignites our passion for serving you.
            </p>
          </div>
        </div>

        {/* Why Choose RedFire CPA */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-slate-900">
            Why Choose RedFire CPA?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-slate-900">{reason.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2MTA2NDc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business partnership handshake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-red-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-white mb-4 text-2xl md:text-3xl">Our Commitment to You</h3>
            <p className="text-lg text-red-100 mb-8 leading-relaxed">
              At RedFire CPA, we pledge to deliver exceptional service with integrity, 
              transparency, and expertise. Your financial peace of mind is our top priority, 
              and we work tirelessly to ensure you have the insights and support needed to 
              make confident business decisions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="text-3xl md:text-4xl mb-2 text-white">100%</div>
                <div className="text-red-100">Client Satisfaction Focus</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="text-3xl md:text-4xl mb-2 text-white">24/7</div>
                <div className="text-red-100">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="text-3xl md:text-4xl mb-2 text-white">Trusted</div>
                <div className="text-red-100">Industry Leader</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
