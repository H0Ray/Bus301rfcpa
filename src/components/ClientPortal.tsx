import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Lock, Shield, FileText, Upload, Download, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data is protected with 256-bit encryption and multi-factor authentication."
  },
  {
    icon: Upload,
    title: "Easy Document Upload",
    description: "Securely upload tax documents, receipts, and financial records anytime."
  },
  {
    icon: Download,
    title: "Access Your Files",
    description: "Download tax returns, financial statements, and reports 24/7."
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Track the status of your tax returns and accounting projects in real-time."
  }
];

export default function ClientPortal() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    alert("This is a demo. In production, this would connect to a secure authentication system.");
  };

  return (
    <section id="portal" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-4">
            <Lock className="w-4 h-4 text-red-300" />
            <span className="text-red-300">Secure Portal</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            Client Portal Access
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Access your financial documents, upload files, and communicate with your CPA team 
            through our secure client portal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Card className="p-8 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-900">Secure Login</h3>
                  <p className="text-sm text-slate-600">Enter your credentials to access your account</p>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block mb-2 text-slate-900">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                    className="bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-slate-900">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                    className="bg-slate-50"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" className="rounded" />
                    Remember me
                  </label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Access Portal
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                <p className="text-sm text-slate-600 mb-2">
                  Don't have an account?
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Request Portal Access
                </Button>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-white text-2xl mb-4">Portal Features</h3>
              <p className="text-slate-300 leading-relaxed">
                Our secure client portal gives you 24/7 access to your financial information 
                and makes it easy to collaborate with your CPA team.
              </p>
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-300" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white mb-2">Security You Can Trust</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We use industry-leading security measures including SSL encryption, 
                    secure data centers, and regular security audits to protect your sensitive 
                    financial information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
