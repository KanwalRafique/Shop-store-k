import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { totalItems } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={totalItems} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question or need assistance? We're here to help!
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Info Cards */}
              <Card className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground">kanwalrafiq786@gmail.com</p>
              </Card>

              <Card className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </Card>

              <Card className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Visit Us</h3>
                <p className="text-muted-foreground">123 Commerce St, City</p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
