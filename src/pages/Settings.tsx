import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Bell, Shield, Globe, Palette, CreditCard, LogOut, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="w-full justify-start bg-muted/50 p-1 rounded-xl h-auto flex-wrap">
            <TabsTrigger value="profile" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm gap-2 text-sm">
              <User className="w-4 h-4" /> Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm gap-2 text-sm">
              <Bell className="w-4 h-4" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm gap-2 text-sm">
              <Shield className="w-4 h-4" /> Privacy
            </TabsTrigger>
            <TabsTrigger value="preferences" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm gap-2 text-sm">
              <Palette className="w-4 h-4" /> Preferences
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">Personal Information</CardTitle>
                <CardDescription>Update your profile details and contact info.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">JD</AvatarFallback>
                    </Avatar>
                    <button className="absolute bottom-0 right-0 p-1.5 bg-primary text-primary-foreground rounded-full shadow-md hover:bg-primary/90 transition-colors">
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">John Doe</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input defaultValue="John" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input defaultValue="Doe" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" defaultValue="john.doe@example.com" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input type="tel" defaultValue="+91 98765 43210" className="rounded-xl" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Company</Label>
                    <Input defaultValue="Acme Corp" className="rounded-xl" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="rounded-xl">Save Changes</Button>
                </div>
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
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">Notification Preferences</CardTitle>
                <CardDescription>Choose how and when you want to be notified.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  { label: "Booking Confirmations", desc: "Get notified when a booking is confirmed", defaultChecked: true },
                  { label: "Promotional Emails", desc: "Receive offers and workspace deals", defaultChecked: false },
                  { label: "Payment Reminders", desc: "Reminders for upcoming payments", defaultChecked: true },
                  { label: "New Workspace Alerts", desc: "When new spaces are listed in your city", defaultChecked: true },
                  { label: "Push Notifications", desc: "Browser push notifications", defaultChecked: false },
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
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">Privacy & Security</CardTitle>
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
                  { label: "Two-Factor Authentication", desc: "Add an extra layer of security", defaultChecked: false },
                  { label: "Profile Visibility", desc: "Allow others to see your profile", defaultChecked: true },
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
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">App Preferences</CardTitle>
                <CardDescription>Customise your workspace experience.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
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
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
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
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
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
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
