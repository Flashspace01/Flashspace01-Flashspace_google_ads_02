import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Building2, User, Phone, Mail, FileText, Download, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Booking {
  id: string;
  company: string;
  contact?: string;
  email?: string;
  phone?: string;
  plan: string;
  location: string;
  startDate: string;
  endDate: string;
  commission?: string;
  amount?: string;
  status: string;
}

interface BookingViewModalProps {
  booking: Booking | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700";
    case "pending_activation":
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "expired":
      return "bg-red-100 text-red-700";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const BookingViewModal = ({ booking, open, onOpenChange }: BookingViewModalProps) => {
  if (!booking) return null;

  const handleDownloadAgreement = () => {
    toast({
      title: "Downloading Agreement",
      description: `Agreement for ${booking.id} is being downloaded.`,
    });
  };

  const handleContactClient = () => {
    toast({
      title: "Opening Chat",
      description: `Starting chat with ${booking.company}...`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Booking Details</span>
            <Badge className={getStatusColor(booking.status)}>
              {booking.status.replace("_", " ").charAt(0).toUpperCase() + booking.status.replace("_", " ").slice(1)}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Booking ID */}
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Booking ID</p>
            <p className="text-lg font-mono font-bold text-primary">{booking.id}</p>
          </div>

          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">{booking.company}</p>
                <p className="text-sm text-muted-foreground">{booking.contact || "Contact Person"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="text-foreground">{booking.location}</p>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <p className="text-foreground">{booking.startDate} to {booking.endDate}</p>
            </div>
          </div>

          <Separator />

          {/* Plan Details */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Plan Details</h4>
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Plan Type</span>
                <Badge variant="outline">{booking.plan}</Badge>
              </div>
              {booking.amount && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Booking Amount</span>
                  <span className="font-semibold text-foreground">{booking.amount}</span>
                </div>
              )}
              {booking.commission && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Your Commission</span>
                  <span className="font-semibold text-green-600">{booking.commission}</span>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{booking.email || "contact@company.com"}</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{booking.phone || "+91 98765 43210"}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button variant="outline" className="flex-1 gap-2" onClick={handleDownloadAgreement}>
              <Download className="w-4 h-4" />
              Agreement
            </Button>
            <Button className="flex-1 gap-2" onClick={handleContactClient}>
              <MessageSquare className="w-4 h-4" />
              Contact
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
