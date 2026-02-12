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
  Search,
  Book,
  Video,
  Phone,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const categories = [
  {
    title: "Getting Started",
    icon: Book,
    articles: 12
  },
  {
    title: "Bookings & Payments",
    icon: CreditCard,
    articles: 8
  },
  {
    title: "Mail & Visits",
    icon: Mail,
    articles: 6
  },
  {
    title: "Documents & KYC",
    icon: FileText,
    articles: 5
  },
];

const faqs = [
  {
    question: "How do I book a meeting room?",
    answer: "You can book a meeting room by navigating to the 'My Bookings' section and clicking on 'Book New'. Select 'Meeting Room' as the workspace type, choose your preferred location, date, and time slot, then confirm your booking."
  },
  {
    question: "How can I forward my mail to a different address?",
    answer: "Go to 'Mail Records' section, find the mail item you want to forward, and click 'Request Forward'. Enter the delivery address and confirm. You'll receive tracking updates once the mail is dispatched."
  },
  {
    question: "What documents are required for KYC verification?",
    answer: "For KYC verification, you need to submit: Company Registration Certificate, GST Registration (if applicable), PAN Card of the company, and ID proof of the authorized signatory. All documents should be clear and valid."
  },
  {
    question: "How do I renew my virtual office subscription?",
    answer: "Your subscription can be renewed from the 'Payments' section. You'll also receive automatic reminders before your subscription expires. Click on 'Pay Now' next to the renewal invoice to complete the payment."
  },
  {
    question: "Can I change my registered office address?",
    answer: "Yes, you can request an address change by contacting support through the Chat Support section. Our team will guide you through the process and handle any compliance requirements."
  },
];

const HelpCenter = () => {
  return (
    <DashboardLayout
      portalName="Customer Portal"
      portalDescription="Manage your workspace subscriptions"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Help <span className="text-primary italic">Center</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Find answers to your questions and get support
        </p>
      </div>

      {/* Search */}
      <div className="bg-background border border-border rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">How can we help you?</h2>
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search for help articles..." 
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Categories & FAQs */}
        <div className="lg:col-span-2 space-y-8">
          {/* Categories */}
          <div>
            <h2 className="font-semibold text-foreground mb-4">Browse by Category</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category) => (
                <div 
                  key={category.title}
                  className="bg-background border border-border rounded-xl p-4 hover:border-primary/30 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.articles} articles</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQs */}
          <div>
            <h2 className="font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="px-4 hover:no-underline">
                      <span className="text-left font-medium text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        
        {/* Contact Options */}
        <div className="space-y-4">
          <div className="bg-background border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">Need More Help?</h3>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="w-4 h-4 mr-3" />
                Chat with AI Support
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Video className="w-4 h-4 mr-3" />
                Watch Video Tutorials
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Phone className="w-4 h-4 mr-3" />
                Schedule a Call
              </Button>
            </div>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Contact Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our support team is available Monday to Friday, 9 AM to 6 PM IST.
            </p>
            <p className="text-sm font-medium text-foreground">
              support@flashspace.com
            </p>
            <p className="text-sm font-medium text-foreground">
              +91 1800-123-4567
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpCenter;
