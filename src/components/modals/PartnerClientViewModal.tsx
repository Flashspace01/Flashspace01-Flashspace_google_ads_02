import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Phone, Mail, FileText, MessageSquare, Building2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Client {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  plan: string;
  space: string;
  startDate: string;
  endDate: string;
  status: string;
  kycStatus: string;
}

interface PartnerClientViewModalProps {
  client: Client | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenChat?: () => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700";
    case "expiring":
      return "bg-yellow-100 text-yellow-700";
    case "expired":
      return "bg-red-100 text-red-700";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getKycColor = (status: string) => {
  switch (status) {
    case "verified":
      return "text-green-600 border-green-300";
    case "pending":
      return "text-yellow-600 border-yellow-300";
    default:
      return "text-muted-foreground border-muted";
  }
};

export const PartnerClientViewModal = ({ client, open, onOpenChange, onOpenChat }: PartnerClientViewModalProps) => {
  if (!client) return null;

  const handleDownloadAgreement = () => {
    toast({
      title: "Downloading Agreement",
      description: `Agreement for ${client.name} is being downloaded.`,
    });
  };

  const handleSendRenewal = () => {
    toast({
      title: "Renewal Reminder Sent",
      description: `Renewal reminder sent to ${client.contact} at ${client.email}`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Client Details</span>
            <Badge className={getStatusColor(client.status)}>
              {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Client ID */}
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Client ID</p>
            <p className="text-lg font-mono font-bold text-primary">{client.id}</p>
          </div>

          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">{client.name}</p>
                <p className="text-sm text-muted-foreground">{client.contact}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="text-foreground">{client.space}</p>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <p className="text-foreground">{client.startDate} to {client.endDate}</p>
            </div>
          </div>

          <Separator />

          {/* Plan Details */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Plan Details</h4>
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Plan Type</span>
                <Badge variant="outline">{client.plan}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">KYC Status</span>
                <Badge variant="outline" className={getKycColor(client.kycStatus)}>
                  {client.kycStatus === "verified" ? "KYC Verified" : "KYC Pending"}
                </Badge>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{client.email}</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{client.phone}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button variant="outline" className="gap-2" onClick={handleDownloadAgreement}>
              <FileText className="w-4 h-4" />
              Agreement
            </Button>
            <Button variant="outline" className="gap-2" onClick={handleSendRenewal}>
              <Mail className="w-4 h-4" />
              Send Renewal
            </Button>
            <Button className="col-span-2 gap-2" onClick={() => {
              onOpenChange(false);
              onOpenChat?.();
            }}>
              <MessageSquare className="w-4 h-4" />
              Chat with Client
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
