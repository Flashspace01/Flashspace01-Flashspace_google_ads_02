import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  LayoutDashboard, 
  Building2, 
  Calendar,
  Users,
  CreditCard,
  MessageSquare,
  Star,
  Ticket,
  Mail,
  UserPlus,
  Settings,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const navItems = [
  { label: "Dashboard", href: "/space-partner-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "My Spaces", href: "/space-partner-portal/spaces", icon: <Building2 className="w-5 h-5" /> },
  { label: "Booking Calendar", href: "/space-partner-portal/calendar", icon: <Calendar className="w-5 h-5" /> },
  { label: "Clients", href: "/space-partner-portal/clients", icon: <Users className="w-5 h-5" /> },
  { label: "Invoices & Payments", href: "/space-partner-portal/payments", icon: <CreditCard className="w-5 h-5" /> },
  { label: "Client Enquiries", href: "/space-partner-portal/enquiries", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Feedback & NPS", href: "/space-partner-portal/feedback", icon: <Star className="w-5 h-5" /> },
  { label: "Tickets & Tasks", href: "/space-partner-portal/tickets", icon: <Ticket className="w-5 h-5" /> },
  { label: "Mail & Visits", href: "/space-partner-portal/mail-visits", icon: <Mail className="w-5 h-5" /> },
  { label: "Team Members", href: "/space-partner-portal/team", icon: <UserPlus className="w-5 h-5" /> },
  { label: "Profile & KYC", href: "/space-partner-portal/profile", icon: <Settings className="w-5 h-5" /> },
];

const recentFeedback = [
  {
    id: 1,
    client: "Tech Innovations Pvt Ltd",
    rating: 5,
    comment: "Excellent service! The virtual office setup was seamless and the support team is very responsive.",
    date: "Feb 1, 2024",
    space: "Mumbai - BKC"
  },
  {
    id: 2,
    client: "StartupXYZ Solutions",
    rating: 4,
    comment: "Good experience overall. Meeting rooms are well-maintained. Would appreciate faster mail forwarding.",
    date: "Jan 28, 2024",
    space: "Delhi - CP"
  },
  {
    id: 3,
    client: "Global Consulting LLC",
    rating: 5,
    comment: "Professional environment and great location. Perfect for our business needs.",
    date: "Jan 25, 2024",
    space: "Bangalore - HSR"
  },
  {
    id: 4,
    client: "Design Studio Co",
    rating: 3,
    comment: "The space is good but the parking situation needs improvement.",
    date: "Jan 20, 2024",
    space: "Chennai - Anna Nagar"
  },
];

const npsBreakdown = [
  { label: "Promoters (9-10)", count: 45, percentage: 58, color: "bg-green-500" },
  { label: "Passives (7-8)", count: 25, percentage: 32, color: "bg-yellow-500" },
  { label: "Detractors (0-6)", count: 8, percentage: 10, color: "bg-red-500" },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star 
      key={i} 
      className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
    />
  ));
};

const FeedbackNPS = () => {
  const npsScore = 48; // Example NPS score
  
  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Feedback & <span className="text-primary italic">NPS</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Monitor client satisfaction and feedback
        </p>
      </div>

      {/* NPS Score Card */}
      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <div className="bg-background border border-border rounded-xl p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">Net Promoter Score</h3>
          <div className="flex items-center gap-4">
            <div className="text-5xl font-extrabold text-primary">{npsScore}</div>
            <div>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+5 from last month</span>
              </div>
              <p className="text-sm text-muted-foreground">Based on 78 responses</p>
            </div>
          </div>
        </div>
        
        <div className="bg-background border border-border rounded-xl p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">Average Rating</h3>
          <div className="flex items-center gap-4">
            <div className="text-5xl font-extrabold text-foreground">4.3</div>
            <div>
              <div className="flex items-center gap-1">
                {renderStars(4)}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Out of 5 stars</p>
            </div>
          </div>
        </div>
        
        <div className="bg-background border border-border rounded-xl p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-4">Response Rate</h3>
          <div className="flex items-center gap-4">
            <div className="text-5xl font-extrabold text-foreground">72%</div>
            <div>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+8% improvement</span>
              </div>
              <p className="text-sm text-muted-foreground">78 of 108 clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Feedback */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-semibold text-foreground">Recent Feedback</h2>
          
          {recentFeedback.map((feedback) => (
            <div key={feedback.id} className="bg-background border border-border rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{feedback.client}</h4>
                  <p className="text-sm text-muted-foreground">{feedback.space}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end">
                    {renderStars(feedback.rating)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{feedback.date}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{feedback.comment}</p>
            </div>
          ))}
        </div>
        
        {/* NPS Breakdown */}
        <div className="space-y-4">
          <div className="bg-background border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">NPS Breakdown</h3>
            <div className="space-y-4">
              {npsBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">{item.count} ({item.percentage}%)</span>
                  </div>
                  <Progress value={item.percentage} className={`h-2 ${item.color}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">AI Insight</h3>
            <p className="text-sm text-muted-foreground">
              Your NPS score of 48 is above industry average (35). Focus on improving parking facilities at Chennai location to convert more passives to promoters.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FeedbackNPS;
