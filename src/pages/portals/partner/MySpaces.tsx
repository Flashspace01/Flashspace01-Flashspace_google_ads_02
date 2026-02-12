import { useState } from "react";
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
  Plus,
  MapPin,
  Eye,
  Edit,
  MoreVertical
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AddSpaceDialog } from "@/components/modals/AddSpaceDialog";
import { SpaceViewModal } from "@/components/modals/SpaceViewModal";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

// Import AI-generated coworking space images
import spaceBkcMumbai from "@/assets/space-bkc-mumbai.jpg";
import spaceConnaughtDelhi from "@/assets/space-connaught-delhi.jpg";
import spaceHsrBangalore from "@/assets/space-hsr-bangalore.jpg";
import spaceAnnaNagarChennai from "@/assets/space-anna-nagar-chennai.jpg";

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

const spaces = [
  {
    id: "SP-001",
    name: "FlashSpace BKC",
    location: "Mumbai - Bandra Kurla Complex",
    type: "Premium",
    workstations: 50,
    meetingRooms: 4,
    occupancy: 85,
    status: "active",
    rating: 4.8,
    image: spaceBkcMumbai
  },
  {
    id: "SP-002",
    name: "FlashSpace Connaught Place",
    location: "Delhi - Connaught Place",
    type: "Business",
    workstations: 30,
    meetingRooms: 2,
    occupancy: 72,
    status: "active",
    rating: 4.5,
    image: spaceConnaughtDelhi
  },
  {
    id: "SP-003",
    name: "FlashSpace HSR Layout",
    location: "Bangalore - HSR Layout",
    type: "Standard",
    workstations: 25,
    meetingRooms: 2,
    occupancy: 90,
    status: "active",
    rating: 4.6,
    image: spaceHsrBangalore
  },
  {
    id: "SP-004",
    name: "FlashSpace Anna Nagar",
    location: "Chennai - Anna Nagar",
    type: "Business",
    workstations: 20,
    meetingRooms: 1,
    occupancy: 65,
    status: "maintenance",
    rating: 4.3,
    image: spaceAnnaNagarChennai
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>;
    case "maintenance":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Maintenance</Badge>;
    case "inactive":
      return <Badge variant="secondary">Inactive</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const MySpaces = () => {
  const [addSpaceOpen, setAddSpaceOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState<typeof spaces[0] | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleView = (space: typeof spaces[0]) => {
    setSelectedSpace(space);
    setViewModalOpen(true);
  };

  const handleEdit = (spaceId: string) => {
    toast({
      title: "Edit Space",
      description: `Opening editor for ${spaceId}`,
    });
  };

  const handleSpaceAction = (action: string, space: typeof spaces[0]) => {
    switch (action) {
      case "view_calendar":
        navigate("/space-partner-portal/calendar");
        break;
      case "view_clients":
        navigate("/space-partner-portal/clients");
        break;
      case "view_analytics":
        toast({ title: "Loading Analytics", description: `Opening analytics for ${space.name}` });
        break;
      case "toggle_status":
        toast({ 
          title: space.status === "active" ? "Space Deactivated" : "Space Activated",
          description: `${space.name} status has been updated`
        });
        break;
    }
  };

  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            My <span className="text-primary italic">Spaces</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage all your workspace listings
          </p>
        </div>
        <Button onClick={() => setAddSpaceOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Space
        </Button>
      </div>

      {/* Spaces Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {spaces.map((space) => (
          <div key={space.id} className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
            {/* Space Image */}
            <div className="h-40 bg-muted relative">
              <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3">
                {getStatusBadge(space.status)}
              </div>
            </div>
            
            {/* Space Details */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-foreground">{space.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" />
                    {space.location}
                  </div>
                </div>
                <Badge variant="outline">{space.type}</Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 my-4 py-4 border-y border-border">
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">{space.workstations}</p>
                  <p className="text-xs text-muted-foreground">Workstations</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">{space.meetingRooms}</p>
                  <p className="text-xs text-muted-foreground">Meeting Rooms</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">{space.occupancy}%</p>
                  <p className="text-xs text-muted-foreground">Occupancy</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-foreground">{space.rating}</span>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" onClick={() => handleView(space)} className="bg-primary/10 hover:bg-primary/20">
                    <Eye className="w-4 h-4 text-primary" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(space.id)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleSpaceAction("view_calendar", space)}>
                        View Booking Calendar
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSpaceAction("view_clients", space)}>
                        View Clients
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSpaceAction("view_analytics", space)}>
                        View Analytics
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSpaceAction("toggle_status", space)}>
                        {space.status === "active" ? "Deactivate Space" : "Activate Space"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddSpaceDialog open={addSpaceOpen} onOpenChange={setAddSpaceOpen} />
      <SpaceViewModal space={selectedSpace} open={viewModalOpen} onOpenChange={setViewModalOpen} />
    </DashboardLayout>
  );
};

export default MySpaces;
