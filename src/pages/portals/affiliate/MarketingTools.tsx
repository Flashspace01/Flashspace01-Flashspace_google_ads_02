import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  LayoutDashboard, 
  Users,
  TrendingUp,
  Wallet,
  Receipt,
  Target,
  FileText,
  Send,
  Trophy,
  MessageSquare,
  Link,
  Copy,
  QrCode,
  Download,
  Share2,
  BarChart3,
  ExternalLink,
  Check
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const navItems = [
  { label: "Dashboard", href: "/affiliate-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Booking Management", href: "/affiliate-portal/bookings", icon: <Users className="w-5 h-5" /> },
  { label: "Revenue Dashboard", href: "/affiliate-portal/revenue", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Payouts", href: "/affiliate-portal/payouts", icon: <Wallet className="w-5 h-5" /> },
  { label: "Invoices", href: "/affiliate-portal/invoices", icon: <Receipt className="w-5 h-5" /> },
  { label: "Lead Management", href: "/affiliate-portal/leads", icon: <Target className="w-5 h-5" /> },
  { label: "Quotation Generator", href: "/affiliate-portal/quotations", icon: <FileText className="w-5 h-5" /> },
  { label: "Marketing Tools", href: "/affiliate-portal/marketing", icon: <Send className="w-5 h-5" /> },
  { label: "Leaderboard", href: "/affiliate-portal/leaderboard", icon: <Trophy className="w-5 h-5" /> },
  { label: "Support", href: "/affiliate-portal/support", icon: <MessageSquare className="w-5 h-5" /> },
];

const referralLinks = [
  { name: "Main Referral Link", url: "flashspace.com/ref/AFF123", clicks: 245, conversions: 34, conversion_rate: "14%" },
  { name: "Virtual Office Campaign", url: "flashspace.com/ref/AFF123-vo", clicks: 89, conversions: 18, conversion_rate: "20%" },
  { name: "Team Space Promo", url: "flashspace.com/ref/AFF123-ts", clicks: 56, conversions: 8, conversion_rate: "14%" },
];

const marketingAssets = [
  { name: "FlashSpace Brand Kit", type: "ZIP", size: "12 MB", downloads: 45 },
  { name: "Social Media Templates", type: "Canva", size: "-", downloads: 128 },
  { name: "Email Templates", type: "HTML", size: "2.4 MB", downloads: 67 },
  { name: "Presentation Deck", type: "PPT", size: "8.5 MB", downloads: 34 },
  { name: "Product Brochure", type: "PDF", size: "4.2 MB", downloads: 89 },
];

const MarketingTools = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const mainReferralLink = "https://flashspace.com/ref/AFF123";

  const handleCopy = async (url: string, linkName: string) => {
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    await navigator.clipboard.writeText(fullUrl);
    setCopiedLink(linkName);
    toast({
      title: "Link Copied!",
      description: "Referral link has been copied to clipboard.",
    });
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleShare = async (url: string, name: string) => {
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    const shareData = {
      title: `FlashSpace - ${name}`,
      text: `Check out FlashSpace for premium virtual office and coworking solutions!`,
      url: fullUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast({ title: "Shared Successfully!" });
      } catch (err) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(fullUrl);
      toast({
        title: "Link Copied",
        description: "Share link copied to clipboard.",
      });
    }
  };

  const handleDownload = (assetName: string) => {
    toast({
      title: "Downloading...",
      description: `${assetName} is being downloaded.`,
    });
  };

  const handleShowQR = () => {
    toast({
      title: "QR Code Generated",
      description: "Your referral QR code is ready for download.",
    });
  };

  const handleDownloadQR = () => {
    toast({
      title: "Downloading QR Code",
      description: "QR code PNG is being downloaded.",
    });
  };

  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Marketing <span className="text-primary italic">Tools</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Referral links, assets, and promotional materials
        </p>
      </div>

      <Tabs defaultValue="links" className="space-y-6">
        <TabsList>
          <TabsTrigger value="links">Referral Links</TabsTrigger>
          <TabsTrigger value="assets">Marketing Assets</TabsTrigger>
          <TabsTrigger value="qr">QR Codes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="links">
          <div className="space-y-4">
            {/* Main Referral Link */}
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Your Unique Referral Link</h3>
              <div className="flex gap-2 flex-wrap">
                <Input value={mainReferralLink} readOnly className="flex-1 min-w-[200px] bg-muted" />
                <Button variant="outline" onClick={() => handleCopy(mainReferralLink, "main")}>
                  {copiedLink === "main" ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copiedLink === "main" ? "Copied!" : "Copy"}
                </Button>
                <Button variant="outline" onClick={handleShowQR}>
                  <QrCode className="w-4 h-4 mr-2" />
                  QR Code
                </Button>
                <Button onClick={() => handleShare(mainReferralLink, "Main Referral")}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Link Performance */}
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold text-foreground">Link Performance</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 text-sm font-semibold text-foreground">Campaign</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground">Link</th>
                      <th className="text-right p-4 text-sm font-semibold text-foreground">Clicks</th>
                      <th className="text-right p-4 text-sm font-semibold text-foreground">Conversions</th>
                      <th className="text-right p-4 text-sm font-semibold text-foreground">Rate</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referralLinks.map((link) => (
                      <tr key={link.name} className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">{link.name}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2 text-sm text-primary">
                            <Link className="w-3 h-3" />
                            {link.url}
                          </div>
                        </td>
                        <td className="p-4 text-right text-muted-foreground">{link.clicks}</td>
                        <td className="p-4 text-right font-semibold text-foreground">{link.conversions}</td>
                        <td className="p-4 text-right">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{link.conversion_rate}</Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-1">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleCopy(link.url, link.name)}
                              className="bg-primary/10 hover:bg-primary/20"
                            >
                              {copiedLink === link.name ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-primary" />}
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleShare(link.url, link.name)}
                              className="bg-primary/10 hover:bg-primary/20"
                            >
                              <Share2 className="w-4 h-4 text-primary" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <BarChart3 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="assets">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marketingAssets.map((asset) => (
              <div key={asset.name} className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="outline">{asset.type}</Badge>
                </div>
                <h4 className="font-medium text-foreground mb-1">{asset.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {asset.size !== '-' ? `${asset.size} • ` : ''}{asset.downloads} downloads
                </p>
                <Button variant="outline" className="w-full" onClick={() => handleDownload(asset.name)}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="qr">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background border border-border rounded-xl p-6 text-center">
              <div className="w-40 h-40 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-foreground/90 rounded" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='white' width='100' height='100'/%3E%3Crect fill='black' x='10' y='10' width='20' height='20'/%3E%3Crect fill='black' x='40' y='10' width='10' height='10'/%3E%3Crect fill='black' x='60' y='10' width='10' height='10'/%3E%3Crect fill='black' x='70' y='10' width='20' height='20'/%3E%3Crect fill='black' x='10' y='40' width='10' height='10'/%3E%3Crect fill='black' x='30' y='40' width='10' height='10'/%3E%3Crect fill='black' x='50' y='40' width='10' height='10'/%3E%3Crect fill='black' x='70' y='40' width='10' height='10'/%3E%3Crect fill='black' x='10' y='70' width='20' height='20'/%3E%3Crect fill='black' x='40' y='60' width='20' height='20'/%3E%3Crect fill='black' x='70' y='70' width='20' height='20'/%3E%3C/svg%3E")`,
                  backgroundSize: 'cover'
                }} />
              </div>
              <h4 className="font-medium text-foreground mb-2">Main Referral QR</h4>
              <Button variant="outline" size="sm" onClick={handleDownloadQR}>
                <Download className="w-4 h-4 mr-2" />
                Download PNG
              </Button>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 text-center">
              <div className="w-40 h-40 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                <QrCode className="w-20 h-20 text-muted-foreground" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Virtual Office QR</h4>
              <Button variant="outline" size="sm" onClick={handleDownloadQR}>
                <Download className="w-4 h-4 mr-2" />
                Download PNG
              </Button>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 text-center">
              <div className="w-40 h-40 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                <QrCode className="w-20 h-20 text-muted-foreground" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Team Space QR</h4>
              <Button variant="outline" size="sm" onClick={handleDownloadQR}>
                <Download className="w-4 h-4 mr-2" />
                Download PNG
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default MarketingTools;
