import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  LayoutDashboard, 
  Users,
  TrendingUp,
  Ticket,
  BookOpen,
  Trophy,
  Target,
  Headphones,
  Calculator,
  FileText,
  Wallet,
  Receipt,
  Send,
  User,
  Bot,
  Search,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const navItems = [
  { label: "Dashboard", href: "/admin-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Sales Analytics", href: "/admin-portal/sales", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Lead Management", href: "/admin-portal/leads", icon: <Target className="w-5 h-5" /> },
  { label: "Client Management", href: "/admin-portal/clients", icon: <Users className="w-5 h-5" /> },
  { label: "Ticket System", href: "/admin-portal/tickets", icon: <Ticket className="w-5 h-5" /> },
  { label: "Support Chats", href: "/admin-portal/support", icon: <Headphones className="w-5 h-5" /> },
  { label: "Learning Hub", href: "/admin-portal/learning", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Leaderboard", href: "/admin-portal/leaderboard", icon: <Trophy className="w-5 h-5" /> },
  { label: "Revenue Dashboard", href: "/admin-portal/revenue", icon: <Wallet className="w-5 h-5" /> },
  { label: "Invoices", href: "/admin-portal/invoices", icon: <Receipt className="w-5 h-5" /> },
  { label: "Receivable/Payable", href: "/admin-portal/finance", icon: <Calculator className="w-5 h-5" /> },
  { label: "Balance Sheet", href: "/admin-portal/balance", icon: <FileText className="w-5 h-5" /> },
];

const activeChats = [
  { id: 1, client: "Tech Innovations", message: "Need help with my booking", time: "2 min ago", unread: 3, status: "waiting" },
  { id: 2, client: "StartupXYZ", message: "Invoice query resolved", time: "15 min ago", unread: 0, status: "active" },
  { id: 3, client: "Global Consulting", message: "Thanks for the help!", time: "1 hr ago", unread: 0, status: "resolved" },
  { id: 4, client: "Design Studio", message: "Mail forwarding issue", time: "2 hrs ago", unread: 1, status: "waiting" },
];

const messages = [
  { id: 1, type: "client", message: "Hi, I need help with my mail forwarding request", time: "10:00 AM" },
  { id: 2, type: "bot", message: "Hello! I can help you with mail forwarding. Could you please share your booking ID?", time: "10:00 AM" },
  { id: 3, type: "client", message: "My booking ID is BO-2024-001", time: "10:02 AM" },
  { id: 4, type: "agent", message: "I'm taking over this chat. Let me check your booking details...", time: "10:03 AM" },
  { id: 5, type: "agent", message: "I found your booking. I see you have a pending mail item. Would you like me to arrange forwarding?", time: "10:04 AM" },
];

const SupportChats = () => {
  const [selectedChat, setSelectedChat] = useState(activeChats[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <DashboardLayout
      portalName="FlashSpace Admin"
      portalDescription="Complete platform management"
      navItems={navItems}
    >
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Support <span className="text-primary italic">Chats</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage live chats and take over from AI when needed
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-6">
        <div className="bg-background border border-border rounded-xl p-4">
          <p className="text-xl font-extrabold text-foreground">12</p>
          <p className="text-sm text-muted-foreground">Active Chats</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-4">
          <p className="text-xl font-extrabold text-yellow-600">5</p>
          <p className="text-sm text-muted-foreground">Waiting</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-4">
          <p className="text-xl font-extrabold text-green-600">89%</p>
          <p className="text-sm text-muted-foreground">AI Resolution</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-4">
          <p className="text-xl font-extrabold text-foreground">2.3 min</p>
          <p className="text-sm text-muted-foreground">Avg Response</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4 h-[550px]">
        {/* Chat List */}
        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search chats..." className="pl-10" />
            </div>
          </div>
          <ScrollArea className="h-[470px]">
            {activeChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`p-4 border-b border-border cursor-pointer hover:bg-muted/30 transition-colors ${
                  selectedChat.id === chat.id ? 'bg-muted/50' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{chat.client}</span>
                  {chat.unread > 0 && (
                    <Badge className="bg-primary text-primary-foreground text-xs">{chat.unread}</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{chat.time}</span>
                  <Badge variant={chat.status === 'waiting' ? 'destructive' : chat.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                    {chat.status}
                  </Badge>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-3 bg-background border border-border rounded-xl overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary/10 text-primary">TI</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-foreground">{selectedChat.client}</h3>
                <p className="text-sm text-muted-foreground">Client ID: CL-001</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Take Over</Button>
              <Button variant="outline" size="sm">View Client</Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'client' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`flex gap-2 max-w-[70%] ${msg.type === 'client' ? '' : 'flex-row-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.type === 'client' ? 'bg-muted' : msg.type === 'bot' ? 'bg-purple-100' : 'bg-primary'
                    }`}>
                      {msg.type === 'client' ? (
                        <User className="w-4 h-4 text-muted-foreground" />
                      ) : msg.type === 'bot' ? (
                        <Bot className="w-4 h-4 text-purple-600" />
                      ) : (
                        <Headphones className="w-4 h-4 text-primary-foreground" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      msg.type === 'client' ? 'bg-muted' : msg.type === 'bot' ? 'bg-purple-100' : 'bg-primary text-primary-foreground'
                    }`}>
                      {msg.type === 'bot' && <span className="text-xs text-purple-600 block mb-1">AI Bot</span>}
                      {msg.type === 'agent' && <span className="text-xs text-primary-foreground/70 block mb-1">You</span>}
                      <p className="text-sm">{msg.message}</p>
                      <span className={`text-xs mt-1 block ${msg.type === 'client' ? 'text-muted-foreground' : msg.type === 'bot' ? 'text-purple-500' : 'text-primary-foreground/70'}`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input 
                placeholder="Type your message..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
              />
              <Button>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SupportChats;
