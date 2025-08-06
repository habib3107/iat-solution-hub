import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting IAT Technologies. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@iat-tech.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Innovation City, IC 12345",
      description: "Our main office location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "9:00 AM - 6:00 PM EST",
      description: "Monday through Friday"
    }
  ];

  const benefits = [
    "Free initial consultation",
    "Custom solution recommendations",
    "Detailed project timeline",
    "Transparent pricing",
    "24/7 ongoing support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-foreground to-muted-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 animate-fade-in">
            Contact IAT Technologies
          </h1>
          <p className="text-xl text-background/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Ready to transform your business? Get in touch with our experts to discuss your software needs and discover how we can help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Get Started Today</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="mt-1"
                          placeholder="Your Company Inc."
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="crm">CRM System</SelectItem>
                          <SelectItem value="qms">QMS Platform</SelectItem>
                          <SelectItem value="lms">LMS Solution</SelectItem>
                          <SelectItem value="custom">Custom Development</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary group text-lg py-3"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={info.title} className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{info.title}</h4>
                            <p className="text-sm text-foreground">{info.details}</p>
                            <p className="text-xs text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* What You Get */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">What You Get</h3>
                  
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-4">Response Time</h3>
                  <div className="text-3xl font-bold mb-2">&lt; 24hrs</div>
                  <p className="text-sm opacity-90">Average response time for all inquiries</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">How long does implementation take?</h3>
                <p className="text-muted-foreground text-sm">
                  Implementation timelines vary based on complexity, but typically range from 4-12 weeks. We provide detailed timelines during our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Do you provide ongoing support?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! We offer 24/7 support, regular updates, and maintenance services to ensure your software continues to perform optimally.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Can you integrate with existing systems?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely. Our solutions are designed to integrate seamlessly with your existing software and business processes.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">What industries do you serve?</h3>
                <p className="text-muted-foreground text-sm">
                  We serve a wide range of industries including healthcare, manufacturing, education, finance, and technology sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;