import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Star, Users, Building2, DoorOpen, Percent, Edit, Calendar, BarChart3 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface Space {
  id: string;
  name: string;
  location: string;
  type: string;
  workstations: number;
  meetingRooms: number;
  occupancy: number;
  status: string;
  rating: number;
  image: string;
}

interface SpaceViewModalProps {
  space: Space | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700";
    case "maintenance":
      return "bg-yellow-100 text-yellow-700";
    case "inactive":
      return "bg-red-100 text-red-700";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const SpaceViewModal = ({ space, open, onOpenChange }: SpaceViewModalProps) => {
  const navigate = useNavigate();
  
  if (!space) return null;

  const handleEditSpace = () => {
    toast({
      title: "Opening Editor",
      description: `Opening editor for ${space.name}...`,
    });
  };

  const handleViewCalendar = () => {
    onOpenChange(false);
    navigate("/space-partner-portal/calendar");
  };

  const handleViewAnalytics = () => {
    toast({
      title: "Opening Analytics",
      description: `Loading analytics for ${space.name}...`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Space Details</span>
            <Badge className={getStatusColor(space.status)}>
              {space.status.charAt(0).toUpperCase() + space.status.slice(1)}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Space Image */}
          <div className="h-40 rounded-lg overflow-hidden">
            <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
          </div>

          {/* Space Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">{space.name}</h3>
              <Badge variant="outline">{space.type}</Badge>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{space.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-foreground">{space.rating}</span>
              <span className="text-muted-foreground">rating</span>
            </div>
          </div>

          <Separator />

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{space.workstations}</p>
              <p className="text-xs text-muted-foreground">Workstations</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <DoorOpen className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{space.meetingRooms}</p>
              <p className="text-xs text-muted-foreground">Meeting Rooms</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Percent className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{space.occupancy}%</p>
              <p className="text-xs text-muted-foreground">Occupancy</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-muted/30 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-foreground text-sm">This Month</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bookings</span>
                <span className="font-semibold text-foreground">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Revenue</span>
                <span className="font-semibold text-green-600">₹1.2L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">New Clients</span>
                <span className="font-semibold text-foreground">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Rating</span>
                <span className="font-semibold text-foreground">{space.rating}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <Button variant="outline" className="gap-2" onClick={handleEditSpace}>
              <Edit className="w-4 h-4" />
              Edit
            </Button>
            <Button variant="outline" className="gap-2" onClick={handleViewCalendar}>
              <Calendar className="w-4 h-4" />
              Calendar
            </Button>
            <Button className="gap-2" onClick={handleViewAnalytics}>
              <BarChart3 className="w-4 h-4" />
              Analytics
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
