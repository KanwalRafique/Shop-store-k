import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { ArrowLeft, ShoppingCart, Truck, Shield } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, totalItems } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header cartItemCount={totalItems} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Product Not Found</h1>
            <Link to="/shop">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={totalItems} />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link to="/shop">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-medium mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>

              <div className="space-y-4 pt-6">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center space-x-3 text-sm">
                    <Truck className="h-5 w-5 text-primary" />
                    <span>Free shipping on orders over $100</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>

              {/* Product Specifications */}
              <div className="pt-8 space-y-4">
                <h2 className="text-2xl font-bold">Product Details</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Category</span>
                    <span className="text-muted-foreground">{product.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">SKU</span>
                    <span className="text-muted-foreground">{product.id}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Availability</span>
                    <span className="text-success">In Stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ProductDetail;
