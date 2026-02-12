import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Mail, 
  Calendar,
  CreditCard,
  Bell,
  HelpCircle,
  Package,
  CheckCircle,
  AlertCircle,
  Info,
  Settings
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const navItems = [
  { label: "Dashboard", href: "/customer-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "My Bookings", href: "/customer-portal/bookings", icon: <Package className="w-5 h-5" /> },
  { label: "Mail Records", href: "/customer-portal/mail", icon: <Mail className="w-5 h-5" /> },
  { label: "Visit Records", href: "/customer-portal/visits", icon: <Calendar className="w-5 h-5" /> },
  { label: "Payments", href: "/customer-portal/payments", icon: <CreditCard className="w-5 h-5" /> },
  { label: "Documents", href: "/customer-portal/documents", icon: <FileText className="w-5 h-5" /> },
  { label: "Chat Support", href: "/customer-portal/chat", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Notifications", href: "/customer-portal/notifications", icon: <Bell className="w-5 h-5" /> },
  { label: "Help Center", href: "/customer-portal/help", icon: <HelpCircle className="w-5 h-5" /> },
];

const notifications = [
  {
    id: 1,
    type: "alert",
    title: "Payment Due",
    message: "Your virtual office renewal payment of ₹15,000 is due on Feb 15, 2024",
    time: "2 hours ago",
    read: false
  },
  {
    id: 2,
    type: "success",
    title: "Mail Received",
    message: "A new parcel from HDFC Bank has been received at your Mumbai BKC office",
    time: "5 hours ago",
    read: false
  },
  {
    id: 3,
    type: "info",
    title: "Visitor Logged",
    message: "A visitor (GST Officer) was logged at your office for official verification",
    time: "1 day ago",
    read: true
  },
  {
    id: 4,
    type: "success",
    title: "Payment Successful",
    message: "Your payment of ₹800 for Day Pass booking has been processed successfully",
    time: "2 days ago",
    read: true
  },
  {
    id: 5,
    type: "info",
    title: "Document Verified",
    message: "Your GST Registration document has been verified successfully",
    time: "3 days ago",
    read: true
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "alert":
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    case "success":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "info":
      return <Info className="w-5 h-5 text-blue-500" />;
    default:
      return <Bell className="w-5 h-5 text-muted-foreground" />;
  }
};

const Notifications = () => {
  return (
    <DashboardLayout
      portalName="Customer Portal"
      portalDescription="Manage your workspace subscriptions"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            <span className="text-primary italic">Notifications</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Stay updated with all your workspace activities
          </p>
        </div>
        <Button variant="outline">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Notifications List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground">Recent Notifications</h2>
            <Button variant="ghost" size="sm">Mark all as read</Button>
          </div>
          
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`bg-background border rounded-xl p-4 flex gap-4 ${
                notification.read ? 'border-border' : 'border-primary/30 bg-primary/5'
              }`}
            >
              <div className="shrink-0 mt-1">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-foreground">{notification.title}</h3>
                  {!notification.read && (
                    <Badge className="bg-primary text-primary-foreground text-xs">New</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                <span className="text-xs text-muted-foreground mt-2 block">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Notification Settings */}
        <div className="space-y-4">
          <div className="bg-background border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">Notification Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">Payment Alerts</p>
                  <p className="text-xs text-muted-foreground">Get notified about payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">Mail Notifications</p>
                  <p className="text-xs text-muted-foreground">Updates about mail/parcels</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">Visit Alerts</p>
                  <p className="text-xs text-muted-foreground">Notify when visitors arrive</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">Marketing Updates</p>
                  <p className="text-xs text-muted-foreground">Offers and promotions</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
