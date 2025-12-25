"use client";

import React, { useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Info, Star, Navigation } from "lucide-react";
import dynamic from "next/dynamic";
import type { Map as LeafletMap, Icon as LeafletIcon } from "leaflet";
type LeafletModule = typeof import("leaflet");
import Image from "next/image";
// Import Leaflet CSS only when this component is used
import "@/styles/leaflet.css";

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Types
interface ClinicMarker {
  id: number;
  position: [number, number];
  name: string;
  location: string;
  city: string;
  phone: string;
  address: string;
  rating: number;
  reviews: number;
}

// Constants
const CLINIC_POSITION: [number, number] = [19.076, 72.8777]; // Mumbai coordinates for Vi-Scan Diagnostics

const CLINIC_MARKER: ClinicMarker = {
  id: 1,
  position: CLINIC_POSITION,
  name: "Vi-Scan Diagnostics",
  location: "Ghatkopar, Mumbai",
  city: "Mumbai",
  phone: "+911234567890",
  address: "Siddhachal Arcade, Link Road, Near Sathya Sai General Hospital, Andheri, Mumbai - 400048",
  rating: 4.5,
  reviews: 512,
};

// Custom marker icon (memoized)
const createCustomIcon = (leaflet: LeafletModule): LeafletIcon => {
  const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5C205E" d="M9.462 12.654h1.692v-2.365h1.692v2.365h1.692V8.596L12 6.904L9.461 8.596zM12 20.556q-.235 0-.47-.077t-.432-.25q-1.067-.981-2.164-2.185q-1.096-1.203-1.99-2.493t-1.468-2.633t-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494T12.92 20.21q-.198.173-.442.26t-.479.086"/></svg>
    `;
  const base64 = typeof window !== "undefined" && typeof window.btoa === "function" ? window.btoa(svg) : "";
  return new leaflet.Icon({
    iconUrl: `data:image/svg+xml;base64,${base64}`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -6],
  });
};

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <Star key="half" className="w-2 h-2 fill-yellow-400 text-yellow-400" />
    );
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-2 h-2 text-gray-300" />);
  }

  return <div className="flex gap-0.5">{stars}</div>;
};

// Custom popup component
const CustomPopup = React.memo(
  ({
    marker,
    onMarkerClick,
  }: {
    marker: ClinicMarker;
    onMarkerClick: (marker: ClinicMarker) => void;
  }) => (
    <Popup className="custom-popup" closeButton={false} autoPan={false}>
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 max-w-[240px]">
        <div className="p-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white border border-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.webp"
                alt="VI-SCAN"
                width={20}
                height={20}
                className="object-cover scale-125"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-primary-900 font-sans mb-1">
                {marker.name}
              </h4>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <Phone className="w-2 h-2 text-slate-400" />
                  <span className="text-[9px] font-semibold font-sans text-slate-500">
                    {marker.phone}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Info className="w-2 h-2 text-slate-400" />
                  <span
                    className="text-[9px] font-semibold underline font-sans text-primary-900 cursor-pointer hover:text-primary-700"
                    onClick={() => onMarkerClick(marker)}
                  >
                    View Details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  )
);

CustomPopup.displayName = "CustomPopup";

// Detailed info card component
const DetailedInfoCard = React.memo(
  ({ marker, onClose }: { marker: ClinicMarker; onClose: () => void }) => {
    const handleDirections = () => {
      const encodedAddress = encodeURIComponent(marker.address);
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
      window.open(googleMapsUrl, "_blank");
    };

    return (
      <motion.div
        className="absolute top-2 right-2 bg-white rounded-lg shadow-xl border border-gray-200 max-w-[240px] z-[1]"
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 20, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-2">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-semibold text-gray-900 mb-1">
                {marker.name}
              </h3>
              <p className="text-[9px] text-gray-600 mb-2 line-clamp-2">
                {marker.address}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 ml-1 flex-shrink-0 text-sm"
            >
              ×
            </button>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <span className="text-xs font-medium text-gray-900">
              {marker.rating}
            </span>
            <StarRating rating={marker.rating} />
            <span className="text-[9px] text-primary-900">
              {marker.reviews} reviews
            </span>
          </div>

          <div className="space-y-1">
            <button
              onClick={handleDirections}
              className="w-full flex items-center justify-center gap-1 bg-primary-900 text-white text-[9px] font-medium py-1 px-2 rounded-md hover:bg-primary-800 transition-colors"
            >
              <Navigation className="w-2 h-2" />
              Directions
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
);

DetailedInfoCard.displayName = "DetailedInfoCard";

// Main component
interface ClinicMapProps {
  className?: string;
  mapClassName?: string;
}

const ClinicMap: React.FC<ClinicMapProps> = ({ className = "" , mapClassName = "" }) => {
  const [isClient, setIsClient] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = React.useState<ClinicMarker | null>(null);

  const mapRef = React.useRef<LeafletMap | null>(null);
  const [leaflet, setLeaflet] = React.useState<LeafletModule | null>(null);

  React.useEffect(() => {
    setIsClient(true);
    import("leaflet")
      .then((mod) => setLeaflet(mod))
      .catch(() => {});
  }, []);

  // Memoized custom icon
  const customIcon = useMemo(() => (leaflet ? createCustomIcon(leaflet) : null), [leaflet]);

  // Callback functions
  const handleMarkerClick = useCallback((marker: ClinicMarker) => {
    setSelectedMarker(marker);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedMarker(null);
  }, []);

  // Don't render anything during SSR
  if (typeof window === "undefined") {
    return (
      <div className={`w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-sm">Loading map...</div>
      </div>
    );
  }

  // Don't render map until client is ready
  if (!isClient) {
    return (
      <div className={`w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-sm">Loading map...</div>
      </div>
    );
  }

  if (!leaflet || !customIcon) {
    return (
      <div className={`w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center ${className} `}>
        <div className="text-gray-500 text-sm">Loading map...</div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`relative w-full h-64 rounded-lg overflow-hidden shadow-lg ${mapClassName}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MapContainer
          ref={mapRef}
          center={CLINIC_POSITION}
          zoom={15}
          minZoom={10}
          maxZoom={18}
          zoomControl={true}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          dragging={true}
          touchZoom={true}
          className="w-full h-full"
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={CLINIC_MARKER.position}
            icon={customIcon}
          >
            <CustomPopup
              marker={CLINIC_MARKER}
              onMarkerClick={handleMarkerClick}
            />
          </Marker>
        </MapContainer>
      </motion.div>

      {/* Show detailed info card when marker is selected */}
      <AnimatePresence mode="wait">
        {selectedMarker && (
          <DetailedInfoCard
            key="details"
            marker={selectedMarker}
            onClose={handleCloseDetails}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClinicMap;
