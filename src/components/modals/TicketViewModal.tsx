import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, AlertCircle, CheckCircle, Send, User, Bot } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Ticket {
  id: string;
  subject: string;
  client: string;
  priority: string;
  category: string;
  assignee: string;
  created: string;
  deadline: string;
  status: string;
  description?: string;
}

interface TicketViewModalProps {
  ticket: Ticket | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-700";
    case "medium":
      return "bg-yellow-100 text-yellow-700";
    case "low":
      return "bg-green-100 text-green-700";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "open":
      return <AlertCircle className="w-4 h-4" />;
    case "in_progress":
      return <Clock className="w-4 h-4" />;
    case "resolved":
      return <CheckCircle className="w-4 h-4" />;
    default:
      return <AlertCircle className="w-4 h-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "open":
      return "bg-blue-100 text-blue-700";
    case "in_progress":
      return "bg-yellow-100 text-yellow-700";
    case "escalated":
      return "bg-red-100 text-red-700";
    case "resolved":
      return "bg-green-100 text-green-700";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const TicketViewModal = ({ ticket, open, onOpenChange }: TicketViewModalProps) => {
  const [reply, setReply] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "client",
      name: ticket?.client || "Client",
      message: ticket?.description || "Hi, I'm facing an issue with the mail forwarding. My mails are getting delayed by 2-3 days. Please help resolve this urgently.",
      time: "2 hours ago"
    },
    {
      id: 2,
      sender: "support",
      name: "Support Team",
      message: "Thank you for reaching out. We're looking into this issue. Can you please confirm your registered address and the expected forwarding address?",
      time: "1 hour ago"
    },
  ]);

  if (!ticket) return null;

  const handleSendReply = () => {
    if (!reply.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "support",
      name: "You",
      message: reply,
      time: "Just now"
    };

    setMessages([...messages, newMessage]);
    setReply("");

    toast({
      title: "Reply Sent",
      description: "Your response has been sent to the client.",
    });
  };

  const handleResolve = () => {
    toast({
      title: "Ticket Resolved",
      description: `Ticket ${ticket.id} has been marked as resolved.`,
    });
    onOpenChange(false);
  };

  const handleEscalate = () => {
    toast({
      title: "Ticket Escalated",
      description: `Ticket ${ticket.id} has been escalated to senior support.`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="font-mono">{ticket.id}</span>
            <div className="flex gap-2">
              <Badge className={getPriorityColor(ticket.priority)}>
                {ticket.priority}
              </Badge>
              <Badge className={getStatusColor(ticket.status)}>
                {getStatusIcon(ticket.status)}
                <span className="ml-1">{ticket.status.replace("_", " ")}</span>
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Ticket Info */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">{ticket.subject}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Client: </span>
                <span className="text-foreground">{ticket.client}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Category: </span>
                <Badge variant="outline">{ticket.category}</Badge>
              </div>
              <div>
                <span className="text-muted-foreground">Assigned to: </span>
                <span className="text-foreground">{ticket.assignee}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Deadline: </span>
                <span className="text-foreground">{ticket.deadline}</span>
              </div>
            </div>
          </div>

          {/* Conversation */}
          <div className="border border-border rounded-lg">
            <div className="p-3 border-b border-border bg-muted/30">
              <h4 className="font-semibold text-foreground text-sm">Conversation</h4>
            </div>
            <ScrollArea className="h-[200px] p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className={msg.sender === "client" ? "bg-primary/10 text-primary" : "bg-muted"}>
                        {msg.sender === "client" ? <User className="w-4 h-4" /> : "S"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground text-sm">{msg.name}</span>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-sm text-foreground mt-1">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Reply Box */}
          <div className="space-y-2">
            <Textarea
              placeholder="Type your reply..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              rows={3}
            />
            <div className="flex justify-between gap-2">
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleEscalate}>
                  Escalate
                </Button>
                <Button variant="outline" className="text-green-600 hover:text-green-700" onClick={handleResolve}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Resolve
                </Button>
              </div>
              <Button onClick={handleSendReply} className="gap-2">
                <Send className="w-4 h-4" />
                Send Reply
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
