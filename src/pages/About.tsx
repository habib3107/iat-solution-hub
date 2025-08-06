import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Target, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of technology to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Shield,
      title: "Reliability", 
      description: "Our robust, secure systems are built to perform consistently, ensuring your business operations run smoothly 24/7."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients as true partners, understanding their unique needs and goals to deliver tailored solutions."
    },
    {
      icon: Target,
      title: "Results",
      description: "Every solution we create is designed with measurable outcomes in mind, driving real business value and growth."
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-foreground to-muted-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 animate-fade-in">
            About IAT Technologies
          </h1>
          <p className="text-xl text-background/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Empowering businesses worldwide with innovative software solutions since 2014. 
            We transform complex challenges into elegant, scalable technology solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Mission</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Transforming Business Through Technology
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to empower businesses of all sizes with custom software solutions that streamline operations, 
                  enhance productivity, and drive sustainable growth. We believe that the right technology can transform how 
                  organizations work, making complex processes simple and efficient.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Vision</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Leading the Future of Business Software
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where every business, regardless of size or industry, has access to powerful, 
                  intuitive software solutions that unlock their full potential. Through innovation, collaboration, 
                  and unwavering commitment to excellence, we're building the future of business technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="text-center group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Track Record</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak to our commitment and success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse group of passionate professionals dedicated to delivering exceptional software solutions. 
              Our team combines technical expertise with deep industry knowledge to solve your most complex challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Development Team</h3>
                <p className="text-muted-foreground">
                  Expert software engineers, architects, and developers with extensive experience in modern technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Dedicated QA specialists ensuring every solution meets the highest standards of quality and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Support Team</h3>
                <p className="text-muted-foreground">
                  Round-the-clock support specialists committed to keeping your systems running smoothly.
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

export default About;