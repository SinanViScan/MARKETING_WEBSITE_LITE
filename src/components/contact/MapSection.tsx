"use client";

import React, { useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Info, Star, Navigation } from "lucide-react";
import dynamic from "next/dynamic";
// Avoid importing leaflet at module scope to prevent SSR window/document errors
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

interface CityCoordinates {
  [key: string]: [number, number];
}

// Constants
const INDIA_CENTER: [number, number] = [20.5937, 78.9629];

const CLINIC_MARKERS: ClinicMarker[] = [
  {
    id: 1,
    position: [19.076, 72.8777],
    name: "VI-SCAN Diagnostics HSR",
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    phone: "+91 12345 67890",
    address:
      "2nd floor, No, Royal Arcade, 60, 17th Cross Rd, Sector 6, HSR Layout, Mumbai, Maharashtra 400001, India",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: 2,
    position: [12.9716, 77.5946],
    name: "VI-SCAN Diagnostics HSR",
    location: "Bangalore, Karnataka",
    city: "Bangalore",
    phone: "+91 12345 67890",
    address:
      "2nd floor, No, Royal Arcade, 60, 17th Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102, India",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: 3,
    position: [28.7041, 77.1025],
    name: "VI-SCAN Diagnostics HSR",
    location: "Delhi, NCR",
    city: "Delhi",
    phone: "+91 12345 67890",
    address:
      "2nd floor, No, Royal Arcade, 60, 17th Cross Rd, Sector 6, HSR Layout, Delhi, NCR 110001, India",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: 4,
    position: [17.385, 78.4867],
    name: "VI-SCAN Diagnostics HSR",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    phone: "+91 12345 67890",
    address:
      "2nd floor, No, Royal Arcade, 60, 17th Cross Rd, Sector 6, HSR Layout, Hyderabad, Telangana 500001, India",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: 5,
    position: [13.0827, 80.2707],
    name: "VI-SCAN Diagnostics HSR",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    phone: "+91 12345 67890",
    address:
      "2nd floor, No, Royal Arcade, 60, 17th Cross Rd, Sector 6, HSR Layout, Chennai, Tamil Nadu 600001, India",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: 6,
    position: [22.5726, 88.3639],
    name: "VI-SCAN Diagnostics HSR",
    location: "Kolkata, West Bengal",
    city: "Kolkata",
    phone: "+91 12345 67890",
    address:
      "2nd floor, No, Royal Arcade, 60, 17th Cross Rd, Sector 6, HSR Layout, Kolkata, West Bengal 700001, India",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: 7,
    position: [23.0225, 72.5714],
    name: "VI-SCAN Diagnostics HSR",
    location: "Ahmedabad, Gujarat",
    city: "Ahmedabad",
    phone: "+91 12345 67890",
    address:
      "2nd floor, No, Royal Arcade, 60, 17th Cross Rd, Sector 6, HSR Layout, Ahmedabad, Gujarat 380001, India",
    rating: 4.5,
    reviews: 41,
  },
  {
    id: 8,
    position: [18.5204, 73.8567],
    name: "VI-SCAN Diagnostics HSR",
    location: "Pune, Maharashtra",
    city: "Pune",
    phone: "+91 12345 67890",
    address:
      "2nd floor, No, Royal Arcade, 60, 17th Cross Rd, Sector 6, HSR Layout, Pune, Maharashtra 411001, India",
    rating: 4.5,
    reviews: 41,
  },
];

const CITY_COORDINATES: CityCoordinates = {
  all: INDIA_CENTER,
  Mumbai: [19.076, 72.8777],
  Bangalore: [12.9716, 77.5946],
  Delhi: [28.7041, 77.1025],
  Hyderabad: [17.385, 78.4867],
  Chennai: [13.0827, 80.2707],
  Kolkata: [22.5726, 88.3639],
  Ahmedabad: [23.0225, 72.5714],
  Pune: [18.5204, 73.8567],
};

// Custom marker icon (memoized)
const createCustomIcon = (leaflet: LeafletModule): LeafletIcon => {
  const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5C205E" d="M9.462 12.654h1.692v-2.365h1.692v2.365h1.692V8.596L12 6.904L9.461 8.596zM12 20.556q-.235 0-.47-.077t-.432-.25q-1.067-.981-2.164-2.185q-1.096-1.203-1.99-2.493t-1.468-2.633t-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494T12.92 20.21q-.198.173-.442.26t-.479.086"/></svg>
    `;
  const base64 = typeof window !== "undefined" && typeof window.btoa === "function" ? window.btoa(svg) : "";
  return new leaflet.Icon({
    iconUrl: `data:image/svg+xml;base64,${base64}`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -8],
  });
};

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <Star key="half" className="w-3 h-3 fill-yellow-400 text-yellow-400" />
    );
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />);
  }

  return <div className="flex gap-0.5">{stars}</div>;
};

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
        className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-white rounded-lg shadow-xl border border-gray-200 max-w-[280px] lg:max-w-sm z-[1]"
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 20, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-3 lg:p-4">
          {/* Header */}
          <div className="flex items-start justify-between mb-2 lg:mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-xs lg:text-sm font-semibold text-gray-900 mb-1">
                {marker.name}
              </h3>
              <p className="text-[10px] lg:text-xs text-gray-600 mb-2 line-clamp-2">
                {marker.address}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0"
            >
              ×
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2 lg:mb-3">
            <span className="text-xs lg:text-sm font-medium text-gray-900">
              {marker.rating}
            </span>
            <StarRating rating={marker.rating} />
            <span className="text-[10px] lg:text-xs text-primary-900">
              {marker.reviews} reviews
            </span>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <button
              onClick={handleDirections}
              className="w-full flex items-center justify-center gap-2 bg-primary-900 text-white text-[10px] lg:text-xs font-medium py-1.5 lg:py-2 px-2 lg:px-3 rounded-md hover:bg-primary-800 transition-colors"
            >
              <Navigation className="w-3 h-3" />
              Directions
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
);

DetailedInfoCard.displayName = "DetailedInfoCard";



// Custom popup component using Leaflet's Popup but with custom styling
const CustomPopup = React.memo(
  ({
    marker,
    onMarkerClick,
  }: {
    marker: ClinicMarker;
    onMarkerClick: (marker: ClinicMarker) => void;
  }) => (
    <Popup className="custom-popup" closeButton={false} autoPan={false}>
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 max-w-[280px]">
        {/* Content */}
        <div className="p-3">
          <div className="flex items-center justify-center gap-2 px-1.5">
            <div className="w-10 h-10 bg-white border border-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.webp"
                alt="VI-SCAN"
                width={30}
                height={30}
                className="object-cover scale-125"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-primary-900 font-sans mb-1.5">
                {marker.name}
              </h4>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-400" />
                  <span className="text-[10px] font-semibold font-sans text-slate-500">
                    {marker.phone}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Info className="w-3 h-3 text-slate-400" />
                  <span
                    className="text-[10px] font-semibold underline font-sans text-primary-900 cursor-pointer hover:text-primary-700"
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

const MapOverlay = React.memo(
  ({
    selectedCity,
    onViewAll,
  }: {
    selectedCity: string;
    onViewAll: () => void;
  }) => (
    <motion.div
      className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-white rounded-lg shadow-lg p-3 lg:p-4 max-w-[240px] lg:max-w-xs z-[1]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <h3 className="text-sm lg:text-lg font-medium text-gray-900 mb-1 lg:mb-2">
        Our Network
      </h3>
      <p className="text-xs lg:text-sm text-gray-600">
        {selectedCity === "all"
          ? "Find the nearest VI-SCAN diagnostic center to you. We have centers across major cities in India."
          : `Showing VI-SCAN diagnostic centers in ${selectedCity}.`}
      </p>
      {selectedCity !== "all" && (
        <button
          onClick={onViewAll}
          className="mt-1 lg:mt-2 text-[10px] lg:text-xs text-primary-600 hover:text-primary-700 font-medium"
        >
          ← View All Cities
        </button>
      )}
    </motion.div>
  )
);

MapOverlay.displayName = "MapOverlay";

// Main component
const MapSection = () => {
  const [isClient, setIsClient] = React.useState(false);
  const [selectedCity, setSelectedCity] = React.useState<string>("all");
  const [
    selectedMarker,
    setSelectedMarker,
  ] = React.useState<ClinicMarker | null>(null);

  const mapRef = React.useRef<LeafletMap | null>(null);
  const [leaflet, setLeaflet] = React.useState<LeafletModule | null>(null);

  React.useEffect(() => {
    setIsClient(true);
    import("leaflet")
      .then((mod) => setLeaflet(mod))
      .catch(() => {});
  }, []);

  // Memoized filtered markers
  const filteredMarkers = useMemo(
    () =>
      selectedCity === "all"
        ? CLINIC_MARKERS
        : CLINIC_MARKERS.filter((marker) => marker.city === selectedCity),
    [selectedCity]
  );

  // Memoized custom icon
  const customIcon = useMemo(() => (leaflet ? createCustomIcon(leaflet) : null), [leaflet]);

  // Callback functions
  const handleCitySelect = useCallback((city: string) => {
    setSelectedCity(city);
    if (mapRef.current && CITY_COORDINATES[city]) {
      const coordinates = CITY_COORDINATES[city];
      mapRef.current.setView(coordinates, city === "all" ? 5 : 8);
    }
  }, []);

  const handleViewAll = useCallback(() => {
    handleCitySelect("all");
  }, [handleCitySelect]);

  const handleMarkerClick = useCallback((marker: ClinicMarker) => {
    setSelectedMarker(marker);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedMarker(null);
  }, []);

  // Don't render anything during SSR
  if (typeof window === "undefined") {
    return (
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="w-full h-[400px] lg:h-[575px] rounded-3xl bg-gray-100 flex items-center justify-center">
            <div className="text-gray-500">Loading map...</div>
          </div>
        </div>
      </section>
    );
  }

  // Don't render map until client is ready
  if (!isClient) {
    return (
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="w-full h-[400px] lg:h-[575px] rounded-3xl bg-gray-100 flex items-center justify-center">
            <div className="text-gray-500">Loading map...</div>
          </div>
        </div>
      </section>
    );
  }

  if (!leaflet || !customIcon) {
    return (
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="w-full h-[400px] lg:h-[575px] rounded-3xl bg-gray-100 flex items-center justify-center">
            <div className="text-gray-500">Loading map...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 lg:py-10">
      <div className="mx-auto max-sm:px-4 sm:px-4 md:px-6 lg:px-10">
        {/* <CitySelector
          selectedCity={selectedCity}
          onCitySelect={handleCitySelect}
        /> */}

        <div className="relative">
          <motion.div
            className="relative w-full h-[400px] lg:h-[575px] rounded-3xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MapContainer
              ref={mapRef}
              center={INDIA_CENTER}
              zoom={5}
              minZoom={4}
              maxZoom={10}
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

              {filteredMarkers.map((marker) => (
                <Marker
                  key={marker.id}
                  position={marker.position}
                  icon={customIcon}
                >
                  <CustomPopup
                    marker={marker}
                    onMarkerClick={handleMarkerClick}
                  />
                </Marker>
              ))}
            </MapContainer>
          </motion.div>

          {/* Show detailed info card when marker is selected, otherwise show network overlay */}
          <AnimatePresence mode="wait">
            {selectedMarker ? (
              <DetailedInfoCard
                key="details"
                marker={selectedMarker}
                onClose={handleCloseDetails}
              />
            ) : (
              <MapOverlay
                key="overlay"
                selectedCity={selectedCity}
                onViewAll={handleViewAll}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
