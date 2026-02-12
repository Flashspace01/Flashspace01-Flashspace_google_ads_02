import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Paperclip, Phone, Video } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Client {
  id: string;
  name: string;
  contact: string;
  email: string;
}

interface ClientChatModalProps {
  client: Client | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ClientChatModal = ({ client, open, onOpenChange }: ClientChatModalProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "client",
      name: client?.contact || "Client",
      message: "Hi, I wanted to inquire about upgrading my plan. Can you help?",
      time: "Yesterday, 3:45 PM"
    },
    {
      id: 2,
      sender: "admin",
      name: "You",
      message: "Of course! I'd be happy to help you with the upgrade. What plan are you currently on and what are you looking for?",
      time: "Yesterday, 4:00 PM"
    },
    {
      id: 3,
      sender: "client",
      name: client?.contact || "Client",
      message: "I'm on Virtual Office Premium. Looking for a dedicated desk setup now as the team is growing.",
      time: "Today, 10:15 AM"
    }
  ]);

  if (!client) return null;

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "admin",
      name: "You",
      message: message,
      time: "Just now"
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate client response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: "client",
        name: client.contact,
        message: "Thank you for the quick response! I'll review the options and get back to you.",
        time: "Just now"
      }]);
    }, 2000);

    toast({
      title: "Message Sent",
      description: "Your message has been delivered.",
    });
  };

  const handleCall = () => {
    toast({
      title: "Initiating Call",
      description: `Calling ${client.contact}...`,
    });
  };

  const handleVideoCall = () => {
    toast({
      title: "Starting Video Call",
      description: `Connecting video call with ${client.contact}...`,
    });
  };

  const handleAttachment = () => {
    toast({
      title: "Attach File",
      description: "File attachment dialog would open here.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg h-[600px] flex flex-col">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className="text-left">{client.contact}</DialogTitle>
                <p className="text-sm text-muted-foreground">{client.name}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={handleCall}>
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleVideoCall}>
                <Video className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4 py-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] ${msg.sender === "admin" ? "order-2" : "order-1"}`}>
                  {msg.sender === "client" && (
                    <div className="flex items-center gap-2 mb-1">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{msg.name}</span>
                    </div>
                  )}
                  <div 
                    className={`rounded-lg p-3 ${
                      msg.sender === "admin" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                  <p className={`text-xs text-muted-foreground mt-1 ${msg.sender === "admin" ? "text-right" : ""}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t pt-4">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={handleAttachment}>
              <Paperclip className="w-4 h-4" />
            </Button>
            <Textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={1}
              className="min-h-[40px] resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <Button onClick={handleSend} size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
