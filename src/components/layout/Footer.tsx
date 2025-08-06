import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold">IAT Technologies</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Transforming businesses with custom software solutions. We specialize in CRM, QMS, and LMS systems that drive efficiency and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-background/80 hover:text-primary transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>contact@iat-tech.com</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>123 Tech Street, Innovation City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 IAT Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;