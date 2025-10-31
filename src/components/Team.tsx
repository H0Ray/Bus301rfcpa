import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    title: "Managing Partner & CPA",
    credentials: "CPA, MST",
    image: "https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc2MTAzMDcyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Sarah brings over 15 years of experience in tax planning and corporate accounting. She specializes in helping small businesses optimize their financial strategies.",
    email: "sarah.mitchell@redfirecpa.com",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    title: "Senior Tax Advisor",
    credentials: "CPA, EA",
    image: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NjEwNTIwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Michael is an expert in complex tax situations and IRS representation. His strategic approach has saved clients millions in tax liabilities.",
    email: "michael.chen@redfirecpa.com",
    linkedin: "#"
  },
  {
    name: "Jennifer Rodriguez",
    title: "Audit & Assurance Partner",
    credentials: "CPA, CIA",
    image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTAxOTYzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Jennifer leads our audit practice with meticulous attention to detail. She has extensive experience in financial statement audits and internal controls.",
    email: "jennifer.rodriguez@redfirecpa.com",
    linkedin: "#"
  },
  {
    name: "David Thompson",
    title: "Financial Consulting Director",
    credentials: "CPA, CFP",
    image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50YW50JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTA2NDI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "David provides comprehensive financial planning and business advisory services. He helps clients achieve their long-term financial goals through strategic planning.",
    email: "david.thompson@redfirecpa.com",
    linkedin: "#"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-primary">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-slate-900">
            Meet Our Expert Team
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Our certified professionals are dedicated to providing exceptional service 
            and expert guidance for all your accounting needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-slate-200 bg-white">
              <div className="aspect-square overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-slate-900">{member.name}</h3>
                <p className="text-primary mb-1">{member.title}</p>
                <p className="text-sm text-slate-500 mb-3">{member.credentials}</p>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
