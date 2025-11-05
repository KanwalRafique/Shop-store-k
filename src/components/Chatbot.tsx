import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi 👋 How can I help you today?", isBot: true },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickOptions = [
    "Browse products",
    "Track my order",
    "Contact support",
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages([...messages, { text: inputMessage, isBot: false }]);
    
    // Simple bot responses
    setTimeout(() => {
      let botResponse = "Thanks for your message! How else can I help you?";
      
      if (inputMessage.toLowerCase().includes("track")) {
        botResponse = "To track your order, please provide your order number and I'll look it up for you.";
      } else if (inputMessage.toLowerCase().includes("product")) {
        botResponse = "You can browse our full catalog on the Shop page. Is there something specific you're looking for?";
      } else if (inputMessage.toLowerCase().includes("support") || inputMessage.toLowerCase().includes("help")) {
        botResponse = "I'm here to help! You can also visit our Contact page to send us a message directly.";
      }
      
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 500);

    setInputMessage("");
  };

  const handleQuickOption = (option: string) => {
    setMessages([...messages, { text: option, isBot: false }]);
    
    setTimeout(() => {
      let response = "";
      if (option === "Browse products") {
        response = "Great! You can explore all our products on the Shop page. What type of product are you interested in?";
      } else if (option === "Track my order") {
        response = "To track your order, please provide your order number.";
      } else if (option === "Contact support") {
        response = "You can reach our support team through the Contact page, or continue chatting with me here!";
      }
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-80 sm:w-96 h-[500px] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">Chat Support</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-hover"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isBot
                      ? "bg-muted text-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {messages.length === 1 && (
              <div className="space-y-2">
                {quickOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => handleQuickOption(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
