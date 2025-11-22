import { Product } from "@/components/ProductCard";
import phoneImage from "@/assets/product-phone.jpg";
import headphonesImage from "@/assets/product-headphones.jpg";
import watchImage from "@/assets/product-watch.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Smartphone X",
    price: 99.99,
    category: "Electronics",
    image: phoneImage,
    description: "Latest flagship smartphone with advanced camera system, 5G connectivity, and all-day battery life. Features a stunning 6.7-inch OLED display and powerful processor.",
  },
  {
    id: "2",
    name: "Wireless Headphones Pro",
    price: 5.99,
    category: "Electronics",
    image: headphonesImage,
    description: "Premium over-ear headphones with active noise cancellation, superior sound quality, and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 7.99,
    category: "Accessories",
    image: watchImage,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and water resistance. Stay connected with smart notifications.",
  },
  {
    id: "4",
    name: "Ultra Smartphone Pro",
    price: 89.99,
    category: "Electronics",
    image: phoneImage,
    description: "Top-tier smartphone with professional-grade camera, massive storage, and cutting-edge performance for power users.",
  },
  {
    id: "5",
    name: "Studio Headphones Elite",
    price: 4.99,
    category: "Electronics",
    image: headphonesImage,
    description: "Studio-quality headphones designed for audiophiles. Crystal-clear sound reproduction and premium comfort for extended listening sessions.",
  },
  {
    id: "6",
    name: "Sport Watch Plus",
    price: 5.99,
    category: "Accessories",
    image: watchImage,
    description: "Rugged sports watch with multi-sport tracking, long battery life, and outdoor navigation features. Built to withstand extreme conditions.",
  },
];
