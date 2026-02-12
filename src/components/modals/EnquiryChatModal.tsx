import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, User, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Enquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  space: string;
  date: string;
  status: string;
}

interface EnquiryChatModalProps {
  enquiry: Enquiry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Message {
  id: number;
  sender: "client" | "partner";
  text: string;
  time: string;
}

export const EnquiryChatModal = ({ enquiry, open, onOpenChange }: EnquiryChatModalProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "client",
      text: `Hi, I'm interested in ${enquiry?.interest || "your services"}. Can you provide more details?`,
      time: "1 hour ago"
    },
  ]);

  if (!enquiry) return null;

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "partner",
      text: message,
      time: "Just now"
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate client response
    setTimeout(() => {
      const responses = [
        "That sounds great! What are the next steps?",
        "Can you share the pricing details?",
        "I'd like to schedule a visit to see the space.",
        "How soon can we start?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: "client",
        text: randomResponse,
        time: "Just now"
      }]);
    }, 1500);
  };

  const handleCall = () => {
    toast({
      title: "Initiating Call",
      description: `Calling ${enquiry.phone}...`,
    });
  };

  const handleEmail = () => {
    window.location.href = `mailto:${enquiry.email}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg h-[650px] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary/10 text-primary">
                {enquiry.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-foreground">{enquiry.name}</div>
              <div className="text-sm font-normal text-muted-foreground">{enquiry.company}</div>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Enquiry Details */}
        <div className="bg-muted/30 rounded-lg p-3 flex-shrink-0 space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline">{enquiry.interest}</Badge>
            <Badge className="bg-blue-100 text-blue-700">New Enquiry</Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {enquiry.space}
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              {enquiry.email}
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="text-xs h-7" onClick={handleCall}>
              <Phone className="w-3 h-3 mr-1" />
              Call
            </Button>
            <Button size="sm" variant="outline" className="text-xs h-7" onClick={handleEmail}>
              <Mail className="w-3 h-3 mr-1" />
              Email
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4 py-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === "partner" ? "flex-row-reverse" : ""}`}
              >
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback className={msg.sender === "client" ? "bg-primary/10 text-primary" : "bg-muted"}>
                    {msg.sender === "client" ? <User className="w-4 h-4" /> : "Y"}
                  </AvatarFallback>
                </Avatar>
                <div className={`flex flex-col ${msg.sender === "partner" ? "items-end" : "items-start"}`}>
                  <div
                    className={`rounded-2xl px-4 py-2 max-w-[280px] ${
                      msg.sender === "partner"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="flex gap-2 pt-4 border-t border-border flex-shrink-0">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
