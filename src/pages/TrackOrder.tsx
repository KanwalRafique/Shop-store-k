import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Package, Truck, CheckCircle } from "lucide-react";

const TrackOrder = () => {
  const { totalItems } = useCart();
  const [orderNumber, setOrderNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock order tracking - replace with actual backend integration
    const statuses = ["Processing", "Shipped", "Delivered"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setOrderStatus(randomStatus);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Processing":
        return <Package className="h-12 w-12 text-primary" />;
      case "Shipped":
        return <Truck className="h-12 w-12 text-primary" />;
      case "Delivered":
        return <CheckCircle className="h-12 w-12 text-success" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={totalItems} />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-muted to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Order</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enter your order number to see the current status of your delivery
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="p-8 max-w-2xl mx-auto">
              <form onSubmit={handleTrack} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="orderNumber">Order Number</Label>
                  <Input
                    id="orderNumber"
                    placeholder="e.g., ORD-12345"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Track Order
                </Button>
              </form>

              {orderStatus && (
                <div className="mt-8 pt-8 border-t">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      {getStatusIcon(orderStatus)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        Order Status: {orderStatus}
                      </h2>
                      <p className="text-muted-foreground">
                        Order #{orderNumber}
                      </p>
                    </div>

                    {/* Status Timeline */}
                    <div className="max-w-md mx-auto">
                      <div className="flex items-center justify-between relative">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>
                        
                        <div className="relative z-10 flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            ["Processing", "Shipped", "Delivered"].includes(orderStatus)
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}>
                            <Package className="h-4 w-4" />
                          </div>
                          <span className="text-xs mt-2">Processing</span>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            ["Shipped", "Delivered"].includes(orderStatus)
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}>
                            <Truck className="h-4 w-4" />
                          </div>
                          <span className="text-xs mt-2">Shipped</span>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            orderStatus === "Delivered"
                              ? "bg-success text-success-foreground"
                              : "bg-muted"
                          }`}>
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-xs mt-2">Delivered</span>
                        </div>
                      </div>
                    </div>

                    {orderStatus === "Delivered" && (
                      <p className="text-success font-medium">
                        Your order has been delivered!
                      </p>
                    )}
                  </div>
                </div>
              )}
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default TrackOrder;
