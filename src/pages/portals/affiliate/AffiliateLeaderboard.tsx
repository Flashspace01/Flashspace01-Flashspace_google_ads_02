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
  Medal,
  Crown,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const nationalLeaders = [
  { rank: 1, name: "Rajesh Kumar", city: "Mumbai", referrals: 156, earnings: "₹12.5L", conversion: "42%" },
  { rank: 2, name: "Priya Sharma", city: "Delhi", referrals: 134, earnings: "₹10.2L", conversion: "38%" },
  { rank: 3, name: "Amit Patel", city: "Bangalore", referrals: 98, earnings: "₹8.5L", conversion: "45%" },
  { rank: 4, name: "Sneha Reddy", city: "Hyderabad", referrals: 87, earnings: "₹6.8L", conversion: "35%" },
  { rank: 5, name: "Vikram Singh", city: "Chennai", referrals: 76, earnings: "₹5.9L", conversion: "40%" },
  { rank: 8, name: "You", city: "Mumbai", referrals: 34, earnings: "₹2.8L", conversion: "38%", isYou: true },
];

const regionalLeaders = [
  { rank: 1, name: "You", city: "Mumbai", referrals: 34, earnings: "₹2.8L", conversion: "38%", isYou: true },
  { rank: 2, name: "Arun Mehta", city: "Mumbai", referrals: 28, earnings: "₹2.2L", conversion: "35%" },
  { rank: 3, name: "Kavita Joshi", city: "Pune", referrals: 24, earnings: "₹1.9L", conversion: "32%" },
  { rank: 4, name: "Rohit Desai", city: "Mumbai", referrals: 21, earnings: "₹1.6L", conversion: "30%" },
  { rank: 5, name: "Meera Shah", city: "Thane", referrals: 18, earnings: "₹1.4L", conversion: "28%" },
];

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
  if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
  if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
  return null;
};

const getRankBg = (rank: number, isYou?: boolean) => {
  if (isYou) return "bg-primary/5 border-primary/30";
  if (rank === 1) return "bg-yellow-50 border-yellow-200";
  if (rank === 2) return "bg-gray-50 border-gray-200";
  if (rank === 3) return "bg-amber-50 border-amber-200";
  return "bg-background border-border";
};

const AffiliateLeaderboard = () => {
  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Affiliate <span className="text-primary italic">Leaderboard</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          See how you rank against other affiliates
        </p>
      </div>

      {/* Your Position */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
              #8
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Your Position (National)</h3>
              <p className="text-muted-foreground">Top 10% of all affiliates</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-extrabold text-foreground">₹2.8L</p>
            <p className="text-sm text-muted-foreground">Total Earnings</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="national" className="space-y-6">
        <TabsList>
          <TabsTrigger value="national">National</TabsTrigger>
          <TabsTrigger value="regional">Regional (West)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="national">
          <div className="space-y-4">
            {nationalLeaders.map((person) => (
              <div key={person.rank} className={`rounded-xl p-5 border ${getRankBg(person.rank, person.isYou)}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                    {getRankIcon(person.rank) || `#${person.rank}`}
                  </div>
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={`${person.isYou ? 'bg-primary text-primary-foreground' : 'bg-muted'} font-semibold`}>
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-foreground">{person.name}</h3>
                      {person.isYou && <Badge className="bg-primary text-primary-foreground">You</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{person.city}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                      <p className="text-2xl font-extrabold text-foreground">{person.referrals}</p>
                      <p className="text-xs text-muted-foreground">Referrals</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-foreground">{person.earnings}</p>
                      <p className="text-xs text-muted-foreground">Earnings</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-foreground">{person.conversion}</p>
                      <p className="text-xs text-muted-foreground">Conversion</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="regional">
          <div className="space-y-4">
            {regionalLeaders.map((person) => (
              <div key={person.rank} className={`rounded-xl p-5 border ${getRankBg(person.rank, person.isYou)}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                    {getRankIcon(person.rank) || `#${person.rank}`}
                  </div>
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={`${person.isYou ? 'bg-primary text-primary-foreground' : 'bg-muted'} font-semibold`}>
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-foreground">{person.name}</h3>
                      {person.isYou && <Badge className="bg-primary text-primary-foreground">You</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{person.city}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                      <p className="text-2xl font-extrabold text-foreground">{person.referrals}</p>
                      <p className="text-xs text-muted-foreground">Referrals</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-foreground">{person.earnings}</p>
                      <p className="text-xs text-muted-foreground">Earnings</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-foreground">{person.conversion}</p>
                      <p className="text-xs text-muted-foreground">Conversion</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default AffiliateLeaderboard;
