import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Star,
  MapPin,
  List,
  LayoutGrid,
  ChevronRight,
  Heart,
  Plus,
  Phone,
  Flame,
} from "lucide-react";
import spaceDelhi from "@/assets/space-connaught-delhi.jpg";
import spaceMumbai from "@/assets/space-bkc-mumbai.jpg";
import spaceHSR from "@/assets/space-hsr-bangalore.jpg";
import spaceChennai from "@/assets/space-anna-nagar-chennai.jpg";
import odHotDesks from "@/assets/od-hot-desks.jpg";
import odDedicated from "@/assets/od-dedicated-desks.jpg";
import odMeeting from "@/assets/od-meeting-rooms.jpg";
import workspaceCoworking from "@/assets/workspace-coworking.jpg";
import workspaceMeeting from "@/assets/workspace-meeting.jpg";

const workspaces = [
  {
    id: 1,
    name: "Stirring Minds",
    address: "Kundan Mansion, 2-A/3, Asaf Ali Rd, Turkman Gate, Delhi",
    rating: 4.9,
    reviews: 245,
    tags: ["High-Speed WiFi", "Meeting Rooms"],
    plans: [
      { label: "GST Plan", price: "₹900/month" },
      { label: "Mailing Plan", price: "₹650/month" },
      { label: "Business Reg", price: "₹1,200/month" },
    ],
    image: spaceDelhi,
    popular: true,
    available: true,
    negotiable: true,
    lat: 28.644, lng: 77.231,
  },
  {
    id: 2,
    name: "Getset Spaces",
    address: "3rd Floor, LMR House, S-16, Block C, Green Park, South Delhi",
    rating: 4.6,
    reviews: 167,
    tags: ["South Delhi", "Premium Facilities"],
    plans: [
      { label: "GST Plan", price: "₹1,083/month" },
      { label: "Mailing Plan", price: "₹867/month" },
      { label: "Business Reg", price: "₹1,275/month" },
    ],
    image: spaceMumbai,
    popular: true,
    available: true,
    negotiable: true,
    lat: 28.558, lng: 77.207,
  },
  {
    id: 3,
    name: "WBB Office",
    address: "Plot 12, Sector 18, Noida, Uttar Pradesh",
    rating: 4.4,
    reviews: 98,
    tags: ["Dedicated Desk", "24/7 Access"],
    plans: [
      { label: "Basic Plan", price: "₹750/month" },
      { label: "GST Plan", price: "₹950/month" },
    ],
    image: spaceHSR,
    popular: false,
    available: true,
    negotiable: false,
    lat: 28.57, lng: 77.322,
  },
  {
    id: 4,
    name: "CP Alt F",
    address: "Connaught Place, Central Delhi, Delhi — 110001",
    rating: 4.8,
    reviews: 312,
    tags: ["Prime Location", "Café Lounge"],
    plans: [
      { label: "GST Plan", price: "₹1,200/month" },
      { label: "Mailing Plan", price: "₹900/month" },
      { label: "Business Reg", price: "₹1,500/month" },
    ],
    image: spaceChennai,
    popular: true,
    available: false,
    negotiable: true,
    lat: 28.632, lng: 77.219,
  },
  {
    id: 5,
    name: "Mytime Cowork",
    address: "Lajpat Nagar IV, New Delhi, Delhi — 110024",
    rating: 4.3,
    reviews: 54,
    tags: ["Hot Desk", "Locker Storage"],
    plans: [
      { label: "Basic Plan", price: "₹600/month" },
      { label: "GST Plan", price: "₹800/month" },
    ],
    image: odHotDesks,
    popular: false,
    available: true,
    negotiable: false,
    lat: 28.569, lng: 77.243,
  },
  {
    id: 6,
    name: "Virtualexcel Hub",
    address: "Nehru Place, South Delhi, Delhi — 110019",
    rating: 4.5,
    reviews: 88,
    tags: ["Virtual Office", "GST Address"],
    plans: [
      { label: "Virtual Plan", price: "₹499/month" },
      { label: "GST Plan", price: "₹699/month" },
    ],
    image: odDedicated,
    popular: false,
    available: true,
    negotiable: true,
    lat: 28.549, lng: 77.252,
  },
  {
    id: 7,
    name: "Okhla Alt F",
    address: "Okhla Phase III, New Delhi, Delhi — 110020",
    rating: 4.7,
    reviews: 130,
    tags: ["Private Cabin", "Event Space"],
    plans: [
      { label: "GST Plan", price: "₹950/month" },
      { label: "Mailing Plan", price: "₹720/month" },
      { label: "Business Reg", price: "₹1,100/month" },
    ],
    image: odMeeting,
    popular: true,
    available: true,
    negotiable: true,
    lat: 28.535, lng: 77.268,
  },
  {
    id: 8,
    name: "Rangpuri Coworks",
    address: "Rangpuri, Mahipalpur, South Delhi — 110037",
    rating: 4.1,
    reviews: 40,
    tags: ["Budget Friendly", "Parking"],
    plans: [
      { label: "Basic Plan", price: "₹550/month" },
    ],
    image: workspaceCoworking,
    popular: false,
    available: true,
    negotiable: false,
    lat: 28.524, lng: 77.131,
  },
  {
    id: 9,
    name: "Summit Offices",
    address: "Karol Bagh, Central Delhi, Delhi — 110005",
    rating: 4.6,
    reviews: 75,
    tags: ["Meeting Room", "High-Speed WiFi"],
    plans: [
      { label: "GST Plan", price: "₹880/month" },
      { label: "Mailing Plan", price: "₹680/month" },
    ],
    image: workspaceMeeting,
    popular: false,
    available: true,
    negotiable: false,
    lat: 28.652, lng: 77.19,
  },
];

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

type ViewMode = "list" | "grid";

const WorkspaceCard = ({ ws, view }: { ws: typeof workspaces[0]; view: ViewMode }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/workspace/${ws.id}`);

  if (view === "list") {
    return (
      <div onClick={handleNavigate} className="flex gap-4 cursor-pointer group py-4 border-b border-border/50 hover:bg-muted/20 transition-colors">
        {/* Image */}
        <div className="relative w-40 h-28 flex-shrink-0 rounded-[14px] overflow-hidden">
          <img src={ws.image} alt={ws.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {ws.available && (
            <span className="absolute bottom-2 left-2 text-[10px] font-medium px-2.5 py-1 rounded-[8px] bg-black/50 backdrop-blur-sm text-white">
              Available Now
            </span>
          )}
          {!ws.available && (
            <span className="absolute bottom-2 left-2 text-[10px] font-medium px-2.5 py-1 rounded-[8px] bg-black/60 backdrop-blur-sm text-white/70">
              Fully Booked
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-sm text-foreground leading-snug">{ws.name}</h3>
              <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="w-3 h-3 fill-gold text-gold" />
                <span className="text-xs font-semibold text-foreground">{ws.rating}</span>
                <span className="text-[11px] text-muted-foreground">({ws.reviews})</span>
              </div>
            </div>
            <p className="flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
              <MapPin className="w-3 h-3 flex-shrink-0" /> {ws.address}
            </p>
            <div className="flex flex-wrap gap-1 mt-1.5">
              {ws.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-[6px] border border-border text-muted-foreground bg-muted/50">{tag}</span>
              ))}
            </div>
          </div>
          <div className="mt-2 space-y-0.5">
            {ws.plans.slice(0, 2).map(plan => (
              <div key={plan.label} className="flex items-center justify-between">
                <span className="text-[11px] text-primary">{plan.label}</span>
                <span className="text-[11px] font-semibold text-foreground">{plan.price}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-2.5">
            <button className="flex-1 py-1.5 text-xs font-semibold rounded-[10px] bg-foreground text-background hover:bg-foreground/85 transition-colors">
              Get Best Price
            </button>
            <button className="flex-1 py-1.5 text-xs font-semibold rounded-[10px] border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-1">
              <Phone className="w-3 h-3" /> Contact Sales
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid view — matches reference image exactly
  return (
    <div onClick={handleNavigate} className="cursor-pointer group">
      {/* ── Image Section ── */}
      <div className="relative h-52 overflow-hidden rounded-[14px]">
        <img
          src={ws.image}
          alt={ws.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Top-left: Popular badge */}
        {ws.popular && (
          <span className="absolute top-3 left-3 flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-[20px] bg-[hsl(38,92%,50%)] text-white shadow-sm">
            <Flame className="w-3 h-3" /> Popular
          </span>
        )}

        {/* Top-right: Heart + Plus */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <button
            onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
          >
            <Heart className={`w-3.5 h-3.5 ${liked ? "fill-destructive text-destructive" : "text-foreground/70"}`} />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-foreground/70" />
          </button>
        </div>

        {/* Bottom-left: Available Now pill + dots */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className={`text-[11px] font-medium px-3 py-1 rounded-[8px] backdrop-blur-sm text-white shadow-sm ${ws.available ? "bg-black/55" : "bg-black/60"}`}>
            {ws.available ? "Available Now" : "Fully Booked"}
          </span>
          {/* Dot indicators */}
          <div className="flex items-center gap-1 mr-1 mb-0.5">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Card Body (no border/card bg — clean open layout) ── */}
      <div className="pt-3 pb-1">
        {/* Name + Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-[15px] text-foreground leading-snug">{ws.name}</h3>
          <div className="flex items-center gap-1 flex-shrink-0 mt-0.5">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" />
            <span className="text-xs font-semibold text-foreground">{ws.rating}</span>
            <span className="text-[11px] text-muted-foreground">({ws.reviews})</span>
          </div>
        </div>

        {/* Address */}
        <p className="flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
          <MapPin className="w-3 h-3 flex-shrink-0 opacity-70" />
          {ws.address}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {ws.tags.map(tag => (
            <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-[6px] border border-border text-muted-foreground bg-background">
              {tag}
            </span>
          ))}
        </div>

        {/* Plan rows */}
        <div className="mt-3 space-y-1.5">
          {ws.plans.map(plan => (
            <div key={plan.label} className="flex items-center justify-between">
              <span className="text-[12px] text-primary font-medium">{plan.label}</span>
              <span className="text-[13px] font-bold text-foreground">{plan.price}</span>
            </div>
          ))}
        </div>

        {/* Price negotiable */}
        {ws.negotiable && (
          <p className="text-[11px] text-muted-foreground italic mt-2">Price negotiable</p>
        )}

        {/* CTA Buttons */}
        <div className="flex gap-2.5 mt-3">
          <button className="flex-1 py-2.5 text-sm font-semibold rounded-[12px] bg-foreground text-background hover:bg-foreground/85 transition-colors">
            Get Best Price
          </button>
          <button className="flex-1 py-2.5 text-sm font-semibold rounded-[12px] border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

const GetWorkspaces = () => {
  const [searchCity, setSearchCity] = useState("Delhi");
  const [workspaceType, setWorkspaceType] = useState("virtual-office");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const typeLabel: Record<string, string> = {
    "virtual-office": "Virtual Office",
    "coworking": "Coworking Space",
    "private-office": "Private Office",
    "meeting-room": "Meeting Room",
    "day-pass": "Day Pass",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] mt-16 lg:mt-20">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          {/* ── Left Panel ── */}
          <ResizablePanel defaultSize={52} minSize={35} maxSize={70}>
            <div className="h-full overflow-y-auto px-5 lg:px-8 py-5">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                <a href="/" className="hover:text-foreground transition-colors">Home</a>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="hover:text-foreground transition-colors cursor-pointer">{typeLabel[workspaceType]}</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-foreground font-medium">{searchCity}</span>
              </nav>

              {/* Title */}
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-5">
                {typeLabel[workspaceType]} Space In {searchCity}
              </h1>

              {/* Search + Filter Bar */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1 flex items-center gap-2 border border-border rounded-[8px] px-4 py-2.5 bg-card shadow-sm">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                    Search City
                  </span>
                  <div className="w-px h-4 bg-border mx-1" />
                  <Input
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="border-0 shadow-none p-0 h-auto text-sm focus-visible:ring-0 bg-transparent"
                    placeholder="Enter city..."
                  />
                  <button className="w-8 h-8 rounded-[8px] bg-primary flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors">
                    <Search className="w-4 h-4 text-primary-foreground" />
                  </button>
                </div>
                <Select value={workspaceType} onValueChange={setWorkspaceType}>
                  <SelectTrigger className="w-44 rounded-[8px] border-border bg-card shadow-sm text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="virtual-office">Virtual Office</SelectItem>
                    <SelectItem value="coworking">Coworking Space</SelectItem>
                    <SelectItem value="private-office">Private Office</SelectItem>
                    <SelectItem value="meeting-room">Meeting Room</SelectItem>
                    <SelectItem value="day-pass">Day Pass</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Results count + view toggle */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{workspaces.length} result(s)</span> for {typeLabel[workspaceType].toLowerCase()} space in {searchCity}
                </p>
                <div className="flex items-center gap-1 bg-muted rounded-[8px] p-1">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-sm font-medium transition-colors ${
                      viewMode === "list"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <List className="w-3.5 h-3.5" /> List
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-sm font-medium transition-colors ${
                      viewMode === "grid"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" /> Grid
                  </button>
                </div>
              </div>

              {/* Workspace Cards */}
              <div className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6"
                  : "flex flex-col gap-4 pb-6"
              }>
                {workspaces.map((ws) => (
                  <WorkspaceCard key={ws.id} ws={ws} view={viewMode} />
                ))}
              </div>
            </div>
          </ResizablePanel>

          {/* ── Resizable Handle ── */}
          <ResizableHandle
            withHandle
            className="w-1.5 bg-border hover:bg-primary/40 transition-colors duration-200 data-[resize-handle-active]:bg-primary/60"
          />

          {/* ── Right Panel: Map ── */}
          <ResizablePanel defaultSize={48} minSize={30} maxSize={65}>
            <div className="relative h-full">
              <iframe
                title="Workspace Map"
                className="w-full h-full border-0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.05%2C28.50%2C77.40%2C28.72&layer=mapnik&marker=28.644%2C77.231"
                allowFullScreen
              />
              <div className="absolute top-4 right-4 flex flex-col gap-1.5 z-10">
                <button className="w-8 h-8 bg-white rounded-[3px] shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors border border-border font-bold text-lg leading-none">+</button>
                <button className="w-8 h-8 bg-white rounded-[3px] shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors border border-border font-bold text-lg leading-none">−</button>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default GetWorkspaces;

