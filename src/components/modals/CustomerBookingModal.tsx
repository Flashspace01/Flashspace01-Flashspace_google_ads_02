import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Clock, CheckCircle, XCircle, Download, MessageSquare, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Booking {
  id: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  status: string;
  price: string;
}

interface CustomerBookingModalProps {
  booking: Booking | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700";
    case "upcoming":
      return "bg-blue-100 text-blue-700";
    case "completed":
      return "bg-muted text-muted-foreground";
    case "cancelled":
      return "bg-red-100 text-red-700";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const CustomerBookingModal = ({ booking, open, onOpenChange }: CustomerBookingModalProps) => {
  if (!booking) return null;

  const handleDownloadInvoice = () => {
    toast({
      title: "Downloading Invoice",
      description: `Invoice for ${booking.id} is being downloaded.`,
    });
  };

  const handleDownloadAgreement = () => {
    toast({
      title: "Downloading Agreement",
      description: `Agreement for ${booking.id} is being downloaded.`,
    });
  };

  const handleContactSupport = () => {
    toast({
      title: "Opening Support Chat",
      description: "Connecting you to support...",
    });
  };

  const handleCancelBooking = () => {
    toast({
      title: "Cancellation Request",
      description: "Your cancellation request has been submitted. Our team will contact you shortly.",
      variant: "destructive",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Booking Details</span>
            <Badge className={getStatusColor(booking.status)}>
              {booking.status === "active" && <CheckCircle className="w-3 h-3 mr-1" />}
              {booking.status === "upcoming" && <Clock className="w-3 h-3 mr-1" />}
              {booking.status === "cancelled" && <XCircle className="w-3 h-3 mr-1" />}
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Booking ID */}
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Booking ID</p>
            <p className="text-lg font-mono font-bold text-primary">{booking.id}</p>
          </div>

          {/* Booking Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Booking Type</span>
              <Badge variant="outline">{booking.type}</Badge>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="text-foreground">{booking.location}</p>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <p className="text-foreground">{booking.startDate} - {booking.endDate}</p>
            </div>
          </div>

          <Separator />

          {/* Price */}
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Amount</span>
              <span className="text-2xl font-bold text-foreground">{booking.price}</span>
            </div>
          </div>

          {/* Included Services */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Included Services</h4>
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Business Address Registration</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Mail Handling & Forwarding</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>GST Registration Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Meeting Room Access (4 hrs/month)</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button variant="outline" className="gap-2" onClick={handleDownloadInvoice}>
              <Download className="w-4 h-4" />
              Invoice
            </Button>
            <Button variant="outline" className="gap-2" onClick={handleDownloadAgreement}>
              <FileText className="w-4 h-4" />
              Agreement
            </Button>
            <Button className="gap-2" onClick={handleContactSupport}>
              <MessageSquare className="w-4 h-4" />
              Support
            </Button>
            {booking.status !== "completed" && booking.status !== "cancelled" && (
              <Button variant="destructive" className="gap-2" onClick={handleCancelBooking}>
                <XCircle className="w-4 h-4" />
                Cancel
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
