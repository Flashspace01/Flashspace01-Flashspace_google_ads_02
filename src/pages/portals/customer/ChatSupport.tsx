import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Mail, 
  Calendar,
  CreditCard,
  Bell,
  HelpCircle,
  Package,
  Send,
  Bot,
  User,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const navItems = [
  { label: "Dashboard", href: "/customer-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "My Bookings", href: "/customer-portal/bookings", icon: <Package className="w-5 h-5" /> },
  { label: "Mail Records", href: "/customer-portal/mail", icon: <Mail className="w-5 h-5" /> },
  { label: "Visit Records", href: "/customer-portal/visits", icon: <Calendar className="w-5 h-5" /> },
  { label: "Payments", href: "/customer-portal/payments", icon: <CreditCard className="w-5 h-5" /> },
  { label: "Documents", href: "/customer-portal/documents", icon: <FileText className="w-5 h-5" /> },
  { label: "Chat Support", href: "/customer-portal/chat", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Notifications", href: "/customer-portal/notifications", icon: <Bell className="w-5 h-5" /> },
  { label: "Help Center", href: "/customer-portal/help", icon: <HelpCircle className="w-5 h-5" /> },
];

const initialMessages = [
  {
    id: 1,
    type: "bot",
    message: "Hello! I'm your FlashSpace AI assistant. How can I help you today?",
    time: "10:00 AM"
  },
  {
    id: 2,
    type: "user",
    message: "I want to know about my mail delivery status",
    time: "10:02 AM"
  },
  {
    id: 3,
    type: "bot",
    message: "I can help you with that! You have 2 pending mail items at your Mumbai BKC office. Would you like me to arrange a forwarding for them?",
    time: "10:02 AM"
  },
];

const quickActions = [
  "Check mail status",
  "Payment inquiry",
  "Book meeting room",
  "Talk to partner"
];

const ChatSupport = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      message: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setInputValue("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        message: "Thank you for your message. Our team will get back to you shortly. In the meantime, is there anything else I can help you with?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <DashboardLayout
      portalName="Customer Portal"
      portalDescription="Manage your workspace subscriptions"
      navItems={navItems}
    >
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Chat <span className="text-primary italic">Support</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Get instant help from our AI assistant or connect with your space partner
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Chat Area */}
        <div className="lg:col-span-3 bg-background border border-border rounded-xl overflow-hidden flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">FlashSpace AI</h3>
                <Badge variant="secondary" className="text-xs gap-1">
                  <Sparkles className="w-3 h-3" />
                  AI Powered
                </Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect to Partner</Button>
          </div>
          
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.type === 'user' ? 'bg-primary' : 'bg-muted'
                    }`}>
                      {msg.type === 'user' ? (
                        <User className="w-4 h-4 text-primary-foreground" />
                      ) : (
                        <Bot className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      msg.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-foreground'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      <span className={`text-xs mt-1 block ${
                        msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>{msg.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input 
                placeholder="Type your message..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Quick Actions Sidebar */}
        <div className="space-y-4">
          <div className="bg-background border border-border rounded-xl p-4">
            <h3 className="font-semibold text-foreground mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Button 
                  key={action} 
                  variant="outline" 
                  className="w-full justify-start text-sm"
                  onClick={() => setInputValue(action)}
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="bg-background border border-border rounded-xl p-4">
            <h3 className="font-semibold text-foreground mb-3">Contact Partner</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Need to speak with your space partner directly?
            </p>
            <Button variant="outline" className="w-full">
              <MessageSquare className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatSupport;
