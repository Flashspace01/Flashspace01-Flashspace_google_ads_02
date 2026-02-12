import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Printer, Share2, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Invoice {
  id: string;
  client: string;
  amount: string;
  commission?: string;
  date: string;
  dueDate: string;
  status: string;
  clientAddress?: string;
  clientGST?: string;
  items?: { description: string; qty: number; rate: string; total: string }[];
}

interface InvoiceViewModalProps {
  invoice: Invoice | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "paid":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "overdue":
      return "bg-red-100 text-red-700";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const InvoiceViewModal = ({ invoice, open, onOpenChange }: InvoiceViewModalProps) => {
  if (!invoice) return null;

  const defaultItems = [
    { description: "Virtual Office Premium - Monthly", qty: 1, rate: "₹12,000", total: "₹12,000" },
    { description: "GST Registration Support", qty: 1, rate: "₹2,000", total: "₹2,000" },
    { description: "Mail Handling Fee", qty: 1, rate: "₹1,000", total: "₹1,000" },
  ];

  const items = invoice.items || defaultItems;

  const handleDownload = () => {
    toast({
      title: "Downloading Invoice",
      description: `Invoice ${invoice.id} is being downloaded as PDF.`,
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Dialog Opened",
      description: "Please select your printer to print the invoice.",
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: `Invoice ${invoice.id}`,
      text: `Invoice for ${invoice.client} - Amount: ${invoice.amount}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast({ title: "Shared Successfully" });
      } catch (err) {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(`Invoice ${invoice.id} - ${invoice.client}: ${invoice.amount}`);
      toast({
        title: "Copied to Clipboard",
        description: "Invoice details have been copied to clipboard.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Invoice {invoice.id}</span>
            <Badge className={getStatusColor(invoice.status)}>
              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        {/* Invoice Content */}
        <div className="space-y-6 print:p-4">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-border pb-4">
            <div>
              <h2 className="text-2xl font-bold text-primary">FlashSpace</h2>
              <p className="text-sm text-muted-foreground">Virtual Office Solutions</p>
              <p className="text-xs text-muted-foreground mt-1">
                123 Business Hub, Bandra Kurla Complex<br />
                Mumbai, Maharashtra 400051<br />
                GSTIN: 27AABCT1234F1ZH
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Invoice Date</p>
              <p className="font-medium text-foreground">{invoice.date}</p>
              <p className="text-sm text-muted-foreground mt-2">Due Date</p>
              <p className="font-medium text-foreground">{invoice.dueDate}</p>
            </div>
          </div>

          {/* Bill To */}
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm font-medium text-muted-foreground mb-1">Bill To</p>
            <p className="font-semibold text-foreground">{invoice.client}</p>
            <p className="text-sm text-muted-foreground">
              {invoice.clientAddress || "456 Tech Park, Sector 5, Noida, UP 201301"}
            </p>
            <p className="text-sm text-muted-foreground">
              GSTIN: {invoice.clientGST || "09AABCT5678F1ZK"}
            </p>
          </div>

          {/* Items Table */}
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 text-sm font-semibold text-foreground">Description</th>
                  <th className="text-center p-3 text-sm font-semibold text-foreground">Qty</th>
                  <th className="text-right p-3 text-sm font-semibold text-foreground">Rate</th>
                  <th className="text-right p-3 text-sm font-semibold text-foreground">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-3 text-sm text-foreground">{item.description}</td>
                    <td className="p-3 text-sm text-center text-foreground">{item.qty}</td>
                    <td className="p-3 text-sm text-right text-foreground">{item.rate}</td>
                    <td className="p-3 text-sm text-right font-medium text-foreground">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">{invoice.amount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">CGST (9%)</span>
                <span className="text-foreground">₹1,350</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">SGST (9%)</span>
                <span className="text-foreground">₹1,350</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-border pt-2">
                <span className="text-foreground">Total</span>
                <span className="text-primary">{invoice.amount}</span>
              </div>
              {invoice.commission && (
                <div className="flex justify-between text-sm text-green-600 bg-green-50 p-2 rounded">
                  <span>Your Commission</span>
                  <span className="font-semibold">{invoice.commission}</span>
                </div>
              )}
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-muted/30 rounded-lg p-4 text-sm">
            <p className="font-medium text-foreground mb-2">Payment Details</p>
            <div className="grid grid-cols-2 gap-2 text-muted-foreground">
              <p>Bank: HDFC Bank</p>
              <p>Account: 50200012345678</p>
              <p>IFSC: HDFC0001234</p>
              <p>UPI: flashspace@hdfcbank</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end print:hidden">
            <Button variant="outline" onClick={handleShare} className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" onClick={handlePrint} className="gap-2">
              <Printer className="w-4 h-4" />
              Print
            </Button>
            <Button onClick={handleDownload} className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
