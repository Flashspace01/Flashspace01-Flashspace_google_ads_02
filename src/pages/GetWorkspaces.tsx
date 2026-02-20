import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Heart,
  Plus,
  Star,
  MapPin,
  List,
  LayoutGrid,
  ChevronRight,
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
    plan: "GST Plan",
    price: "₹900/month",
    image: spaceDelhi,
    popular: true,
    available: true,
    lat: 28.644,
    lng: 77.231,
  },
  {
    id: 2,
    name: "Getset Spaces",
    address: "3rd Floor, LMR House, S-16, Block C, Green Park, South Delhi",
    rating: 4.6,
    reviews: 167,
    tags: ["South Delhi", "Premium Facilities"],
    plan: "GST Plan",
    price: "₹1,083/month",
    image: spaceMumbai,
    popular: true,
    available: true,
    lat: 28.558,
    lng: 77.207,
  },
  {
    id: 3,
    name: "WBB Office",
    address: "Plot 12, Sector 18, Noida, Uttar Pradesh",
    rating: 4.4,
    reviews: 98,
    tags: ["Dedicated Desk", "24/7 Access"],
    plan: "Basic Plan",
    price: "₹750/month",
    image: spaceHSR,
    popular: false,
    available: true,
    lat: 28.57,
    lng: 77.322,
  },
  {
    id: 4,
    name: "CP Alt F",
    address: "Connaught Place, Central Delhi, Delhi — 110001",
    rating: 4.8,
    reviews: 312,
    tags: ["Prime Location", "Café Lounge"],
    plan: "GST Plan",
    price: "₹1,200/month",
    image: spaceChennai,
    popular: true,
    available: false,
    lat: 28.632,
    lng: 77.219,
  },
  {
    id: 5,
    name: "Mytime Cowork",
    address: "Lajpat Nagar IV, New Delhi, Delhi — 110024",
    rating: 4.3,
    reviews: 54,
    tags: ["Hot Desk", "Locker Storage"],
    plan: "Basic Plan",
    price: "₹600/month",
    image: odHotDesks,
    popular: false,
    available: true,
    lat: 28.569,
    lng: 77.243,
  },
  {
    id: 6,
    name: "Virtualexcel Hub",
    address: "Nehru Place, South Delhi, Delhi — 110019",
    rating: 4.5,
    reviews: 88,
    tags: ["Virtual Office", "GST Address"],
    plan: "Virtual Plan",
    price: "₹499/month",
    image: odDedicated,
    popular: false,
    available: true,
    lat: 28.549,
    lng: 77.252,
  },
  {
    id: 7,
    name: "Okhla Alt F",
    address: "Okhla Phase III, New Delhi, Delhi — 110020",
    rating: 4.7,
    reviews: 130,
    tags: ["Private Cabin", "Event Space"],
    plan: "GST Plan",
    price: "₹950/month",
    image: odMeeting,
    popular: true,
    available: true,
    lat: 28.535,
    lng: 77.268,
  },
  {
    id: 8,
    name: "Rangpuri Coworks",
    address: "Rangpuri, Mahipalpur, South Delhi — 110037",
    rating: 4.1,
    reviews: 40,
    tags: ["Budget Friendly", "Parking"],
    plan: "Basic Plan",
    price: "₹550/month",
    image: workspaceCoworking,
    popular: false,
    available: true,
    lat: 28.524,
    lng: 77.131,
  },
  {
    id: 9,
    name: "Summit Offices",
    address: "Karol Bagh, Central Delhi, Delhi — 110005",
    rating: 4.6,
    reviews: 75,
    tags: ["Meeting Room", "High-Speed WiFi"],
    plan: "GST Plan",
    price: "₹880/month",
    image: workspaceMeeting,
    popular: false,
    available: true,
    lat: 28.652,
    lng: 77.19,
  },
];

type ViewMode = "list" | "grid";

const WorkspaceCard = ({ ws, view }: { ws: typeof workspaces[0]; view: ViewMode }) => {
  const [liked, setLiked] = useState(false);

  if (view === "list") {
    return (
      <div className="flex gap-4 p-3 rounded-lg border border-border bg-card hover:shadow-md transition-shadow cursor-pointer group">
        <div className="relative w-48 h-36 flex-shrink-0 rounded-lg overflow-hidden">
          <img src={ws.image} alt={ws.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          {ws.popular && (
            <span className="absolute top-2 left-2 flex items-center gap-1 bg-primary text-primary-foreground text-[11px] font-semibold px-2 py-0.5 rounded-lg">
              <Flame className="w-3 h-3" /> Popular
            </span>
          )}
          <span className={`absolute bottom-2 left-2 text-[11px] font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm ${ws.available ? "bg-black/60 text-white" : "bg-black/50 text-white/70"}`}>
            {ws.available ? "Available Now" : "Fully Booked"}
          </span>
        </div>
        <div className="flex-1 min-w-0 py-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-base text-foreground">{ws.name}</h3>
            <div className="flex items-center gap-1 flex-shrink-0 text-sm">
              <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
              <span className="font-semibold text-foreground">{ws.rating}</span>
              <span className="text-muted-foreground">({ws.reviews})</span>
            </div>
          </div>
          <p className="flex items-start gap-1 text-xs text-muted-foreground mt-1 line-clamp-1">
            <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" /> {ws.address}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {ws.tags.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-lg bg-muted text-muted-foreground border border-border">{t}</span>
            ))}
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-muted-foreground">{ws.plan}</span>
            <span className="font-bold text-sm text-foreground">{ws.price}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card hover:shadow-md transition-shadow cursor-pointer group overflow-hidden">
      <div className="relative h-44 overflow-hidden">
        <img src={ws.image} alt={ws.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {ws.popular && (
          <span className="absolute top-2 left-2 flex items-center gap-1 bg-primary text-primary-foreground text-[11px] font-semibold px-2.5 py-1 rounded-lg">
            <Flame className="w-3 h-3" /> Popular
          </span>
        )}
        <div className="absolute top-2 right-2 flex gap-1.5">
          <button onClick={(e) => { e.stopPropagation(); setLiked(!liked); }} className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm">
            <Heart className={`w-4 h-4 ${liked ? "fill-red-500 text-red-500" : "text-foreground/60"}`} />
          </button>
          <button className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm">
            <Plus className="w-4 h-4 text-foreground/60" />
          </button>
        </div>
        <span className={`absolute bottom-2 left-2 text-[11px] font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm ${ws.available ? "bg-black/60 text-white" : "bg-black/50 text-white/70"}`}>
          {ws.available ? "Available Now" : "Fully Booked"}
        </span>
        {/* Dot indicators */}
        <div className="absolute bottom-2 right-2 flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`w-1.5 h-1.5 rounded-lg ${i === 0 ? "bg-white" : "bg-white/50"}`} />
          ))}
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm text-foreground">{ws.name}</h3>
                <div className="flex items-center gap-0.5 flex-shrink-0 text-xs">
                  <Star className="w-3 h-3 fill-secondary text-secondary" />
                  <span className="font-semibold text-foreground">{ws.rating}</span>
                  <span className="text-muted-foreground ml-0.5">({ws.reviews})</span>
          </div>
        </div>
        <p className="flex items-start gap-1 text-xs text-muted-foreground mt-1 line-clamp-1">
          <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" /> {ws.address}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {ws.tags.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-lg bg-muted text-muted-foreground border border-border">{t}</span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
          <span className="text-[11px] text-muted-foreground">{ws.plan}</span>
          <span className="font-bold text-sm text-foreground">{ws.price}</span>
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
                <div className="flex-1 flex items-center gap-2 border border-border rounded-lg px-4 py-2.5 bg-card shadow-sm">
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
                  <button className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors">
                    <Search className="w-4 h-4 text-primary-foreground" />
                  </button>
                </div>
                <Select value={workspaceType} onValueChange={setWorkspaceType}>
                  <SelectTrigger className="w-44 rounded-lg border-border bg-card shadow-sm text-sm">
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
                <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      viewMode === "list"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <List className="w-3.5 h-3.5" /> List
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
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
                  : "flex flex-col gap-3 pb-6"
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
                <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors border border-border font-bold text-lg leading-none">+</button>
                <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors border border-border font-bold text-lg leading-none">−</button>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default GetWorkspaces;
