import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const insights = [
  {
    title: "2025 Tax Planning Strategies for Small Businesses",
    excerpt: "Discover effective tax planning strategies to minimize your business tax liability and maximize deductions for the upcoming tax year.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Tax Planning",
    date: "October 15, 2025",
    readTime: "5 min read"
  },
  {
    title: "Understanding Cash Flow Management",
    excerpt: "Learn essential cash flow management techniques to keep your business financially healthy and prepared for growth opportunities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Financial Management",
    date: "October 10, 2025",
    readTime: "4 min read"
  },
  {
    title: "Guide to Choosing the Right Business Entity",
    excerpt: "Compare LLC, S-Corp, C-Corp, and other business structures to determine which entity type is best for your specific situation.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Business Formation",
    date: "October 5, 2025",
    readTime: "6 min read"
  },
  {
    title: "Year-End Financial Checklist for Business Owners",
    excerpt: "Essential steps to take before year-end to ensure your books are in order and you're positioned for a successful new year.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Accounting Tips",
    date: "September 28, 2025",
    readTime: "7 min read"
  },
  {
    title: "Maximizing Tax Deductions for Remote Workers",
    excerpt: "Navigate the complexities of home office deductions and other tax benefits available to remote employees and freelancers.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Personal Tax",
    date: "September 20, 2025",
    readTime: "5 min read"
  },
  {
    title: "Financial Metrics Every Business Owner Should Track",
    excerpt: "Identify the key performance indicators that matter most for your business and learn how to use them for strategic decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Business Strategy",
    date: "September 15, 2025",
    readTime: "6 min read"
  }
];

export function Insights() {
  return (
    <section id="insights" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-primary">Insights & Resources</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-slate-900">
            Latest Insights & Expert Advice
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed with our latest articles, tax tips, and financial guidance 
            to help you make smarter business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200 bg-white group">
              <div className="aspect-video overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 rounded-full text-xs text-primary">
                    <Tag className="w-3 h-3" />
                    {insight.category}
                  </span>
                </div>
                <h3 className="mb-3 text-slate-900 group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{insight.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>
                <Button variant="ghost" className="w-full text-primary hover:bg-red-50 group">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
