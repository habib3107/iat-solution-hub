import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, Settings, GraduationCap, CheckCircle, Star, 
  ArrowRight, Play, BarChart, Shield, Smartphone, 
  Zap, Database, Globe, Clock
} from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "crm",
      name: "CRM System",
      icon: Users,
      tagline: "Streamline Customer Relationships",
      description: "Transform how you manage customers with our intelligent CRM platform. Track leads, automate sales processes, and build lasting relationships that drive revenue growth.",
      fullFeatures: [
        "Advanced Lead Management & Scoring",
        "Automated Sales Pipeline Management",
        "Customer Analytics & Reporting Dashboard",
        "Email & Calendar Integration",
        "Mobile-First Responsive Design",
        "Custom Fields & Workflows",
        "Social Media Integration",
        "Real-time Collaboration Tools"
      ],
      benefits: [
        "Increase sales conversion rates by up to 35%",
        "Improve customer retention and satisfaction",
        "Reduce manual data entry by 80%",
        "Accelerate sales cycle by 25%"
      ],
      idealFor: "Sales teams, service businesses, growing companies, and enterprises",
      industries: ["Technology", "Healthcare", "Finance", "Retail", "Manufacturing"],
      pricing: "Starting at $29/user/month",
      color: "from-blue-500 to-blue-600",
      rating: 4.9,
      testimonial: "IAT's CRM solution doubled our lead conversion rate in just 3 months!"
    },
    {
      id: "qms",
      name: "QMS Platform",
      icon: Settings,
      tagline: "Quality Management Simplified",
      description: "Ensure consistent quality across all operations with our comprehensive Quality Management System. Monitor, track, and improve every process while maintaining compliance effortlessly.",
      fullFeatures: [
        "Document Control & Version Management",
        "Comprehensive Audit Management",
        "Non-Conformance Reporting & Tracking",
        "Automated Corrective Action Workflows",
        "Real-time Compliance Monitoring",
        "Risk Assessment & Management",
        "Training & Certification Tracking",
        "Custom Reporting & Analytics"
      ],
      benefits: [
        "Reduce quality issues by up to 60%",
        "Streamline compliance processes",
        "Improve audit readiness by 75%",
        "Decrease documentation time by 50%"
      ],
      idealFor: "Manufacturing, healthcare, pharmaceuticals, and regulated industries",
      industries: ["Manufacturing", "Healthcare", "Pharmaceuticals", "Aerospace", "Automotive"],
      pricing: "Starting at $49/user/month",
      color: "from-green-500 to-green-600",
      rating: 4.8,
      testimonial: "Our compliance processes are now seamless thanks to IAT's QMS platform."
    },
    {
      id: "lms",
      name: "LMS Solution",
      icon: GraduationCap,
      tagline: "Empower Learning & Development",
      description: "Create, deliver, and track engaging learning experiences with our advanced Learning Management System. Perfect for employee training, onboarding, and continuous education programs.",
      fullFeatures: [
        "Interactive Course Builder & Designer",
        "Advanced Progress Tracking & Analytics",
        "Automated Certification Management",
        "Mobile Learning Support & Offline Access",
        "AI-Powered Learning Recommendations",
        "Virtual Classroom Integration",
        "Gamification & Engagement Tools",
        "Multi-language Support"
      ],
      benefits: [
        "Improve training completion rates by 50%",
        "Reduce onboarding time by 40%",
        "Increase employee engagement by 65%",
        "Lower training costs by 30%"
      ],
      idealFor: "Corporate training, educational institutions, HR departments, and consultants",
      industries: ["Education", "Corporate", "Healthcare", "Government", "Non-profit"],
      pricing: "Starting at $19/user/month",
      color: "from-purple-500 to-purple-600",
      rating: 4.9,
      testimonial: "Employee training has never been this engaging and effective!"
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Fully responsive design for all devices"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and speed"
    },
    {
      icon: Database,
      title: "Scalable Architecture", 
      description: "Grows with your business needs"
    },
    {
      icon: Globe,
      title: "Cloud-Based",
      description: "Access anywhere, anytime"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock expert assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-foreground to-muted-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 animate-fade-in">
            Our Software Solutions
          </h1>
          <p className="text-xl text-background/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Comprehensive, customizable software solutions designed to transform your business operations and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Product Info */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{product.name}</h2>
                        <p className="text-primary font-medium">{product.tagline}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {product.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Industries:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.industries.map((industry, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{product.rating} rating</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">"{product.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary group"
                      >
                        <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Watch Demo
                      </Button>
                      
                      <Button asChild variant="outline" className="group">
                        <Link to="/contact" className="flex items-center">
                          Request Quote
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Product Features Card */}
                  <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1'}>
                    <Card className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-foreground mb-4">Complete Feature Set</h3>
                        <ul className="space-y-3">
                          {product.fullFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 pt-6 border-t border-border">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Starting from</span>
                            <span className="text-lg font-bold text-primary">{product.pricing}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose IAT Technologies?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every solution comes with enterprise-grade features and support that ensures your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="text-center group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and discover how our solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Schedule Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;