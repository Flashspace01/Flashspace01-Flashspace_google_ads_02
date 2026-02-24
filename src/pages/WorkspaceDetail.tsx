import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import {
  Star,
  MapPin,
  ArrowLeft,
  Wifi,
  Monitor,
  Coffee,
  Clock,
  Users,
  Car,
  Zap,
  Phone,
} from "lucide-react";

import spaceDelhi from "@/assets/space-connaught-delhi.jpg";
import turkmanGate1 from "@/assets/turkman-gate-1.png";
import turkmanGate2 from "@/assets/turkman-gate-2.avif";
import turkmanGate3 from "@/assets/turkman-gate-3.avif";
import turkmanGate4 from "@/assets/turkman-gate-4.avif";
import spaceMumbai from "@/assets/space-bkc-mumbai.jpg";
import greenPark1 from "@/assets/green-park-1.png";
import greenPark2 from "@/assets/green-park-2.avif";
import greenPark3 from "@/assets/green-park-3.avif";
import greenPark4 from "@/assets/green-park-4.avif";
import connaughtPlace1 from "@/assets/connaught-place-1.png";
import spaceHSR from "@/assets/space-hsr-bangalore.jpg";
import spaceChennai from "@/assets/space-anna-nagar-chennai.jpg";
import odHotDesks from "@/assets/od-hot-desks.jpg";
import odDedicated from "@/assets/od-dedicated-desks.jpg";
import odMeeting from "@/assets/od-meeting-rooms.jpg";
import workspaceCoworking from "@/assets/workspace-coworking.jpg";
import workspaceMeeting from "@/assets/workspace-meeting.jpg";
import coworkingAerial from "@/assets/coworking-aerial.jpg";
import meetingIllustrated from "@/assets/meeting-illustrated.jpg";
import officeIllustrated from "@/assets/office-illustrated.jpg";
import spaceSector18 from "@/assets/space-sector18.png";
import spaceLajpat from "@/assets/space-lajpat.png";
import spaceNehru from "@/assets/space-nehru.png";
import spaceOkhla from "@/assets/space-okhla.png";
import spaceMahipalpur from "@/assets/space-mahipalpur.avif";
import spaceKarolbagh from "@/assets/space-karolbagh.png";

// Mirror the workspaces data from GetWorkspaces
export const workspacesData = [
  {
    id: 1,
    name: "Stirring Minds",
    address: "Kundan Mansion, 2-A/3, Asaf Ali Rd, Turkman Gate, Delhi",
    fullAddress: "Kundan Mansion, 2-A/3, Asaf Ali Rd, Turkman Gate, Chandni Chowk, New Delhi, Delhi, 110002, India",
    rating: 4.9,
    reviews: 245,
    tags: ["High-Speed WiFi", "Meeting Rooms"],
    plans: [
      {
        label: "GST Plan",
        price: "₹900/month",
        yearPrice: "₹10000/year",
        features: ["Virtual Address", "GST Registration", "Mail Handling"],
      },
      {
        label: "Mailing Plan",
        price: "₹650/month",
        yearPrice: "₹7680/year",
        features: ["Mail Handling", "Courier Receipt"],
      },
      {
        label: "Business Reg",
        price: "₹1,200/month",
        yearPrice: "₹11304/year",
        features: ["Business Registration", "Lounge Access", "Meeting Rooms"],
      },
    ],
    images: [turkmanGate1, turkmanGate2, turkmanGate3, turkmanGate4],
    popular: true,
    available: true,
    negotiable: true,
    lat: 28.644,
    lng: 77.231,
    about:
      "Stirring Minds is a premium workspace located in Chandni Chowk, Delhi. Perfect for startups, freelancers, and enterprises looking for a professional business address and workspace solutions.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Monitor, label: "Meeting Rooms" },
      { icon: Coffee, label: "Coffee Bar" },
      { icon: Clock, label: "24/7 Access" },
      { icon: Users, label: "Community Events" },
      { icon: Car, label: "Parking" },
    ],
  },
  {
    id: 2,
    name: "Getset Spaces",
    address: "3rd Floor, LMR House, S-16, Block C, Green Park, South Delhi",
    fullAddress: "3rd Floor, LMR House, S-16, Block C, Green Park, South Delhi, Delhi, 110016, India",
    rating: 4.6,
    reviews: 167,
    tags: ["South Delhi", "Premium Facilities"],
    plans: [
      {
        label: "GST Plan",
        price: "₹1,083/month",
        yearPrice: "₹12996/year",
        features: ["Virtual Address", "GST Registration", "Mail Handling"],
      },
      {
        label: "Mailing Plan",
        price: "₹867/month",
        yearPrice: "₹10404/year",
        features: ["Mail Handling", "Courier Receipt"],
      },
      {
        label: "Business Reg",
        price: "₹1,275/month",
        yearPrice: "₹15300/year",
        features: ["Business Registration", "Lounge Access", "Meeting Rooms"],
      },
    ],
    images: [greenPark1, greenPark2, greenPark3, greenPark4],
    popular: true,
    available: true,
    negotiable: true,
    lat: 28.558,
    lng: 77.207,
    about:
      "Getset Spaces is a modern coworking hub in Green Park, South Delhi. Designed for professionals who value premium facilities, a vibrant community, and a productive environment.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Monitor, label: "Conference Rooms" },
      { icon: Coffee, label: "Pantry & Café" },
      { icon: Zap, label: "Power Backup" },
      { icon: Users, label: "Networking Events" },
      { icon: Car, label: "Parking Available" },
    ],
  },
  {
    id: 3,
    name: "WBB Office",
    address: "Plot 12, Sector 18, Noida, Uttar Pradesh",
    fullAddress: "Plot 12, Sector 18, Noida, Uttar Pradesh, 201301, India",
    rating: 4.4,
    reviews: 98,
    tags: ["Dedicated Desk", "24/7 Access"],
    plans: [
      {
        label: "Basic Plan",
        price: "₹750/month",
        yearPrice: "₹9000/year",
        features: ["Dedicated Desk", "Locker Storage"],
      },
      {
        label: "GST Plan",
        price: "₹950/month",
        yearPrice: "₹11400/year",
        features: ["Virtual Address", "GST Registration"],
      },
    ],
    images: [spaceSector18, greenPark2, greenPark3, greenPark4],
    popular: false,
    available: true,
    negotiable: false,
    lat: 28.57,
    lng: 77.322,
    about:
      "WBB Office is a professional workspace in Sector 18, Noida — ideal for teams and individuals needing dedicated desks with round-the-clock access in a secure environment.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Clock, label: "24/7 Access" },
      { icon: Monitor, label: "Meeting Rooms" },
      { icon: Car, label: "Parking" },
      { icon: Zap, label: "Power Backup" },
      { icon: Coffee, label: "Pantry" },
    ],
  },
  {
    id: 4,
    name: "CP Alt F",
    address: "Connaught Place, Central Delhi, Delhi — 110001",
    fullAddress: "Connaught Place, Central Delhi, New Delhi, Delhi, 110001, India",
    rating: 4.8,
    reviews: 312,
    tags: ["Prime Location", "Café Lounge"],
    plans: [
      {
        label: "GST Plan",
        price: "₹1,200/month",
        yearPrice: "₹14400/year",
        features: ["Virtual Address", "GST Registration", "Mail Handling"],
      },
      {
        label: "Mailing Plan",
        price: "₹900/month",
        yearPrice: "₹10800/year",
        features: ["Mail Handling", "Courier Receipt"],
      },
      {
        label: "Business Reg",
        price: "₹1,500/month",
        yearPrice: "₹18000/year",
        features: ["Business Registration", "Lounge Access", "Meeting Rooms"],
      },
    ],
    images: [connaughtPlace1, greenPark2, greenPark3, greenPark4],
    popular: true,
    available: false,
    negotiable: true,
    lat: 28.632,
    lng: 77.219,
    about:
      "CP Alt F is a premium workspace at the heart of Connaught Place, Delhi. A landmark business address with world-class amenities and an iconic location.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Coffee, label: "Café Lounge" },
      { icon: Monitor, label: "Meeting Rooms" },
      { icon: Users, label: "Community Events" },
      { icon: Car, label: "Parking" },
      { icon: Clock, label: "24/7 Access" },
    ],
  },
  {
    id: 5,
    name: "Mytime Cowork",
    address: "Lajpat Nagar IV, New Delhi, Delhi — 110024",
    fullAddress: "Lajpat Nagar IV, New Delhi, Delhi, 110024, India",
    rating: 4.3,
    reviews: 54,
    tags: ["Hot Desk", "Locker Storage"],
    plans: [
      {
        label: "Basic Plan",
        price: "₹600/month",
        yearPrice: "₹7200/year",
        features: ["Hot Desk", "WiFi Access"],
      },
      {
        label: "GST Plan",
        price: "₹800/month",
        yearPrice: "₹9600/year",
        features: ["Virtual Address", "GST Registration"],
      },
    ],
    images: [spaceLajpat, greenPark2, greenPark3, greenPark4],
    popular: false,
    available: true,
    negotiable: false,
    lat: 28.569,
    lng: 77.243,
    about:
      "Mytime Cowork in Lajpat Nagar offers flexible hot desks and locker storage for freelancers and small teams looking for an affordable yet professional workspace.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Users, label: "Hot Desks" },
      { icon: Monitor, label: "Locker Storage" },
      { icon: Coffee, label: "Pantry" },
      { icon: Clock, label: "Flexible Hours" },
      { icon: Car, label: "Nearby Parking" },
    ],
  },
  {
    id: 6,
    name: "Virtualexcel Hub",
    address: "Nehru Place, South Delhi, Delhi — 110019",
    fullAddress: "Nehru Place, South Delhi, New Delhi, Delhi, 110019, India",
    rating: 4.5,
    reviews: 88,
    tags: ["Virtual Office", "GST Address"],
    plans: [
      {
        label: "Virtual Plan",
        price: "₹499/month",
        yearPrice: "₹5988/year",
        features: ["Virtual Address", "Mail Notification"],
      },
      {
        label: "GST Plan",
        price: "₹699/month",
        yearPrice: "₹8388/year",
        features: ["Virtual Address", "GST Registration", "Mail Handling"],
      },
    ],
    images: [spaceNehru, greenPark2, greenPark3, greenPark4],
    popular: false,
    available: true,
    negotiable: true,
    lat: 28.549,
    lng: 77.252,
    about:
      "Virtualexcel Hub provides premium virtual office and GST address services from Nehru Place — one of Delhi's most prestigious business districts.",
    amenities: [
      { icon: Monitor, label: "Virtual Address" },
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Users, label: "Meeting on Demand" },
      { icon: Zap, label: "GST Support" },
      { icon: Coffee, label: "Lounge Access" },
      { icon: Clock, label: "Business Hours" },
    ],
  },
  {
    id: 7,
    name: "Okhla Alt F",
    address: "Okhla Phase III, New Delhi, Delhi — 110020",
    fullAddress: "Okhla Phase III, New Delhi, Delhi, 110020, India",
    rating: 4.7,
    reviews: 130,
    tags: ["Private Cabin", "Event Space"],
    plans: [
      {
        label: "GST Plan",
        price: "₹950/month",
        yearPrice: "₹11400/year",
        features: ["Virtual Address", "GST Registration", "Mail Handling"],
      },
      {
        label: "Mailing Plan",
        price: "₹720/month",
        yearPrice: "₹8640/year",
        features: ["Mail Handling", "Courier Receipt"],
      },
      {
        label: "Business Reg",
        price: "₹1,100/month",
        yearPrice: "₹13200/year",
        features: ["Business Registration", "Lounge Access", "Meeting Rooms"],
      },
    ],
    images: [spaceOkhla, greenPark2, greenPark3, greenPark4],
    popular: true,
    available: true,
    negotiable: true,
    lat: 28.535,
    lng: 77.268,
    about:
      "Okhla Alt F is a well-equipped workspace in Okhla, Delhi, offering private cabins and a stunning event space. Built for teams who need privacy and impact.",
    amenities: [
      { icon: Users, label: "Private Cabins" },
      { icon: Monitor, label: "Event Space" },
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Coffee, label: "Café & Pantry" },
      { icon: Car, label: "Parking" },
      { icon: Clock, label: "24/7 Access" },
    ],
  },
  {
    id: 8,
    name: "Rangpuri Coworks",
    address: "Rangpuri, Mahipalpur, South Delhi — 110037",
    fullAddress: "Rangpuri, Mahipalpur, South Delhi, Delhi, 110037, India",
    rating: 4.1,
    reviews: 40,
    tags: ["Budget Friendly", "Parking"],
    plans: [
      {
        label: "Basic Plan",
        price: "₹550/month",
        yearPrice: "₹6600/year",
        features: ["Open Desk", "WiFi Access", "Parking"],
      },
    ],
    images: [spaceMahipalpur, greenPark2, greenPark3, greenPark4],
    popular: false,
    available: true,
    negotiable: false,
    lat: 28.524,
    lng: 77.131,
    about:
      "Rangpuri Coworks is a budget-friendly workspace near Mahipalpur, South Delhi — great for freelancers and small teams who need a professional setup without breaking the bank.",
    amenities: [
      { icon: Wifi, label: "WiFi Access" },
      { icon: Car, label: "Free Parking" },
      { icon: Coffee, label: "Pantry" },
      { icon: Users, label: "Open Desks" },
      { icon: Clock, label: "Business Hours" },
      { icon: Zap, label: "Power Backup" },
    ],
  },
  {
    id: 9,
    name: "Summit Offices",
    address: "Karol Bagh, Central Delhi, Delhi — 110005",
    fullAddress: "Karol Bagh, Central Delhi, New Delhi, Delhi, 110005, India",
    rating: 4.6,
    reviews: 75,
    tags: ["Meeting Room", "High-Speed WiFi"],
    plans: [
      {
        label: "GST Plan",
        price: "₹880/month",
        yearPrice: "₹10560/year",
        features: ["Virtual Address", "GST Registration", "Mail Handling"],
      },
      {
        label: "Mailing Plan",
        price: "₹680/month",
        yearPrice: "₹8160/year",
        features: ["Mail Handling", "Courier Receipt"],
      },
    ],
    images: [spaceKarolbagh, greenPark2, greenPark3, greenPark4],
    popular: false,
    available: true,
    negotiable: false,
    lat: 28.652,
    lng: 77.19,
    about:
      "Summit Offices in Karol Bagh offers premium virtual office plans and dedicated meeting rooms in one of Delhi's most central and accessible locations.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Monitor, label: "Meeting Rooms" },
      { icon: Coffee, label: "Pantry" },
      { icon: Car, label: "Parking" },
      { icon: Clock, label: "Business Hours" },
      { icon: Users, label: "Dedicated Desks" },
    ],
  },
];

const WorkspaceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ws = workspacesData.find((w) => w.id === Number(id));
  const [selectedPlan, setSelectedPlan] = useState(0);

  if (!ws) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">Workspace not found.</p>
          <button
            onClick={() => navigate("/get-workspaces")}
            className="px-4 py-2 rounded-[8px] bg-primary text-primary-foreground text-sm font-medium"
          >
            Back to Spaces
          </button>
        </div>
      </div>
    );
  }

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${ws.lng - 0.02}%2C${ws.lat - 0.015}%2C${ws.lng + 0.02}%2C${ws.lat + 0.015}&layer=mapnik&marker=${ws.lat}%2C${ws.lng}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-16">
        {/* ── Header ── */}
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{ws.name}</h1>
          <button
            onClick={() => navigate("/get-workspaces")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Spaces
          </button>
        </div>

        {/* Rating + Address row */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="font-semibold text-foreground">{ws.rating}</span>
            <span>({ws.reviews} reviews)</span>
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{ws.fullAddress}</span>
          </div>
        </div>

        {/* ── Photo Gallery ── */}
        <div className="grid grid-cols-3 gap-2 mb-10 rounded-[16px] overflow-hidden h-[420px]">
          {/* Large left image */}
          <div className="col-span-1 row-span-2 h-full">
            <img
              src={ws.images[0]}
              alt={ws.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Top-right */}
          <div className="h-full">
            <img
              src={ws.images[1]}
              alt={ws.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right column top */}
          <div className="h-full">
            <img
              src={ws.images[2]}
              alt={ws.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bottom-right two images */}
          <div className="h-full">
            <img
              src={ws.images[3] ?? ws.images[0]}
              alt={ws.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              src={ws.images[1]}
              alt={ws.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Main content + Booking sidebar ── */}
        <div className="flex gap-12">
          {/* Left: About + Amenities + Map */}
          <div className="flex-1 min-w-0">
            {/* About */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-3">About this space</h2>
              <p className="text-muted-foreground leading-relaxed">{ws.about}</p>
            </section>

            <div className="border-t border-border/50 mb-8" />

            {/* Amenities */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {ws.amenities.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </section>

            <div className="border-t border-border/50 mb-8" />

            {/* Map */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Where you'll be</h2>
              <div className="rounded-[12px] overflow-hidden border border-border/50 h-72">
                <iframe
                  title="Location Map"
                  className="w-full h-full border-0"
                  src={mapSrc}
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{ws.fullAddress}</p>
            </section>
          </div>

          {/* Right: Sticky Booking Card */}
          <div className="w-[380px] flex-shrink-0">
            <div className="sticky top-28 border border-border rounded-[16px] p-6 bg-card shadow-md">
              {/* Price + Rating */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-2xl font-bold text-foreground">
                    {ws.plans[selectedPlan].yearPrice}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">/ year</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-sm font-semibold text-foreground">{ws.rating}</span>
                </div>
              </div>

              {/* Plan selector label */}
              <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                Select Plan
              </p>

              {/* Plans */}
              <div className="space-y-2 mb-5">
                {ws.plans.map((plan, i) => (
                  <div
                    key={plan.label}
                    onClick={() => setSelectedPlan(i)}
                    className={`cursor-pointer rounded-[10px] border p-3.5 transition-all ${
                      selectedPlan === i
                        ? "border-foreground bg-background shadow-sm"
                        : "border-border/60 bg-background hover:border-foreground/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">{plan.label}</span>
                      <span className="text-sm font-bold text-foreground">{plan.yearPrice}</span>
                    </div>
                    <ul className="space-y-0.5">
                      {plan.features.map((f) => (
                        <li key={f} className="text-[12px] text-muted-foreground flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Book Now */}
              <button className="w-full py-3.5 rounded-[10px] bg-[hsl(50,80%,90%)] text-foreground font-bold text-base hover:bg-[hsl(50,80%,85%)] transition-colors border border-[hsl(50,60%,80%)]">
                Book Now
              </button>
              <p className="text-center text-[12px] text-muted-foreground mt-2">
                You won't be charged yet
              </p>

              {/* Contact Sales */}
              <button className="w-full mt-3 py-3 rounded-[10px] border border-border text-foreground text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Phone className="w-4 h-4" /> Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceDetail;
