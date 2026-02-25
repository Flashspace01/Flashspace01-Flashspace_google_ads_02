import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessSetup from "./pages/BusinessSetup";
import OnDemand from "./pages/OnDemand";
import GetWorkspaces from "./pages/GetWorkspaces";
import WorkspaceDetail from "./pages/WorkspaceDetail";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import PartnerWithUs from "./pages/PartnerWithUs";
import Careers from "./pages/Careers";

import CustomerPortal from "./pages/portals/CustomerPortal";
import SpacePartnerPortal from "./pages/portals/SpacePartnerPortal";
import AdminPortal from "./pages/portals/AdminPortal";
import AffiliatePortal from "./pages/portals/AffiliatePortal";

// Customer Portal Sub-pages
import MyBookings from "./pages/portals/customer/MyBookings";
import MailRecords from "./pages/portals/customer/MailRecords";
import VisitRecords from "./pages/portals/customer/VisitRecords";
import CustomerPayments from "./pages/portals/customer/Payments";
import Documents from "./pages/portals/customer/Documents";
import ChatSupport from "./pages/portals/customer/ChatSupport";
import Notifications from "./pages/portals/customer/Notifications";
import HelpCenter from "./pages/portals/customer/HelpCenter";

// Space Partner Portal Sub-pages
import MySpaces from "./pages/portals/partner/MySpaces";
import BookingCalendar from "./pages/portals/partner/BookingCalendar";
import Clients from "./pages/portals/partner/Clients";
import InvoicesPayments from "./pages/portals/partner/InvoicesPayments";
import ClientEnquiries from "./pages/portals/partner/ClientEnquiries";
import FeedbackNPS from "./pages/portals/partner/FeedbackNPS";
import TicketsTasks from "./pages/portals/partner/TicketsTasks";
import MailVisits from "./pages/portals/partner/MailVisits";
import TeamMembers from "./pages/portals/partner/TeamMembers";
import ProfileKYC from "./pages/portals/partner/ProfileKYC";

// Admin Portal Sub-pages
import SalesAnalytics from "./pages/portals/admin/SalesAnalytics";
import AdminLeadManagement from "./pages/portals/admin/LeadManagement";
import ClientManagement from "./pages/portals/admin/ClientManagement";
import TicketSystem from "./pages/portals/admin/TicketSystem";
import SupportChats from "./pages/portals/admin/SupportChats";
import LearningHub from "./pages/portals/admin/LearningHub";
import Leaderboard from "./pages/portals/admin/Leaderboard";
import AdminRevenueDashboard from "./pages/portals/admin/RevenueDashboard";
import AdminInvoices from "./pages/portals/admin/Invoices";
import ReceivablePayable from "./pages/portals/admin/ReceivablePayable";
import BalanceSheet from "./pages/portals/admin/BalanceSheet";

// Affiliate Portal Sub-pages
import AffiliateBookingManagement from "./pages/portals/affiliate/BookingManagement";
import AffiliateRevenueDashboard from "./pages/portals/affiliate/RevenueDashboard";
import Payouts from "./pages/portals/affiliate/Payouts";
import AffiliateLeadManagement from "./pages/portals/affiliate/LeadManagement";
import MarketingTools from "./pages/portals/affiliate/MarketingTools";
import AffiliateLeaderboard from "./pages/portals/affiliate/AffiliateLeaderboard";
import AffiliateInvoices from "./pages/portals/affiliate/Invoices";
import QuotationGenerator from "./pages/portals/affiliate/QuotationGenerator";
import AffiliateSupport from "./pages/portals/affiliate/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business-setup" element={<BusinessSetup />} />
          <Route path="/on-demand" element={<OnDemand />} />
          <Route path="/get-workspaces" element={<GetWorkspaces />} />
          <Route path="/workspace/:id" element={<WorkspaceDetail />} />
          
          {/* Customer Portal Routes */}
          <Route path="/customer-portal" element={<CustomerPortal />} />
          <Route path="/customer-portal/bookings" element={<MyBookings />} />
          <Route path="/customer-portal/mail" element={<MailRecords />} />
          <Route path="/customer-portal/visits" element={<VisitRecords />} />
          <Route path="/customer-portal/payments" element={<CustomerPayments />} />
          <Route path="/customer-portal/documents" element={<Documents />} />
          <Route path="/customer-portal/chat" element={<ChatSupport />} />
          <Route path="/customer-portal/notifications" element={<Notifications />} />
          <Route path="/customer-portal/help" element={<HelpCenter />} />
          
          {/* Space Partner Portal Routes */}
          <Route path="/space-partner-portal" element={<SpacePartnerPortal />} />
          <Route path="/space-partner-portal/spaces" element={<MySpaces />} />
          <Route path="/space-partner-portal/calendar" element={<BookingCalendar />} />
          <Route path="/space-partner-portal/clients" element={<Clients />} />
          <Route path="/space-partner-portal/payments" element={<InvoicesPayments />} />
          <Route path="/space-partner-portal/enquiries" element={<ClientEnquiries />} />
          <Route path="/space-partner-portal/feedback" element={<FeedbackNPS />} />
          <Route path="/space-partner-portal/tickets" element={<TicketsTasks />} />
          <Route path="/space-partner-portal/mail-visits" element={<MailVisits />} />
          <Route path="/space-partner-portal/team" element={<TeamMembers />} />
          <Route path="/space-partner-portal/profile" element={<ProfileKYC />} />
          
          {/* Admin Portal Routes */}
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route path="/admin-portal/sales" element={<SalesAnalytics />} />
          <Route path="/admin-portal/leads" element={<AdminLeadManagement />} />
          <Route path="/admin-portal/clients" element={<ClientManagement />} />
          <Route path="/admin-portal/tickets" element={<TicketSystem />} />
          <Route path="/admin-portal/support" element={<SupportChats />} />
          <Route path="/admin-portal/learning" element={<LearningHub />} />
          <Route path="/admin-portal/leaderboard" element={<Leaderboard />} />
          <Route path="/admin-portal/revenue" element={<AdminRevenueDashboard />} />
          <Route path="/admin-portal/invoices" element={<AdminInvoices />} />
          <Route path="/admin-portal/finance" element={<ReceivablePayable />} />
          <Route path="/admin-portal/balance" element={<BalanceSheet />} />
          
          {/* Affiliate Portal Routes */}
          <Route path="/affiliate-portal" element={<AffiliatePortal />} />
          <Route path="/affiliate-portal/bookings" element={<AffiliateBookingManagement />} />
          <Route path="/affiliate-portal/revenue" element={<AffiliateRevenueDashboard />} />
          <Route path="/affiliate-portal/payouts" element={<Payouts />} />
          <Route path="/affiliate-portal/invoices" element={<AffiliateInvoices />} />
          <Route path="/affiliate-portal/leads" element={<AffiliateLeadManagement />} />
          <Route path="/affiliate-portal/quotations" element={<QuotationGenerator />} />
          <Route path="/affiliate-portal/marketing" element={<MarketingTools />} />
          <Route path="/affiliate-portal/leaderboard" element={<AffiliateLeaderboard />} />
          <Route path="/affiliate-portal/support" element={<AffiliateSupport />} />
          
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/careers" element={<Careers />} />
          
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
