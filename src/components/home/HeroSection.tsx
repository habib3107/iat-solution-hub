import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-foreground via-foreground to-muted-foreground overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/8 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 animate-fade-in">
            Transform Your Business with
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent block mt-2">
              Custom Software Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-background/80 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            IAT Technologies delivers cutting-edge CRM, QMS, and LMS systems that streamline operations, boost productivity, and drive growth for forward-thinking businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-lg px-8 py-3 group"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-background border-background/30 hover:bg-background hover:text-foreground text-lg px-8 py-3 group"
            >
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-background/70">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-background/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-background/70">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;