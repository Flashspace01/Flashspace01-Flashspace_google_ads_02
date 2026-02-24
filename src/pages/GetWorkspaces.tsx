import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import {
  Search,
  Star,
  MapPin,
  List,
  LayoutGrid,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  ShoppingCart,
  Phone,
  Flame,
  Map } from
"lucide-react";
import { WorkspaceMap } from "@/components/WorkspaceMap";
import spaceDelhi from "@/assets/space-connaught-delhi.jpg";
import turkmanGate1 from "@/assets/turkman-gate-1.png";
import spaceMumbai from "@/assets/space-bkc-mumbai.jpg";
import greenPark1 from "@/assets/green-park-1.png";
import connaughtPlace1 from "@/assets/connaught-place-1.png";
import spaceHSR from "@/assets/space-hsr-bangalore.jpg";
import spaceChennai from "@/assets/space-anna-nagar-chennai.jpg";
import odHotDesks from "@/assets/od-hot-desks.jpg";
import odDedicated from "@/assets/od-dedicated-desks.jpg";
import odMeeting from "@/assets/od-meeting-rooms.jpg";
import workspaceCoworking from "@/assets/workspace-coworking.jpg";
import workspaceMeeting from "@/assets/workspace-meeting.jpg";
import spaceSector18 from "@/assets/space-sector18.png";
import spaceLajpat from "@/assets/space-lajpat.png";
import spaceNehru from "@/assets/space-nehru.png";
import spaceOkhla from "@/assets/space-okhla.png";
import spaceMahipalpur from "@/assets/space-mahipalpur.avif";
import spaceKarolbagh from "@/assets/space-karolbagh.png";

const workspaces = [
{
  id: 1,
  name: "Stirring Minds",
  location: "Near Connaught Place",
  address: "Kundan Mansion, 2-A/3, Asaf Ali Rd, Turkman Gate, Delhi",
  rating: 4.9,
  reviews: 245,
  tags: ["High-Speed WiFi", "Meeting Rooms"],
  plans: [
  { label: "GST Plan", price: "₹900/month" },
  { label: "Mailing Plan", price: "₹650/month" },
  { label: "Business Reg", price: "₹1,200/month" }],

  image: turkmanGate1,
  images: [turkmanGate1, greenPark1, connaughtPlace1, spaceSector18],
  popular: true,
  available: true,
  negotiable: true,
  lat: 28.644, lng: 77.231
},
{
  id: 2,
  name: "Getset Spaces",
  location: "Green Park",
  address: "3rd Floor, LMR House, S-16, Block C, Green Park, South Delhi",
  rating: 4.6,
  reviews: 167,
  tags: ["South Delhi", "Premium Facilities"],
  plans: [
  { label: "GST Plan", price: "₹1,083/month" },
  { label: "Mailing Plan", price: "₹867/month" },
  { label: "Business Reg", price: "₹1,275/month" }],

  image: greenPark1,
  images: [greenPark1, turkmanGate1, spaceLajpat, spaceNehru],
  popular: true,
  available: true,
  negotiable: true,
  lat: 28.558, lng: 77.207
},
{
  id: 3,
  name: "WBB Office",
  location: "Sector 18",
  address: "Plot 12, Sector 18, Noida, Uttar Pradesh",
  rating: 4.4,
  reviews: 98,
  tags: ["Dedicated Desk", "24/7 Access"],
  plans: [
  { label: "Basic Plan", price: "₹750/month" },
  { label: "GST Plan", price: "₹950/month" }],

  image: spaceSector18,
  images: [spaceSector18, spaceOkhla, spaceMahipalpur, spaceKarolbagh],
  popular: false,
  available: true,
  negotiable: false,
  lat: 28.57, lng: 77.322
},
{
  id: 4,
  name: "CP Alt F",
  location: "Connaught Place",
  address: "Connaught Place, Central Delhi, Delhi — 110001",
  rating: 4.8,
  reviews: 312,
  tags: ["Prime Location", "Café Lounge"],
  plans: [
  { label: "GST Plan", price: "₹1,200/month" },
  { label: "Mailing Plan", price: "₹900/month" },
  { label: "Business Reg", price: "₹1,500/month" }],

  image: connaughtPlace1,
  images: [connaughtPlace1, turkmanGate1, greenPark1, spaceLajpat],
  popular: true,
  available: false,
  negotiable: true,
  lat: 28.632, lng: 77.219
},
{
  id: 5,
  name: "Mytime Cowork",
  location: "Lajpat Nagar",
  address: "Lajpat Nagar IV, New Delhi, Delhi — 110024",
  rating: 4.3,
  reviews: 54,
  tags: ["Hot Desk", "Locker Storage"],
  plans: [
  { label: "Basic Plan", price: "₹600/month" },
  { label: "GST Plan", price: "₹800/month" }],

  image: spaceLajpat,
  images: [spaceLajpat, spaceNehru, spaceOkhla, spaceSector18],
  popular: false,
  available: true,
  negotiable: false,
  lat: 28.569, lng: 77.243
},
{
  id: 6,
  name: "Virtualexcel Hub",
  location: "Nehru Place",
  address: "Nehru Place, South Delhi, Delhi — 110019",
  rating: 4.5,
  reviews: 88,
  tags: ["Virtual Office", "GST Address"],
  plans: [
  { label: "Virtual Plan", price: "₹499/month" },
  { label: "GST Plan", price: "₹699/month" }],

  image: spaceNehru,
  images: [spaceNehru, spaceMahipalpur, spaceKarolbagh, connaughtPlace1],
  popular: false,
  available: true,
  negotiable: true,
  lat: 28.549, lng: 77.252
},
{
  id: 7,
  name: "Okhla Alt F",
  location: "Okhla Phase",
  address: "Okhla Phase III, New Delhi, Delhi — 110020",
  rating: 4.7,
  reviews: 130,
  tags: ["Private Cabin", "Event Space"],
  plans: [
  { label: "GST Plan", price: "₹950/month" },
  { label: "Mailing Plan", price: "₹720/month" },
  { label: "Business Reg", price: "₹1,100/month" }],

  image: spaceOkhla,
  images: [spaceOkhla, spaceMahipalpur, greenPark1, turkmanGate1],
  popular: true,
  available: true,
  negotiable: true,
  lat: 28.535, lng: 77.268
},
{
  id: 8,
  name: "Rangpuri Coworks",
  location: "Mahipalpur Area",
  address: "Rangpuri, Mahipalpur, South Delhi — 110037",
  rating: 4.1,
  reviews: 40,
  tags: ["Budget Friendly", "Parking"],
  plans: [
  { label: "Basic Plan", price: "₹550/month" }],

  image: spaceMahipalpur,
  images: [spaceMahipalpur, spaceKarolbagh, spaceSector18, spaceLajpat],
  popular: false,
  available: true,
  negotiable: false,
  lat: 28.524, lng: 77.131
},
{
  id: 9,
  name: "Summit Offices",
  location: "Karol Bagh",
  address: "Karol Bagh, Central Delhi, Delhi — 110005",
  rating: 4.6,
  reviews: 75,
  tags: ["Meeting Room", "High-Speed WiFi"],
  plans: [
  { label: "GST Plan", price: "₹880/month" },
  { label: "Mailing Plan", price: "₹680/month" }],

  image: spaceKarolbagh,
  images: [spaceKarolbagh, connaughtPlace1, spaceOkhla, spaceNehru],
  popular: false,
  available: true,
  negotiable: false,
  lat: 28.652, lng: 77.19
}];


import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

type ViewMode = "list" | "grid";

const WorkspaceCard = ({ ws, view }: {ws: typeof workspaces[0];view: ViewMode;}) => {
  const [liked, setLiked] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/workspace/${ws.id}`);
  const images = ws.images || [ws.image];
  const prevImg = (e: React.MouseEvent) => {e.stopPropagation();setImgIndex((i) => (i - 1 + images.length) % images.length);};
  const nextImg = (e: React.MouseEvent) => {e.stopPropagation();setImgIndex((i) => (i + 1) % images.length);};

  if (view === "list") {
    return (
      <div
        onClick={handleNavigate}
        className="flex gap-4 cursor-pointer group bg-card rounded-2xl border border-border/60 p-4 shadow-soft hover:shadow-soft-lg transition-all duration-200">

        {/* Image — fixed size, never shrinks */}
        <div className="relative w-36 h-auto min-h-[120px] flex-shrink-0 rounded-xl overflow-hidden self-stretch">
          <img
            src={images[imgIndex]}
            alt={ws.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {ws.popular &&
          <span className="absolute top-2 left-2 flex items-center gap-1 text-[10px] font-normal px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground shadow-sm">
              <Flame className="w-2.5 h-2.5" /> Popular
            </span>
          }
          <span className={`absolute bottom-2 left-2 text-[10px] font-normal px-2 py-0.5 rounded-full backdrop-blur-sm text-white shadow-sm ${ws.available ? "bg-black/50" : "bg-black/60"}`}>
            {ws.available ? "Available Now" : "Fully Booked"}
          </span>
        </div>

        {/* Content — all stacked vertically */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          {/* Name + Rating + Actions */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-[15px] text-foreground leading-snug tracking-[1px]">{ws.location}</h3>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={(e) => {e.stopPropagation();setLiked(!liked);}}
                className="w-7 h-7 rounded-full bg-muted/60 flex items-center justify-center hover:bg-muted transition-all duration-200">

                <Bookmark className={`w-3.5 h-3.5 ${liked ? "fill-primary text-primary" : "text-foreground/60"}`} />
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-full bg-muted/60 flex items-center justify-center hover:bg-muted transition-all duration-200">

                <ShoppingCart className="w-3.5 h-3.5 text-foreground/60" />
              </button>
              <div className="flex items-center gap-1 bg-muted/60 rounded-full px-2 py-0.5">
                <Star className="w-3 h-3 fill-gold text-gold" />
                <span className="text-xs font-semibold text-foreground">{ws.rating}</span>
                <span className="text-[11px] text-muted-foreground">({ws.reviews})</span>
              </div>
            </div>
          </div>


          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {ws.tags.map((tag) =>
            <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full border border-border/70 text-muted-foreground bg-muted/40">
                {tag}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-border/50 mt-1" />

          {/* Pricing */}
          <div className="space-y-1">
            {ws.plans.slice(0, 2).map((plan) =>
            <div key={plan.label} className="flex items-center gap-3">
                <span className="text-[11px] text-muted-foreground w-24 flex-shrink-0">{plan.label}</span>
                <span className="text-xs font-normal text-foreground">{plan.price}</span>
              </div>
            )}
          </div>

          {/* CTAs — always on their own row */}
          <div className="flex gap-2 mt-1">
            <button
              onClick={(e) => {e.stopPropagation();handleNavigate();}}
              className="py-2 px-4 text-xs font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 whitespace-nowrap">

              Get Best Price
            </button>
            <button
              onClick={(e) => {e.stopPropagation();handleNavigate();}}
              className="py-2 px-3 text-xs font-medium rounded-full border border-border text-foreground hover:bg-muted transition-all duration-200 flex items-center gap-1 whitespace-nowrap">

              <Phone className="w-3 h-3" /> Contact Sales
            </button>
          </div>
        </div>
      </div>);

  }

  // Grid view
  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer group bg-card rounded-2xl border border-border/60 shadow-soft hover:shadow-soft-lg transition-all duration-200 overflow-hidden flex flex-col">

      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={images[imgIndex]}
          alt={ws.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {/* Popular badge */}
        {ws.popular &&
        <span className="absolute top-3 left-3 flex items-center gap-1 text-[10px] font-normal px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground shadow-sm">
            <Flame className="w-2.5 h-2.5" /> Popular
          </span>
        }

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <button
            onClick={(e) => {e.stopPropagation();setLiked(!liked);}}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white hover:scale-110 transition-all duration-200">

            <Bookmark className={`w-3.5 h-3.5 ${liked ? "fill-primary text-primary" : "text-foreground/60"}`} />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white hover:scale-110 transition-all duration-200">

            <ShoppingCart className="w-3.5 h-3.5 text-foreground/60" />
          </button>
        </div>

        {/* Availability + image nav arrows */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className={`text-[10px] font-normal px-3 py-1 rounded-full backdrop-blur-sm text-white shadow-sm ${ws.available ? "bg-black/50" : "bg-black/60"}`}>
            {ws.available ? "Available Now" : "Fully Booked"}
          </span>
        {images.length > 1 &&
          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button onClick={prevImg} className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-all">
                <ChevronLeft className="w-3.5 h-3.5 text-foreground/70" />
              </button>
              <button onClick={nextImg} className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-all">
                <ChevronRight className="w-3.5 h-3.5 text-foreground/70" />
              </button>
            </div>
          }
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Name + Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-[15px] text-foreground leading-snug tracking-[1px]">{ws.location}</h3>
          <div className="flex items-center gap-1 flex-shrink-0 bg-muted/60 rounded-full px-2 py-0.5 mt-0.5">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-xs font-semibold text-foreground">{ws.rating}</span>
            <span className="text-[11px] text-muted-foreground">({ws.reviews})</span>
          </div>
        </div>


        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {ws.tags.map((tag) =>
          <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full border border-border/70 text-muted-foreground bg-muted/40 hover:bg-muted/80 transition-colors">
              {tag}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-border/60 mt-3 mb-3" />

        {/* Plan rows — grows to push CTA down */}
        <div className="space-y-2 flex-1">
          {ws.plans.map((plan) =>
          <div key={plan.label} className="flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">{plan.label}</span>
              <span className="text-[13px] font-normal text-foreground">{plan.price}</span>
            </div>
          )}
        </div>


        {/* CTA Buttons — always at bottom */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={(e) => {e.stopPropagation();handleNavigate();}}
            className="flex-1 py-2.5 text-xs font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200">

            Get Best Price
          </button>
          <button
            onClick={(e) => {e.stopPropagation();handleNavigate();}}
            className="flex-1 py-2.5 text-xs font-medium rounded-full border border-border text-foreground hover:bg-muted transition-all duration-200 flex items-center justify-center gap-1.5">

            <Phone className="w-3 h-3" /> Contact Sales
          </button>
        </div>
      </div>
    </div>);

};

const GetWorkspaces = () => {
  const [searchCity, setSearchCity] = useState("Delhi");
  const [activeCity, setActiveCity] = useState("Delhi");
  const [workspaceType, setWorkspaceType] = useState("virtual-office");
  const [searchLocation, setSearchLocation] = useState("");
  const [pricingFilter, setPricingFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showMap, setShowMap] = useState(false);
  const [mapCollapsed, setMapCollapsed] = useState(false);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);

  const filteredWorkspaces = workspaces.filter((ws) =>
  ws.address.toLowerCase().includes(activeCity.toLowerCase())
  );

  const typeLabel: Record<string, string> = {
    "virtual-office": "Virtual Office",
    "coworking": "Coworking Space",
    "on-demand": "On Demand"
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Full-width top section: Breadcrumb + Filters */}
      <div className="mt-20 bg-background border-b border-border/60">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight className="w-3 h-3" />
            <span className="hover:text-foreground transition-colors cursor-pointer">{typeLabel[workspaceType]}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">{activeCity}</span>
          </nav>

          {/* Filter bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 bg-muted/40 border border-border/60 rounded-2xl p-2.5 sm:p-3 relative z-[40]">
            {/* Product */}
            <div className="sm:w-[180px]">
              <Select value={workspaceType} onValueChange={setWorkspaceType}>
                <SelectTrigger className={`border shadow-none rounded-xl h-10 text-sm font-medium px-4 [&>svg]:ml-auto w-full transition-all duration-200 ${
                workspaceType !== "virtual-office" ?
                "bg-muted/50 border-border text-foreground" :
                "border-border/60 text-foreground bg-card hover:border-border hover:shadow-sm"}`
                }>
                  <SelectValue placeholder="Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="virtual-office">Virtual Office</SelectItem>
                  <SelectItem value="coworking">Coworking Space</SelectItem>
                  <SelectItem value="on-demand">On Demand</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-border/60 flex-shrink-0" />

            {/* City */}
            <div className="relative sm:w-[160px]">
              <div className="flex items-center bg-card border border-border/60 rounded-xl h-10 overflow-visible transition-all duration-200">
                <Input
                  value={searchCity}
                  onChange={(e) => {setSearchCity(e.target.value);setShowCitySuggestions(true);}}
                  onFocus={() => setShowCitySuggestions(true)}
                  className="border-0 shadow-none h-full text-sm font-medium text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none bg-transparent px-3 placeholder:text-muted-foreground/40 min-w-0 flex-1"
                  placeholder="City..." />
                <button
                  onClick={() => {setActiveCity(searchCity);setShowCitySuggestions(false);}}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center active:scale-95 transition-all rounded-[10px] mr-1 bg-muted/60 hover:bg-muted">
                  <Search className="w-3.5 h-3.5 text-foreground" strokeWidth={2} />
                </button>
              </div>
              {showCitySuggestions && searchCity.length > 0 && (() => {
                const allCities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Noida", "Gurgaon", "Jaipur", "Lucknow", "Chandigarh", "Indore", "Kochi"];
                const filtered = allCities.filter((c) => c.toLowerCase().includes(searchCity.toLowerCase()));
                if (filtered.length === 0) return null;
                return (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-card border border-border rounded-xl shadow-lg z-[9999] max-h-48 overflow-y-auto">
                    {filtered.map((city) =>
                    <button key={city} onClick={() => {setSearchCity(city);setActiveCity(city);setShowCitySuggestions(false);}}
                    className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-muted/60 transition-colors first:rounded-t-xl last:rounded-b-xl">
                        {city}
                      </button>
                    )}
                  </div>);
              })()}
            </div>

            {/* Search Location */}
            <div className="relative flex-1 min-w-[140px]">
              <div className="flex items-center bg-card border border-border/60 rounded-xl h-10 overflow-hidden transition-all duration-200">
                <MapPin className="w-4 h-4 text-muted-foreground ml-3 flex-shrink-0" />
                <Input
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="border-0 shadow-none h-full text-sm font-medium text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none bg-transparent px-3 placeholder:text-muted-foreground/40 min-w-0 flex-1"
                  placeholder="Search location..." />
              </div>
            </div>

            {/* Pricing */}
            <div className="sm:w-[160px]">
              <Select value={pricingFilter} onValueChange={setPricingFilter}>
                <SelectTrigger className={`border shadow-none rounded-xl h-10 text-sm font-medium px-4 [&>svg]:ml-auto w-full transition-all duration-200 ${
                pricingFilter !== "all" ?
                "bg-muted/50 border-border text-foreground" :
                "border-border/60 text-foreground bg-card hover:border-border hover:shadow-sm"}`
                }>
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Pricing</SelectItem>
                  <SelectItem value="low">Under ₹500/mo</SelectItem>
                  <SelectItem value="mid">₹500 – ₹1,000/mo</SelectItem>
                  <SelectItem value="high">Above ₹1,000/mo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort by */}
            <div className="sm:w-[150px]">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className={`border shadow-none rounded-xl h-10 text-sm font-medium px-4 [&>svg]:ml-auto w-full transition-all duration-200 ${
                sortBy !== "popular" ?
                "bg-muted/50 border-border text-foreground" :
                "border-border/60 text-foreground bg-card hover:border-border hover:shadow-sm"}`
                }>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Sort by</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

          </div>
        </div>
      </div>

      {/* Desktop: split view — listings left, map right */}
      <div className="hidden lg:flex flex-1 h-[calc(100vh-13rem)] relative">
        {/* Left: Listings */}
        <div className={`overflow-y-auto bg-muted/20 transition-all duration-300 ease-in-out relative ${mapCollapsed ? 'w-full' : 'w-[55%] border-r border-border/40'}`}>
          <div className="px-6 py-4">
            {/* Results text + view toggle */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredWorkspaces.length} result(s)</span>{" "}
                for {typeLabel[workspaceType].toLowerCase()} in <span className="font-medium text-foreground">{activeCity}</span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 bg-muted/60 rounded-lg p-0.5">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex items-center justify-center w-9 h-9 rounded-md transition-all duration-200 ${
                    viewMode === "list" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex items-center justify-center w-9 h-9 rounded-md transition-all duration-200 ${
                    viewMode === "grid" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className={
            viewMode === "grid" ?
            `grid gap-4 pb-8 ${mapCollapsed ? 'grid-cols-1 min-[900px]:grid-cols-2 min-[1200px]:grid-cols-3' : 'grid-cols-1 min-[900px]:grid-cols-2'}` :
            "flex flex-col gap-3 pb-8"
            }>
              {filteredWorkspaces.length > 0 ?
              filteredWorkspaces.map((ws) => <WorkspaceCard key={ws.id} ws={ws} view={viewMode} />) :
              <div className="col-span-3 py-16 text-center text-muted-foreground">
                  <p className="text-base font-medium">No spaces found in "{activeCity}"</p>
                  <p className="text-sm mt-1">Try searching a different city.</p>
                </div>
              }
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className={`transition-all duration-300 ease-in-out relative ${mapCollapsed ? 'w-0 overflow-hidden opacity-0' : 'w-[45%] opacity-100'}`}>
          <div className="sticky top-20 h-[calc(100vh-5rem)] rounded-xl overflow-hidden border border-border/30">
            {/* Map toggle — fixed on the map */}
            <button
              onClick={() => setMapCollapsed(!mapCollapsed)}
              className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full border border-border bg-card shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200 cursor-pointer"
              aria-label="Hide map"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <WorkspaceMap workspaces={filteredWorkspaces} />
          </div>
        </div>

        {/* Floating map button — fixed top-right, below filter bar */}
        {mapCollapsed && (
          <button
            onClick={() => setMapCollapsed(false)}
            className="fixed top-[184px] right-8 z-30 w-10 h-10 rounded-full border border-border bg-card shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200 cursor-pointer"
            aria-label="Show map"
          >
            <Map className="w-4.5 h-4.5" />
          </button>
        )}
      </div>

      {/* Mobile: full-width listings + expandable map */}
      <div className="lg:hidden flex-1 relative">
        <div className="px-4 py-4">
          <p className="text-sm text-muted-foreground mb-4">
            Showing <span className="font-semibold text-foreground">{filteredWorkspaces.length} result(s)</span>{" "}
            for {typeLabel[workspaceType].toLowerCase()} in <span className="font-medium text-foreground">{activeCity}</span>
          </p>
          <div className={
          viewMode === "grid" ?
          "grid grid-cols-1 min-[500px]:grid-cols-2 gap-4 pb-8" :
          "flex flex-col gap-3 pb-8"
          }>
            {filteredWorkspaces.length > 0 ?
            filteredWorkspaces.map((ws) => <WorkspaceCard key={ws.id} ws={ws} view={viewMode} />) :

            <div className="col-span-2 py-16 text-center text-muted-foreground">
                <p className="text-base font-medium">No spaces found in "{activeCity}"</p>
                <p className="text-sm mt-1">Try searching a different city.</p>
              </div>
            }
          </div>
        </div>

        {/* Expand Map floating button */}
        <button
          onClick={() => setShowMap(!showMap)}
          className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-card border border-border shadow-soft-lg text-xs font-medium text-foreground hover:bg-muted transition-all">

          <MapPin className="w-3.5 h-3.5" />
          {showMap ? "Hide Map" : "Expand Map"}
        </button>

        {showMap &&
        <div className="fixed inset-0 z-30 mt-16 bg-background">
            <button
            onClick={() => setShowMap(false)}
            className="absolute top-3 left-3 z-40 flex items-center gap-1 px-3 py-2 rounded-full bg-card border border-border shadow-md text-xs font-medium text-foreground">

              <ChevronRight className="w-3.5 h-3.5 rotate-180" /> Back to list
            </button>
            <WorkspaceMap workspaces={filteredWorkspaces} />
          </div>
        }
      </div>
    </div>);

};

export default GetWorkspaces;