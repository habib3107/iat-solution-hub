import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductCarousel from "@/components/home/ProductCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductCarousel />
      <Footer />
    </div>
  );
};

export default Index;
