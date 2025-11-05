import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Checkout = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState("standard");
  
  const shippingCost = totalPrice >= 100 ? 0 : shippingMethod === "standard" ? 5 : 15;
  const finalTotal = totalPrice + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Stripe for payment
    toast.success("Order placed successfully! (Payment integration coming soon)");
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={totalItems} />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <div className="grid gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>
                </Card>

                {/* Shipping Address */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="region">Region</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="karachi">Karachi</SelectItem>
                            <SelectItem value="other">Other Regions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" required />
                    </div>
                  </div>
                </Card>

                {/* Shipping Method */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Shipping Method</h2>
                  <div className="space-y-3">
                    <div
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        shippingMethod === "standard"
                          ? "border-primary bg-accent"
                          : "border-border"
                      }`}
                      onClick={() => setShippingMethod("standard")}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">Standard Shipping</p>
                          <p className="text-sm text-muted-foreground">5-7 business days</p>
                        </div>
                        <p className="font-bold">
                          {totalPrice >= 100 ? "FREE" : "$5.00"}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        shippingMethod === "express"
                          ? "border-primary bg-accent"
                          : "border-border"
                      }`}
                      onClick={() => setShippingMethod("express")}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">Express Shipping</p>
                          <p className="text-sm text-muted-foreground">2-3 business days</p>
                        </div>
                        <p className="font-bold">$15.00</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-medium">
                          ${shippingCost.toFixed(2)}
                        </span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-primary">${finalTotal.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Place Order
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Payment integration with Stripe coming soon
                  </p>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Checkout;
