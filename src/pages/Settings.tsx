import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, CreditCard, LogOut, ChevronRight, Bell, Smartphone, Mail, Globe, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Settings</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-20 space-y-8">
        {/* Notifications */}
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5 text-muted-foreground" /> Notifications
            </CardTitle>
            <CardDescription>Choose what updates you want to receive.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {[
              { label: "Email Notifications", desc: "Receive booking confirmations and updates via email", icon: <Mail className="w-4 h-4 text-muted-foreground" />, defaultChecked: true },
              { label: "Push Notifications", desc: "Get instant alerts on your device", icon: <Smartphone className="w-4 h-4 text-muted-foreground" />, defaultChecked: true },
              { label: "Promotional Offers", desc: "Receive deals and discounts on workspaces", icon: <Bell className="w-4 h-4 text-muted-foreground" />, defaultChecked: false },
              { label: "Booking Reminders", desc: "Get reminded before your upcoming bookings", icon: <Bell className="w-4 h-4 text-muted-foreground" />, defaultChecked: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <Switch defaultChecked={item.defaultChecked} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Billing */}
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-muted-foreground" /> Billing
            </CardTitle>
            <CardDescription>Manage your subscription and payment methods.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/40 border border-border/40">
              <div>
                <p className="font-medium text-foreground">Free Plan</p>
                <p className="text-sm text-muted-foreground">Basic workspace access</p>
              </div>
              <Button variant="outline" className="rounded-xl">Upgrade</Button>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-muted-foreground" /> Privacy & Security
            </CardTitle>
            <CardDescription>Manage your account security and data preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input type="password" placeholder="••••••••" className="rounded-xl" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>New Password</Label>
                <Input type="password" placeholder="••••••••" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Confirm Password</Label>
                <Input type="password" placeholder="••••••••" className="rounded-xl" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="rounded-xl">Update Password</Button>
            </div>

            <Separator />

            {[
              { label: "Two-Factor Authentication", desc: "Add an extra layer of security to your account", defaultChecked: false },
              { label: "Login Alerts", desc: "Get notified when someone logs into your account", defaultChecked: true },
              { label: "Session Management", desc: "Automatically log out after 30 days of inactivity", defaultChecked: true },
              { label: "Data Sharing", desc: "Share anonymised usage data to improve services", defaultChecked: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Switch defaultChecked={item.defaultChecked} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* App Preferences */}
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="w-5 h-5 text-muted-foreground" /> App Preferences
            </CardTitle>
            <CardDescription>Customise your workspace experience.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="ta">Tamil</SelectItem>
                    <SelectItem value="te">Telugu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Currency</Label>
                <Select defaultValue="inr">
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inr">₹ INR</SelectItem>
                    <SelectItem value="usd">$ USD</SelectItem>
                    <SelectItem value="eur">€ EUR</SelectItem>
                    <SelectItem value="gbp">£ GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Default City</Label>
                <Select defaultValue="delhi">
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Time Zone</Label>
                <Select defaultValue="ist">
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">EST (UTC-5)</SelectItem>
                    <SelectItem value="pst">PST (UTC-8)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {[
              { label: "Dark Mode", desc: "Use dark theme across the app", defaultChecked: false },
              { label: "Compact View", desc: "Show more content with less spacing", defaultChecked: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Switch defaultChecked={item.defaultChecked} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Help & Support */}
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-muted-foreground" /> Help & Support
            </CardTitle>
            <CardDescription>Get help or reach out to our team.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Help Centre", desc: "Browse FAQs and guides" },
              { label: "Contact Support", desc: "Reach our team via chat or email" },
              { label: "Terms of Service", desc: "Read our terms and conditions" },
              { label: "Privacy Policy", desc: "Understand how we use your data" },
            ].map((item) => (
              <button key={item.label} className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-muted/60 transition-colors group">
                <div className="text-left">
                  <p className="font-medium text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Delete Account */}
        <Card className="border-destructive/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-destructive">Delete Account</p>
                <p className="text-xs text-muted-foreground">Permanently delete your account and all data.</p>
              </div>
              <Button variant="destructive" size="sm" className="rounded-xl">Delete</Button>
            </div>
          </CardContent>
        </Card>

        {/* Sign Out */}
        <Card className="border-border/60">
          <CardContent className="pt-6">
            <button className="flex items-center justify-between w-full group">
              <div className="flex items-center gap-3 text-destructive">
                <LogOut className="w-5 h-5" />
                <span className="font-medium text-sm">Sign Out</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
