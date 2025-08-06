import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, Settings, GraduationCap, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "crm",
    name: "CRM System",
    icon: Users,
    tagline: "Streamline Customer Relationships",
    description: "Transform how you manage customers with our intelligent CRM platform. Track leads, automate sales processes, and build lasting relationships.",
    features: [
      "Lead Management & Scoring",
      "Sales Pipeline Automation",
      "Customer Analytics Dashboard",
      "Integration with Email & Calendar",
      "Mobile-First Design"
    ],
    benefits: "Increase sales conversion by 35% and improve customer retention rates.",
    idealFor: "Sales teams, service businesses, and growing companies",
    demoVideo: "/demo-crm.mp4",
    color: "from-blue-500 to-blue-600",
    rating: 4.9
  },
  {
    id: "qms", 
    name: "QMS Platform",
    icon: Settings,
    tagline: "Quality Management Simplified",
    description: "Ensure consistent quality across all operations with our comprehensive Quality Management System. Monitor, track, and improve every process.",
    features: [
      "Document Control & Versioning",
      "Audit Management & Tracking",
      "Non-Conformance Reporting",
      "Corrective Action Workflows", 
      "Compliance Monitoring"
    ],
    benefits: "Reduce quality issues by 60% and streamline compliance processes.",
    idealFor: "Manufacturing, healthcare, and regulated industries",
    demoVideo: "/demo-qms.mp4", 
    color: "from-green-500 to-green-600",
    rating: 4.8
  },
  {
    id: "lms",
    name: "LMS Solution", 
    icon: GraduationCap,
    tagline: "Empower Learning & Development",
    description: "Create, deliver, and track engaging learning experiences with our advanced Learning Management System. Perfect for employee training and education.",
    features: [
      "Interactive Course Builder",
      "Progress Tracking & Analytics", 
      "Certification Management",
      "Mobile Learning Support",
      "AI-Powered Recommendations"
    ],
    benefits: "Improve training completion rates by 50% and reduce onboarding time.",
    idealFor: "Corporate training, educational institutions, and HR departments",
    demoVideo: "/demo-lms.mp4",
    color: "from-purple-500 to-purple-600", 
    rating: 4.9
  }
];

const ProductCarousel = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handlePlayDemo = (productId: string) => {
    setSelectedProduct(productId);
    // In a real app, this would trigger a video modal or redirect
    console.log(`Playing demo for ${productId}`);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Software Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our suite of powerful, customizable software solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        {/* Horizontal Scrolling Product Cards */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={product.id}
                  className="flex-none w-96 group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    {/* Product Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                      <p className="text-primary font-medium mb-3">{product.tagline}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                      
                      <Badge variant="secondary" className="mb-4">
                        Ideal for: {product.idealFor}
                      </Badge>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-foreground font-medium">{product.benefits}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <Button 
                        onClick={() => handlePlayDemo(product.id)}
                        className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary group"
                      >
                        <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Watch Demo
                      </Button>
                      
                      <Button asChild variant="outline" className="w-full group">
                        <Link to="/contact" className="flex items-center justify-center">
                          Request Demo
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with custom software?
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary">
            <Link to="/contact" className="flex items-center space-x-2">
              <span>Contact IAT Technologies</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

    </section>
  );
};

export default ProductCarousel;