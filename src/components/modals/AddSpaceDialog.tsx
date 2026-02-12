import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Building2, MapPin, Upload, Camera, Video } from "lucide-react";

interface AddSpaceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddSpaceDialog = ({ open, onOpenChange }: AddSpaceDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    type: "",
    workstations: "",
    meetingRooms: "",
    description: "",
    amenities: "",
    pricePerSeat: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.address || !formData.city || !formData.type) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Space Added Successfully!",
      description: `${formData.name} has been added to your listings. It will be reviewed and published within 24 hours.`,
    });

    setFormData({
      name: "",
      address: "",
      city: "",
      type: "",
      workstations: "",
      meetingRooms: "",
      description: "",
      amenities: "",
      pricePerSeat: "",
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            Add New Space
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Basic Information</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Space Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., FlashSpace MG Road"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type">Space Type *</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="coworking">Coworking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Full Address *</Label>
              <Textarea
                id="address"
                placeholder="Enter complete address with landmark"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="kolkata">Kolkata</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pricePerSeat">Price per Seat (₹/month)</Label>
                <Input
                  id="pricePerSeat"
                  type="number"
                  placeholder="e.g., 5000"
                  value={formData.pricePerSeat}
                  onChange={(e) => setFormData({ ...formData, pricePerSeat: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Capacity */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Capacity Details</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="workstations">Number of Workstations</Label>
                <Input
                  id="workstations"
                  type="number"
                  placeholder="e.g., 50"
                  value={formData.workstations}
                  onChange={(e) => setFormData({ ...formData, workstations: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meetingRooms">Number of Meeting Rooms</Label>
                <Input
                  id="meetingRooms"
                  type="number"
                  placeholder="e.g., 4"
                  value={formData.meetingRooms}
                  onChange={(e) => setFormData({ ...formData, meetingRooms: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Description & Amenities */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Description & Amenities</h3>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your space, its unique features, and what makes it special..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amenities">Amenities (comma separated)</Label>
              <Input
                id="amenities"
                placeholder="e.g., WiFi, Parking, Cafeteria, 24/7 Access, AC"
                value={formData.amenities}
                onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
              />
            </div>
          </div>

          {/* Media Upload */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Photos & Media</h3>
            
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm font-medium text-foreground">Add Photos</p>
                <p className="text-xs text-muted-foreground">Up to 10 images</p>
              </div>
              
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Video className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm font-medium text-foreground">Add Video</p>
                <p className="text-xs text-muted-foreground">Max 2 minutes</p>
              </div>
              
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <MapPin className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm font-medium text-foreground">Virtual Tour</p>
                <p className="text-xs text-muted-foreground">360° view link</p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              <Upload className="w-4 h-4 mr-2" />
              Submit for Review
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
