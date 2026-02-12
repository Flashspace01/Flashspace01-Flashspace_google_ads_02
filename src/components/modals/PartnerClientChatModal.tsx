import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User } from "lucide-react";

interface Client {
  id: string;
  name: string;
  contact: string;
  email: string;
}

interface PartnerClientChatModalProps {
  client: Client | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Message {
  id: number;
  sender: "client" | "partner";
  text: string;
  time: string;
}

export const PartnerClientChatModal = ({ client, open, onOpenChange }: PartnerClientChatModalProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "client",
      text: "Hi, I wanted to check on the status of my mail forwarding setup.",
      time: "2 hours ago"
    },
    {
      id: 2,
      sender: "partner",
      text: "Hello! Your mail forwarding has been set up. You should start receiving mails within 24 hours.",
      time: "1 hour ago"
    },
    {
      id: 3,
      sender: "client",
      text: "Great, thank you! Also, can I book the meeting room for next Tuesday?",
      time: "45 min ago"
    },
  ]);

  if (!client) return null;

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
        "Thank you for your help!",
        "I'll get back to you on this.",
        "Perfect, that works for me.",
        "Can you provide more details?",
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg h-[600px] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary/10 text-primary">
                {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-foreground">{client.contact}</div>
              <div className="text-sm font-normal text-muted-foreground">{client.name}</div>
            </div>
          </DialogTitle>
        </DialogHeader>

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
