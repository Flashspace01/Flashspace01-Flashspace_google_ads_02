import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Calendar, Mail, Phone, Building2, TrendingUp, FileText, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Client {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone?: string;
  plan: string;
  space: string;
  startDate: string;
  renewal: string;
  revenue: string;
  status: string;
  healthScore: number;
}

interface ClientViewModalProps {
  client: Client | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenChat: () => void;
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>;
    case "at_risk":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">At Risk</Badge>;
    case "churned":
      return <Badge variant="secondary">Churned</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getHealthColor = (score: number) => {
  if (score >= 70) return "bg-green-500";
  if (score >= 50) return "bg-yellow-500";
  return "bg-red-500";
};

export const ClientViewModal = ({ client, open, onOpenChange, onOpenChat }: ClientViewModalProps) => {
  if (!client) return null;

  const handleDownloadReport = () => {
    toast({
      title: "Generating Report",
      description: `Client report for ${client.name} is being generated.`,
    });
  };

  const handleViewInvoices = () => {
    toast({
      title: "Loading Invoices",
      description: `Fetching invoices for ${client.name}...`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Client Details</span>
            {getStatusBadge(client.status)}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Client Header */}
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground">{client.name}</h3>
              <p className="text-muted-foreground">{client.contact}</p>
              <p className="text-sm text-muted-foreground font-mono">{client.id}</p>
            </div>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{client.phone || "+91 98765 43210"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{client.space}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Subscription Details</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-primary" />
                  <Badge variant="outline">{client.plan}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Started: {client.startDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Renewal: {client.renewal}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Health & Revenue */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Health Score</span>
                <span className="text-2xl font-bold text-foreground">{client.healthScore}</span>
              </div>
              <Progress value={client.healthScore} className={`h-2 ${getHealthColor(client.healthScore)}`} />
              <p className="text-xs text-muted-foreground mt-2">
                {client.healthScore >= 70 ? "Client is highly engaged" : 
                 client.healthScore >= 50 ? "Needs attention" : "Critical - immediate action required"}
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Monthly Revenue</span>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-foreground">{client.revenue}</p>
              <p className="text-xs text-muted-foreground mt-2">Lifetime value: ₹{(parseInt(client.revenue.replace(/[₹,]/g, '')) * 12).toLocaleString()}</p>
            </div>
          </div>

          {/* Activity Summary */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-3">Recent Activity</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last login</span>
                <span className="text-foreground">2 days ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Support tickets (30 days)</span>
                <span className="text-foreground">2 tickets</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mail received (30 days)</span>
                <span className="text-foreground">15 items</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2" onClick={handleViewInvoices}>
              <FileText className="w-4 h-4" />
              View Invoices
            </Button>
            <Button variant="outline" className="flex-1 gap-2" onClick={handleDownloadReport}>
              <TrendingUp className="w-4 h-4" />
              Download Report
            </Button>
            <Button className="flex-1 gap-2" onClick={() => {
              onOpenChange(false);
              onOpenChat();
            }}>
              <MessageSquare className="w-4 h-4" />
              Start Chat
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
