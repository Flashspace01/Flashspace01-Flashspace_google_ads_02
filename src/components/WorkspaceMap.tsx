import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Fix default marker icon issue with bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Custom marker icon matching the theme (deep green)
const createCustomIcon = (isPopular: boolean) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div style="
      width: 32px; height: 32px;
      background: ${isPopular ? "hsl(142, 20%, 26%)" : "hsl(0, 0%, 100%)"};
      border: 2.5px solid ${isPopular ? "hsl(54, 96%, 88%)" : "hsl(142, 20%, 26%)"};
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    ">
      <div style="
        transform: rotate(45deg);
        color: ${isPopular ? "hsl(54, 96%, 88%)" : "hsl(142, 20%, 26%)"};
        font-size: 14px; font-weight: 700;
      ">●</div>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

interface Workspace {
  id: number;
  name: string;
  location: string;
  address: string;
  rating: number;
  reviews: number;
  plans: { label: string; price: string }[];
  image: string;
  popular: boolean;
  available: boolean;
  lat: number;
  lng: number;
}

interface WorkspaceMapProps {
  workspaces: Workspace[];
  center?: [number, number];
  zoom?: number;
}

export const WorkspaceMap = ({
  workspaces,
  center = [28.59, 77.22],
  zoom = 12,
}: WorkspaceMapProps) => {
  const navigate = useNavigate();

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      zoomControl={false}
      className="w-full h-full rounded-2xl"
      style={{ background: "hsl(0, 0%, 97%)" }}
    >
      {/* Carto Voyager - clean, modern, light tiles */}
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      {workspaces.map((ws) => (
        <Marker
          key={ws.id}
          position={[ws.lat, ws.lng]}
          icon={createCustomIcon(ws.popular)}
        >
          <Popup closeButton={false} className="workspace-popup">
            <div
              onClick={() => navigate(`/workspace/${ws.id}`)}
              className="cursor-pointer w-[240px] -m-[1px]"
            >
              <img
                src={ws.image}
                alt={ws.name}
                className="w-full h-28 object-cover rounded-t-lg"
              />
              <div className="p-3 bg-white rounded-b-lg">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm text-gray-900 tracking-wide">
                    {ws.location}
                  </h4>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-gray-800">
                      {ws.rating}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mb-2 line-clamp-1">
                  {ws.address}
                </p>
                {ws.plans[0] && (
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-500">
                      {ws.plans[0].label}
                    </span>
                    <span className="text-xs font-semibold text-gray-900">
                      {ws.plans[0].price}
                    </span>
                  </div>
                )}
                <div className="mt-2 flex items-center gap-1.5 text-[11px]">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  <span
                    className={`font-medium ${
                      ws.available ? "text-emerald-600" : "text-gray-400"
                    }`}
                  >
                    {ws.available ? "Available Now" : "Fully Booked"}
                  </span>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
