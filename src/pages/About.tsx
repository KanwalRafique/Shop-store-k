import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { useCart } from "@/contexts/CartContext";
import { Target, Users, Award, Heart } from "lucide-react";

const About = () => {
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={totalItems} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Store</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're passionate about bringing you the best products at unbeatable prices.
              Quality, service, and customer satisfaction are at the heart of everything we do.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quality First</h3>
                <p className="text-muted-foreground">
                  We carefully curate every product to ensure it meets our high standards
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Customer Focused</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority, and we're here to help every step of the way
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in product selection, service, and delivery
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Passion</h3>
                <p className="text-muted-foreground">
                  We love what we do and it shows in every interaction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded with a vision to make premium products accessible to everyone, our store
                has grown from a small startup to a trusted destination for quality electronics
                and accessories.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that everyone deserves access to the latest technology and premium
                products without breaking the bank. That's why we work directly with manufacturers
                to bring you competitive prices while maintaining the highest quality standards.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team is dedicated to providing exceptional customer service, from helping you
                find the perfect product to ensuring a smooth shopping and delivery experience.
                Thank you for choosing us as your trusted shopping partner.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
