import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LayoutDashboard, 
  Users,
  TrendingUp,
  Wallet,
  Receipt,
  Target,
  FileText,
  Send,
  Trophy,
  MessageSquare,
  Search,
  Bot,
  User,
  Clock,
  ChevronRight,
  HelpCircle,
  Book,
  Phone,
  Mail,
  Sparkles,
  Plus,
  Eye
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const navItems = [
  { label: "Dashboard", href: "/affiliate-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Booking Management", href: "/affiliate-portal/bookings", icon: <Users className="w-5 h-5" /> },
  { label: "Revenue Dashboard", href: "/affiliate-portal/revenue", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Payouts", href: "/affiliate-portal/payouts", icon: <Wallet className="w-5 h-5" /> },
  { label: "Invoices", href: "/affiliate-portal/invoices", icon: <Receipt className="w-5 h-5" /> },
  { label: "Lead Management", href: "/affiliate-portal/leads", icon: <Target className="w-5 h-5" /> },
  { label: "Quotation Generator", href: "/affiliate-portal/quotations", icon: <FileText className="w-5 h-5" /> },
  { label: "Marketing Tools", href: "/affiliate-portal/marketing", icon: <Send className="w-5 h-5" /> },
  { label: "Leaderboard", href: "/affiliate-portal/leaderboard", icon: <Trophy className="w-5 h-5" /> },
  { label: "Support", href: "/affiliate-portal/support", icon: <MessageSquare className="w-5 h-5" /> },
];

const initialChatMessages = [
  {
    id: 1,
    type: "bot",
    message: "Hello! I'm your FlashSpace AI assistant. How can I help you today?",
    time: "10:00 AM"
  },
  {
    id: 2,
    type: "user",
    message: "I have a question about my pending payout from last month",
    time: "10:01 AM"
  },
  {
    id: 3,
    type: "bot",
    message: "I can help you with that! Let me check your payout status. Your payout of ₹45,000 for January is currently being processed and should be credited by February 5th, 2024.",
    time: "10:01 AM"
  },
];

const tickets = [
  {
    id: "TKT-2024-045",
    subject: "Commission calculation query",
    status: "open",
    priority: "medium",
    created: "Jan 28, 2024",
    lastUpdate: "2 hours ago"
  },
  {
    id: "TKT-2024-039",
    subject: "Referral link not tracking",
    status: "in-progress",
    priority: "high",
    created: "Jan 25, 2024",
    lastUpdate: "1 day ago"
  },
  {
    id: "TKT-2024-032",
    subject: "Need marketing materials",
    status: "resolved",
    priority: "low",
    created: "Jan 20, 2024",
    lastUpdate: "5 days ago"
  },
];

const faqs = [
  {
    question: "How is my commission calculated?",
    answer: "Your commission is calculated as 10% of the first month's booking value for new clients you refer."
  },
  {
    question: "When are payouts processed?",
    answer: "Payouts are processed on the 1st and 15th of every month for all confirmed bookings."
  },
  {
    question: "How do I track my referrals?",
    answer: "You can track all your referrals in the Booking Management section with real-time status updates."
  },
  {
    question: "Can I get custom marketing materials?",
    answer: "Yes! Visit the Marketing Tools section to request custom branded materials."
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "resolved":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "in-progress":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "open":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "medium":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "low":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const aiResponses = [
  "I understand your concern. Let me look into that for you right away.",
  "Based on your account history, I can see that your commission was calculated correctly. The 10% rate applies to the first month's booking value.",
  "Your referral link is working correctly! The tracking cookie is set for 30 days. Would you like me to generate a new tracking URL?",
  "I've found the information you need. Is there anything else I can help you with?",
  "That's a great question! Let me connect you with a human support agent for more detailed assistance.",
];

const Support = () => {
  const [messages, setMessages] = useState(initialChatMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      type: "user" as const,
      message: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const botResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        message: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleNewTicket = () => {
    toast({
      title: "Create New Ticket",
      description: "Opening ticket creation form...",
    });
  };

  const handleViewTicket = (ticketId: string) => {
    toast({
      title: "Opening Ticket",
      description: `Viewing ticket ${ticketId}`,
    });
  };

  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          <span className="text-primary italic">Support</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Get help with AI-powered chat or raise a ticket
        </p>
      </div>

      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="chat" className="gap-2">
            <Bot className="w-4 h-4" />
            AI Chat
          </TabsTrigger>
          <TabsTrigger value="tickets" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            My Tickets
          </TabsTrigger>
          <TabsTrigger value="faq" className="gap-2">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </TabsTrigger>
        </TabsList>

        {/* AI Chat */}
        <TabsContent value="chat">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 bg-background border border-border rounded-xl overflow-hidden">
              <div className="bg-muted/30 border-b border-border px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">FlashSpace AI Assistant</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
                <Badge className="ml-auto gap-1">
                  <Sparkles className="w-3 h-3" />
                  AI Powered
                </Badge>
              </div>

              <ScrollArea className="h-[400px] p-6">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 ${msg.type === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        msg.type === "bot" ? "bg-primary/10" : "bg-muted"
                      }`}>
                        {msg.type === "bot" ? (
                          <Bot className="w-4 h-4 text-primary" />
                        ) : (
                          <User className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                      <div className={`max-w-[80%] ${msg.type === "user" ? "text-right" : ""}`}>
                        <div className={`inline-block rounded-2xl px-4 py-2 ${
                          msg.type === "bot" 
                            ? "bg-muted/50 text-foreground" 
                            : "bg-primary text-primary-foreground"
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <div className="bg-muted/50 rounded-2xl px-4 py-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="border-t border-border p-4">
                <div className="flex gap-3">
                  <Input
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button className="gap-2" onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                    Send
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  AI will escalate to human support when needed
                </p>
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone Support</p>
                      <p className="text-xs text-muted-foreground">+91 80 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email Support</p>
                      <p className="text-xs text-muted-foreground">partners@flashspace.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Business Hours</p>
                      <p className="text-xs text-muted-foreground">Mon-Sat, 9AM - 7PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-between">
                    <span className="flex items-center gap-2">
                      <Book className="w-4 h-4" />
                      Partner Guide
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Commission Policy
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4" />
                      Video Tutorials
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tickets */}
        <TabsContent value="tickets">
          <div className="bg-background border border-border rounded-xl">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search tickets..." className="pl-10" />
              </div>
              <Button className="gap-2" onClick={handleNewTicket}>
                <Plus className="w-4 h-4" />
                New Ticket
              </Button>
            </div>

            <div className="divide-y divide-border">
              {tickets.map((ticket) => (
                <div 
                  key={ticket.id}
                  className="p-4 hover:bg-muted/30 transition-colors cursor-pointer"
                  onClick={() => handleViewTicket(ticket.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="font-mono text-sm font-medium text-primary">{ticket.id}</span>
                      <h4 className="font-semibold text-foreground">{ticket.subject}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status.replace("-", " ")}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Created: {ticket.created}</span>
                    <span>Last update: {ticket.lastUpdate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* FAQ */}
        <TabsContent value="faq">
          <div className="grid gap-6 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Support;
