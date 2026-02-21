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
  Bookmark,
  ShoppingCart,
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
    location: "Turkman Gate, Delhi",
    address: "Kundan Mansion, 2-A/3, Asaf Ali Rd, Turkman Gate, Delhi",
    negotiable: true,
    lat: 28.644, lng: 77.231,
  },
  {
    id: 2,
    name: "Getset Spaces",
    location: "Green Park, South Delhi",
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
    location: "Sector 18, Noida",
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
    location: "Connaught Place, Central Delhi",
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
    location: "Lajpat Nagar IV, New Delhi",
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
    location: "Nehru Place, South Delhi",
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
    location: "Okhla Phase III, New Delhi",
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
    location: "Mahipalpur, South Delhi",
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
    location: "Karol Bagh, Central Delhi",
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
      <div
        onClick={handleNavigate}
        className="flex gap-4 cursor-pointer group bg-card rounded-2xl border border-border/60 p-4 shadow-soft hover:shadow-soft-lg transition-all duration-200"
      >
        {/* Image — fixed size, never shrinks */}
        <div className="relative w-36 h-auto min-h-[120px] flex-shrink-0 rounded-xl overflow-hidden self-stretch">
          <img
            src={ws.image}
            alt={ws.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {ws.popular && (
            <span className="absolute top-2 left-2 flex items-center gap-1 text-[10px] font-normal px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground shadow-sm">
              <Flame className="w-2.5 h-2.5" /> Popular
            </span>
          )}
          <span className={`absolute bottom-2 left-2 text-[10px] font-normal px-2 py-0.5 rounded-full backdrop-blur-sm text-white shadow-sm ${ws.available ? "bg-black/50" : "bg-black/60"}`}>
            {ws.available ? "Available Now" : "Fully Booked"}
          </span>
        </div>

        {/* Content — all stacked vertically */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          {/* Name + Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-[15px] text-foreground leading-snug">{ws.location}</h3>
            <div className="flex items-center gap-1 flex-shrink-0 bg-muted/60 rounded-full px-2 py-0.5">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="text-xs font-semibold text-foreground">{ws.rating}</span>
              <span className="text-[11px] text-muted-foreground">({ws.reviews})</span>
            </div>
          </div>


          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {ws.tags.map(tag => (
              <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full border border-border/70 text-muted-foreground bg-muted/40">
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-border/50 mt-1" />

          {/* Pricing */}
          <div className="space-y-1">
            {ws.plans.slice(0, 2).map(plan => (
              <div key={plan.label} className="flex items-center gap-3">
                <span className="text-[11px] text-muted-foreground w-24 flex-shrink-0">{plan.label}</span>
                <span className="text-xs font-bold text-foreground">{plan.price}</span>
              </div>
            ))}
          </div>

          {/* CTAs — always on their own row */}
          <div className="flex gap-2 mt-1">
            <button
              onClick={(e) => { e.stopPropagation(); handleNavigate(); }}
              className="py-2 px-4 text-xs font-normal rounded-xl bg-foreground text-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 whitespace-nowrap"
            >
              Get Best Price
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNavigate(); }}
              className="py-2 px-3 text-xs font-normal rounded-xl border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 flex items-center gap-1 whitespace-nowrap"
            >
              <Phone className="w-3 h-3" /> Contact Sales
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer group bg-card rounded-2xl border border-border/60 shadow-soft hover:shadow-soft-lg transition-all duration-200 overflow-hidden flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={ws.image}
          alt={ws.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {/* Popular badge */}
        {ws.popular && (
          <span className="absolute top-3 left-3 flex items-center gap-1 text-[10px] font-normal px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground shadow-sm">
            <Flame className="w-2.5 h-2.5" /> Popular
          </span>
        )}

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <button
            onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white hover:scale-110 transition-all duration-200"
          >
            <Bookmark className={`w-3.5 h-3.5 ${liked ? "fill-primary text-primary" : "text-foreground/60"}`} />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white hover:scale-110 transition-all duration-200"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-foreground/60" />
          </button>
        </div>

        {/* Availability + dots */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className={`text-[10px] font-normal px-3 py-1 rounded-full backdrop-blur-sm text-white shadow-sm ${ws.available ? "bg-black/50" : "bg-black/60"}`}>
            {ws.available ? "Available Now" : "Fully Booked"}
          </span>
          <div className="flex items-center gap-1 mr-1">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === 0 ? "bg-white" : "bg-white/35"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Name + Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-[15px] text-foreground leading-snug">{ws.location}</h3>
          <div className="flex items-center gap-1 flex-shrink-0 bg-muted/60 rounded-full px-2 py-0.5 mt-0.5">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-xs font-semibold text-foreground">{ws.rating}</span>
            <span className="text-[11px] text-muted-foreground">({ws.reviews})</span>
          </div>
        </div>


        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {ws.tags.map(tag => (
            <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full border border-border/70 text-muted-foreground bg-muted/40 hover:bg-muted/80 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border/60 mt-3 mb-3" />

        {/* Plan rows — grows to push CTA down */}
        <div className="space-y-2 flex-1">
          {ws.plans.map(plan => (
            <div key={plan.label} className="flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">{plan.label}</span>
              <span className="text-[13px] font-bold text-foreground">{plan.price}</span>
            </div>
          ))}
        </div>


        {/* CTA Buttons — always at bottom */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={(e) => { e.stopPropagation(); handleNavigate(); }}
            className="flex-1 py-2.5 text-xs font-normal rounded-xl bg-foreground text-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Get Best Price
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNavigate(); }}
            className="flex-1 py-2.5 text-xs font-normal rounded-xl border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3 h-3" /> Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

const GetWorkspaces = () => {
  const [searchCity, setSearchCity] = useState("Delhi");
  const [activeCity, setActiveCity] = useState("Delhi");
  const [workspaceType, setWorkspaceType] = useState("virtual-office");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filteredWorkspaces = workspaces.filter((ws) =>
    ws.address.toLowerCase().includes(activeCity.toLowerCase())
  );

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
            <div className="h-full overflow-y-auto bg-[hsla(0,0%,97%,1)] dark:bg-background">
              <div className="px-6 lg:px-8 py-6">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <a href="/" className="hover:text-foreground transition-colors">Home</a>
                  <ChevronRight className="w-3 h-3" />
                  <span className="hover:text-foreground transition-colors cursor-pointer">{typeLabel[workspaceType]}</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-foreground font-medium">{activeCity}</span>
                </nav>

                {/* Page Title */}
                <h1 className="text-2xl lg:text-[28px] font-bold text-foreground tracking-tight mb-1.5">
                  {typeLabel[workspaceType]} in {activeCity}
                </h1>
                <p className="text-sm text-muted-foreground mb-6">
                  Discover premium workspaces tailored to your business needs.
                </p>

                {/* Search Bar */}
                <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-[#F5F6F7] border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5">

                  {/* Left: Icon + Label + City Input + Search Button */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Label only */}
                    <span className="text-[12px] font-medium text-muted-foreground uppercase tracking-[0.12em] whitespace-nowrap flex-shrink-0 leading-tight text-center">Search<br />City</span>

                    {/* City Input + Yellow Button */}
                    <div className="flex items-center flex-1 min-w-0 bg-white border border-[#E5E7EB] rounded-[12px] h-10 overflow-hidden">
                      <Input
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                        className="border-0 shadow-none h-full text-sm font-medium text-foreground focus-visible:ring-0 bg-transparent px-3 placeholder:text-muted-foreground/40 min-w-0 flex-1"
                        placeholder="Enter city..."
                      />
                      <button
                        onClick={() => setActiveCity(searchCity)}
                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary hover:bg-primary/90 hover:-translate-y-px transition-all duration-150 rounded-[11px] m-0">
                        <Search className="w-4 h-4 text-primary-foreground" strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  {/* Space Type Dropdown */}
                  <div className="flex-shrink-0 w-full sm:w-auto sm:min-w-[160px]">
                    <Select value={workspaceType} onValueChange={setWorkspaceType}>
                      <SelectTrigger className="border border-[#E5E7EB] shadow-none rounded-[12px] h-10 text-sm font-medium text-foreground focus:ring-1 focus:ring-primary/30 focus-visible:ring-1 focus-visible:ring-primary/30 bg-white px-4 [&>svg]:ml-auto w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-card">
                        <SelectItem value="virtual-office">Virtual Office</SelectItem>
                        <SelectItem value="coworking">Coworking Space</SelectItem>
                        <SelectItem value="private-office">Private Office</SelectItem>
                        <SelectItem value="meeting-room">Meeting Room</SelectItem>
                        <SelectItem value="day-pass">Day Pass</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Results count + view toggle */}
                <div className="flex items-center justify-between mb-5">
                   <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredWorkspaces.length} spaces</span>{" "}
                    found in <span className="font-medium text-foreground">{activeCity}</span>
                  </p>
                  <div className="flex items-center gap-0.5 bg-muted/60 rounded-lg p-0.5">
                    <button
                      onClick={() => setViewMode("list")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                        viewMode === "list"
                          ? "bg-card text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <List className="w-3.5 h-3.5" /> List
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                        viewMode === "grid"
                          ? "bg-card text-foreground shadow-sm"
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
                    ? "grid grid-cols-1 min-[500px]:grid-cols-2 gap-4 pb-8"
                    : "flex flex-col gap-3 pb-8"
                }>
                  {filteredWorkspaces.length > 0 ? (
                    filteredWorkspaces.map((ws) => (
                      <WorkspaceCard key={ws.id} ws={ws} view={viewMode} />
                    ))
                  ) : (
                    <div className="col-span-2 py-16 text-center text-muted-foreground">
                      <p className="text-base font-medium">No spaces found in "{activeCity}"</p>
                      <p className="text-sm mt-1">Try searching a different city.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ResizablePanel>

          {/* ── Resizable Handle ── */}
          <ResizableHandle
            withHandle
            className="w-1 bg-border/60 hover:bg-primary/30 transition-colors duration-200 data-[resize-handle-active]:bg-primary/50"
          />

          {/* ── Right Panel: Map ── */}
          <ResizablePanel defaultSize={48} minSize={30} maxSize={65}>
            <div className="relative h-full bg-[hsla(0,0%,97%,1)] dark:bg-background p-4">
              <div className="h-full rounded-2xl overflow-hidden shadow-soft-lg border border-border/40">
                <iframe
                  title="Workspace Map"
                  className="w-full h-full border-0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.05%2C28.50%2C77.40%2C28.72&layer=mapnik&marker=28.644%2C77.231"
                  allowFullScreen
                />
              </div>
              {/* Map overlay controls */}
              <div className="absolute top-8 right-8 flex flex-col gap-1 z-10">
                <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors border border-border/50 font-bold text-lg leading-none">+</button>
                <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors border border-border/50 font-bold text-lg leading-none">−</button>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default GetWorkspaces;
