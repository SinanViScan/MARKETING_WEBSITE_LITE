"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { MapPin, Search, ChevronDown, X, MoveRight, MoveLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchLocations, fetchScanTypes, fetchCenters, type LocationsResponse, type ScanTypesResponse, type CentersQueryParams } from "@/lib/api/centers";

// Custom CSS for purple slider thumbs and scrollbar
const sliderStyles = `
  .slider-thumb-purple::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #9333ea;
    border: 2px solid #7c3aed;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .slider-thumb-purple::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #9333ea;
    border: 2px solid #7c3aed;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
  
  .state-dropdown-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  
  .state-dropdown-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .state-dropdown-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }
  
  .state-dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
  
  .state-dropdown-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
  }
`;

interface Clinic {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string | null;
  distance: string;
}


export default function ClinicListing() {
  // Filters
  const [selectedState, setSelectedState] = useState<string>("");
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [citySearchQuery, setCitySearchQuery] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [minFee, setMinFee] = useState(0);
  const [maxFee, setMaxFee] = useState(10000);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch locations with React Query
  const { data: locationsResponse, isLoading: loadingLocations } = useQuery<LocationsResponse>({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const locationsData = locationsResponse?.data || null;

  // Fetch scan types with React Query
  const { data: scanTypesResponse, isLoading: loadingScanTypes } = useQuery<ScanTypesResponse>({
    queryKey: ["scanTypes"],
    queryFn: fetchScanTypes,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const scanTypesData = scanTypesResponse?.data || null;

  // Close state dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".state-dropdown-container")) {
        setIsStateDropdownOpen(false);
      }
    };

    if (isStateDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isStateDropdownOpen]);

  // Get cities based on selected state
  const baseCities = selectedState && locationsData?.citiesByState[selectedState]
    ? locationsData.citiesByState[selectedState]
    : locationsData?.cities || [];

  // Filter cities based on search query
  const availableCities = citySearchQuery.trim()
    ? baseCities.filter(city => 
        city.trim().toLowerCase().includes(citySearchQuery.trim().toLowerCase())
      )
    : baseCities;

  // Extract all scan names from scan types data
  const services = scanTypesData?.scanTypes
    ? scanTypesData.scanTypes.flatMap(scanType => 
        scanType.scans.map(scan => scan.name)
      )
    : [];

  const toggleService = (service: string) => {
    setSelectedServices(prev => {
      const newServices = prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service];
      setCurrentPage(1); // Reset to first page when service changes
      return newServices;
    });
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => {
      const newLocations = prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location];
      setCurrentPage(1); // Reset to first page when location changes
      return newLocations;
    });
  };

  const clearAllFilters = () => {
    setSelectedServices([]);
    setSelectedLocations([]);
    setMinFee(0);
    setMaxFee(10000);
    setSelectedState("");
    setCitySearchQuery("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Compute scanType from selected service
  const scanType = useMemo(() => {
    if (selectedServices.length > 0 && scanTypesData) {
      const selectedScan = scanTypesData.scanTypes.find(st => 
        st.scans.some(scan => scan.name === selectedServices[0])
      );
      return selectedScan?.type;
    }
    return undefined;
  }, [selectedServices, scanTypesData]);

  // Build query params for centers
  const centersQueryParams = useMemo(() => {
    const params: CentersQueryParams = {
      page: currentPage,
      limit: 9,
    };

    if (debouncedSearchQuery.trim()) params.search = debouncedSearchQuery.trim();
    if (selectedState) params.state = selectedState;
    if (selectedLocations.length > 0) {
      params.city = selectedLocations[0].trim();
    }
    if (scanType) params.scanType = scanType;
    if (minFee > 0) params.minFee = minFee;
    if (maxFee < 10000) params.maxFee = maxFee;

    return params;
  }, [currentPage, debouncedSearchQuery, selectedState, selectedLocations, scanType, minFee, maxFee]);

  // Fetch centers with React Query - called immediately on page load
  const { 
    data: centersResponse, 
    isLoading: loadingCenters, 
    error: centersError,
    refetch: refetchCenters
  } = useQuery({
    queryKey: ["centers", centersQueryParams],
    queryFn: () => fetchCenters(centersQueryParams),
    enabled: true, // Always enabled - fetch immediately on page load
    staleTime: 30 * 1000, // 30 seconds
  });

  const centers = centersResponse?.data?.centers || [];
  const pagination = centersResponse?.data?.pagination || null;
  const error = centersError ? (centersError instanceof Error ? centersError.message : "An error occurred") : null;

  // Map API centers to Clinic format for display
  const clinics: Clinic[] = centers.map(center => ({
    id: center.id,
    name: center.name,
    location: `${center.city}, ${center.state}`,
    rating: 4, // Default rating since API doesn't provide it
    image: center.centerLogoUrl || null, // Use null instead of fallback image
    distance: "" // Distance not available in API
  }));

  const handleSliderMouseDown = (e: React.MouseEvent, type: 'min' | 'max') => {
    e.preventDefault();
    const sliderRect = e.currentTarget.parentElement?.getBoundingClientRect();
    if (!sliderRect) return;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX - sliderRect.left;
      const percentage = Math.max(0, Math.min(100, (x / sliderRect.width) * 100));
      const value = Math.round((percentage / 100) * 10000); // 0-10000 range

      if (type === 'min') {
        setMinFee(Math.min(value, maxFee - 50)); // Ensure min doesn't exceed max
      } else {
        setMaxFee(Math.max(value, minFee + 50)); // Ensure max doesn't go below min
      }
      setCurrentPage(1); // Reset to first page when fee changes
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show full page skeleton on initial load (when no data has been loaded yet)
  const isInitialLoading = (loadingLocations || loadingScanTypes || loadingCenters) && 
                           currentPage === 1 && 
                           !locationsData && 
                           !scanTypesData && 
                           !centersResponse;

  // Full Page Skeleton Component
  const PageSkeleton = () => (
    <section className="py-14">
      <style dangerouslySetInnerHTML={{ __html: sliderStyles }} />
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        {/* Search Header Skeleton */}
        <div className="mb-8">
          <div className="bg-white rounded-xl border border-gray-300 overflow-visible flex items-center shadow-sm">
            {/* State Dropdown Skeleton */}
            <div className="flex items-center rounded-l-xl gap-3 px-5 py-4 border-r lg:min-w-[240px] xl:min-w-[300px] border-gray-300 bg-gray-50 w-full lg:w-auto">
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded animate-pulse w-24"></div>
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse ml-auto"></div>
            </div>
            {/* Search Input Skeleton */}
            <div className="flex-1 flex items-center px-5 py-4">
              <div className="flex-1 h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse ml-3"></div>
            </div>
          </div>
        </div>

        {/* Filter Toggle Skeleton - Mobile */}
        <div className="lg:hidden mb-4 border rounded-lg">
          <div className="flex items-center gap-2 px-5 py-3">
            <div className="h-5 bg-gray-200 rounded animate-pulse w-16"></div>
            <div className="w-5 h-5 bg-gray-200 rounded animate-pulse ml-auto"></div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-8">
          {/* Filters Sidebar Skeleton */}
          <div className="lg:col-span-1 mb-6 lg:mb-0">
            <div className="bg-white lg:bg-transparent rounded-xl lg:rounded-none p-5 lg:p-0 shadow-sm lg:shadow-none">
              {/* Filter Header Skeleton */}
              <div className="flex items-center border-b-2 border-gray-300/80 pb-4 justify-between mb-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-16"></div>
                <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
              </div>

              {/* Location Filter Skeleton */}
              <div className="mb-6 border-b-2 border-gray-300/80 pb-5">
                <div className="h-5 bg-gray-200 rounded animate-pulse mb-4 w-20"></div>
                <div className="space-y-4">
                  <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="space-y-3 h-[180px]">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="flex items-center py-0.5">
                        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="ml-3 h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Filter Skeleton */}
              <div className="mb-6 border-b-2 border-gray-300/80 pb-5">
                <div className="h-5 bg-gray-200 rounded animate-pulse mb-4 w-32"></div>
                <div className="h-[270px]">
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div key={index} className="h-9 bg-gray-200 rounded-lg animate-pulse w-24"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fees Filter Skeleton */}
              <div className="mb-6 pb-5">
                <div className="h-5 bg-gray-200 rounded animate-pulse mb-4 w-12"></div>
                <div className="space-y-6">
                  <div className="h-1 bg-gray-200 rounded-full mt-2"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Skeleton */}
          <div className="lg:col-span-3 xl:col-span-4">
            <div className="bg-transparent">
              {/* Results Header Skeleton */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-32"></div>
              </div>

              {/* Clinic Grid Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="p-3 rounded-2xl">
                    {/* Image Skeleton */}
                    <div className="aspect-video relative rounded-xl bg-gray-200 animate-pulse mb-4"></div>
                    {/* Title Skeleton */}
                    <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-3 w-3/4"></div>
                    {/* Location Skeleton */}
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Show full page skeleton on initial load
  if (isInitialLoading) {
    return <PageSkeleton />;
  }

  return (
    <section className="py-14">
      <style dangerouslySetInnerHTML={{ __html: sliderStyles }} />
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        {/* Combined Search Header */}
        <div className="mb-8">
          <div className="state-dropdown-container relative">
            <div className="bg-white rounded-xl border border-gray-300 overflow-visible flex items-center shadow-sm">
              {/* State Dropdown Section - Entire section is clickable */}
              <button
                onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                className="flex items-center rounded-l-xl gap-3 px-5 py-4 border-r lg:min-w-[240px] xl:min-w-[300px] justify-between border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer w-full lg:w-auto"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900 truncate">
                    {selectedState || "Select State"}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Search Section */}
              <div className="flex-1 flex items-center px-5 py-4">
                <input
                  type="text"
                  placeholder="Search Centers"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="flex-1 font-normal outline-none text-sm placeholder-gray-500"
                />
                <Search className="w-5 h-5 text-primary-600 ml-3" />
              </div>
            </div>
            
            {/* State Dropdown - Positioned outside the overflow container */}
            {isStateDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto w-full lg:w-[300px] xl:w-[300px] state-dropdown-scrollbar">
                <div className="py-1">
                  {loadingLocations ? (
                    <>
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="px-4 py-2.5">
                          <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
                        </div>
                      ))}
                    </>
                  ) : (
                    locationsData?.states.map((state) => (
                      <button
                        key={state}
                        onClick={() => {
                          setSelectedState(state);
                          setIsStateDropdownOpen(false);
                          setSelectedLocations([]);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                          selectedState === state ? 'bg-primary-50 text-primary-900 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {state}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Filter Toggle Button - Only on small screens */}
        <div className="lg:hidden mb-4 border rounded-lg">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-5 py-3 text-base font-medium text-gray-700 hover:text-gray-900 border-r border-l transition-colors"
          >
            <span>Filter</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 mb-6 lg:mb-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white lg:bg-transparent rounded-xl lg:rounded-none p-5 lg:p-0 shadow-sm lg:shadow-none">
              <div className="flex items-center border-b-2 border-gray-300/80 pb-4 justify-between mb-6">
                <h3 className="text-xl font-semibold text-primary-900">Filter</h3>
                {loadingLocations || loadingScanTypes ? (
                  <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                ) : (
                  <button
                    onClick={clearAllFilters}
                    className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-700 border border-gray-600 border-dashed px-4 py-1.5 rounded-full font-medium"
                  >
                    Clear all
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Location Filter */}
              <div className="mb-6 border-b-2 border-gray-300/80 pb-5">
                {loadingLocations ? (
                  <>
                    <div className="h-5 bg-gray-200 rounded animate-pulse mb-4 w-20"></div>
                    <div className="space-y-4">
                      <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                      <div className="space-y-3 h-[180px] overflow-y-auto pr-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <div key={index} className="flex items-center py-0.5">
                            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="ml-3 h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="text-base font-semibold text-primary-900 mb-4">Location</h4>
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search your city"
                          value={citySearchQuery}
                          onChange={(e) => setCitySearchQuery(e.target.value)}
                          className="w-full px-4 py-2.5 pr-10 text-sm border-[1.3px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                      <div className="space-y-3 h-[180px] overflow-y-auto pr-2 custom-scrollbar">
                        {availableCities.length > 0 ? (
                          availableCities.map((city) => (
                            <label key={city} className="flex items-center cursor-pointer py-0.5">
                              <input
                                type="checkbox"
                                checked={selectedLocations.includes(city.trim())}
                                onChange={() => toggleLocation(city.trim())}
                                className="w-4 h-4 rounded border-gray-300 text-primary-800 focus:ring-primary-800 accent-primary-800 cursor-pointer flex-shrink-0"
                              />
                              <span className={`ml-3 text-sm ${selectedLocations.includes(city.trim()) ? 'text-primary-800 font-medium' : 'text-gray-700'}`}>
                                {city.trim()}
                              </span>
                            </label>
                          ))
                        ) : (
                          <div className="text-sm text-gray-500 py-2 h-full flex items-center justify-center">
                            {citySearchQuery.trim() ? "No cities found matching your search" : "No cities available"}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Services Filter */}
              <div className="mb-6 border-b-2  border-gray-300/80 pb-5">
                {loadingScanTypes ? (
                  <>
                    <div className="h-5 bg-gray-200 rounded animate-pulse mb-4 w-32"></div>
                    <div className="h-[270px] overflow-y-auto pr-2">
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 12 }).map((_, index) => (
                          <div key={index} className="h-9 bg-gray-200 rounded-lg animate-pulse w-24"></div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : services.length > 0 ? (
                  <>
                    <h4 className="text-base font-semibold text-primary-900 mb-4">Services/Treatments</h4>
                    <div className="h-[270px] overflow-y-auto pr-2 custom-scrollbar">
                      <div className="flex flex-wrap gap-2">
                        {services.map((service) => (
                          <button
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                              selectedServices.includes(service)
                                ? "bg-primary-200 text-primary-900 font-medium border-primary-800"
                                : "bg-white text-gray-700 border-gray-300 hover:border-primary-700"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="text-base font-semibold text-primary-900 mb-4">Services/Treatments</h4>
                    <div className="text-sm text-gray-500 py-2 h-[270px] flex items-center justify-center">No scan types available</div>
                  </>
                )}
              </div>

              {/* Fees Filter */}
              <div className="mb-6 pb-5">
              {/* border-b-2 border-gray-300/80 */}
                <h4 className="text-base font-semibold text-primary-900 mb-4">Fees</h4>
                <div className="space-y-6">
                  {/* Custom Dual Range Slider */}
                  <div className="relative h-1 bg-gray-200 rounded-full mt-2">
                    {/* Track */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 rounded-full"></div>
                    
                    {/* Active Range */}
                    <div 
                      className="absolute top-0 h-1 bg-primary-800 rounded-full"
                      style={{
                        left: `${(minFee / 10000) * 100}%`,
                        width: `${((maxFee - minFee) / 10000) * 100}%`
                      }}
                    ></div>
                    
                    {/* Min Handle */}
                    <div
                      className="absolute top-1/2 w-4 h-4 bg-white border-2 border-primary-800 rounded-full cursor-pointer transform -translate-y-1/2 -translate-x-1/2 shadow-sm hover:shadow-md transition-shadow"
                      style={{ left: `${(minFee / 10000) * 100}%` }}
                      onMouseDown={(e) => handleSliderMouseDown(e, 'min')}
                    ></div>
                    
                    {/* Max Handle */}
                    <div
                      className="absolute top-1/2 w-4 h-4 bg-white border-2 border-primary-600 rounded-full cursor-pointer transform -translate-y-1/2 -translate-x-1/2 shadow-sm hover:shadow-md transition-shadow"
                      style={{ left: `${(maxFee / 10000) * 100}%` }}
                      onMouseDown={(e) => handleSliderMouseDown(e, 'max')}
                    ></div>
                  </div>
                  
                  {/* Value Input Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600">₹</span>
                      <input
                        type="number"
                        value={minFee}
                        onChange={(e) => {
                          setMinFee(Number(e.target.value));
                          setCurrentPage(1);
                        }}
                        className="w-full pl-8 pr-3 py-2.5 text-sm border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600">₹</span>
                      <input
                        type="number"
                        value={maxFee}
                        onChange={(e) => {
                          setMaxFee(Number(e.target.value));
                          setCurrentPage(1);
                        }}
                        className="w-full pl-8 pr-3 py-2.5 text-sm border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              {/* <div>
                <h4 className="text-base font-semibold text-primary-900 mb-4">Rating</h4>
                <div className="space-y-3">
                  {["All", "4.5⭐ & Above", "4.0⭐ & Above", "3.5⭐ & Above"].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={selectedRating === rating}
                        onChange={(e) => setSelectedRating(e.target.value)}
                        className="w-4 h-4 text-primary-600 focus:ring-primary-500 accent-primary-600"
                      />
                      <span className={`ml-3 text-sm ${selectedRating === rating ? 'text-primary-600 font-medium' : 'text-gray-700'}`}>{rating}</span>
                    </label>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 xl:col-span-4">
            <div className="bg-transparent">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                {loadingCenters ? (
                  <span className="text-sm text-gray-700 bg-gray-200 px-4 py-2 rounded-lg font-medium">
                    Loading...
                  </span>
                ) : error ? (
                  <span className="text-sm text-red-700 bg-red-100 px-4 py-2 rounded-lg font-medium">
                    {error}
                  </span>
                ) : (
                  <span className="text-sm text-gray-700 bg-gray-200 px-4 py-2 rounded-lg font-medium">
                    {pagination?.totalCount.toLocaleString() || 0} <span className="text-gray-500">Results found.</span>
                  </span>
                )}
                {/* Sort by section - commented out */}
                {/* <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <div className="relative">
                    <button 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 border border-gray-400 border-dashed px-4 py-2 rounded-full font-medium focus:outline-none focus:ring-0 focus:ring-primary-500 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span>{sortBy}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <div className="py-1">
                        <button 
                          onClick={() => { setSortBy("Relevance"); setIsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          Relevance
                        </button>
                        <button 
                          onClick={() => { setSortBy("Rating"); setIsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          Rating
                        </button>
                        <button 
                          onClick={() => { setSortBy("Distance"); setIsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          Distance
                        </button>
                        <button 
                          onClick={() => { setSortBy("Price"); setIsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          Price
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Clinic Grid */}
              {loadingCenters ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="p-3 rounded-2xl">
                      {/* Image Skeleton */}
                      <div className="aspect-video relative rounded-xl bg-gray-200 animate-pulse mb-4"></div>
                      {/* Title Skeleton */}
                      <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-3 w-3/4"></div>
                      {/* Location Skeleton */}
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <p className="text-red-800">{error}</p>
                  <button
                    onClick={() => refetchCenters()}
                    className="mt-4 px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800"
                  >
                    Retry
                  </button>
                </div>
              ) : clinics.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No centers found matching your criteria.</p>
                  <p className="text-gray-500 text-sm mt-2">Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {clinics.map((clinic) => (
                  <div key={clinic.id} className="p-3 rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                    <div className="aspect-video relative rounded-xl bg-gray-200 flex items-center justify-center">
                      {clinic.image ? (
                        <>
                          <Image
                            src={clinic.image}
                            alt={clinic.name}
                            fill
                            className="object-cover rounded-xl"
                            onError={(e) => {
                              // Hide image on error, show grey background with text
                              const target = e.target as HTMLElement;
                              target.style.display = 'none';
                              const container = target.parentElement;
                              if (container) {
                                const textElement = container.querySelector('.no-image-text') as HTMLElement;
                                if (textElement) {
                                  textElement.style.display = 'block';
                                }
                              }
                            }}
                          />
                          <p className="text-sm text-gray-500 text-center px-4 no-image-text absolute inset-0 items-center justify-center hidden">
                            Image is not available for this center
                          </p>
                        </>
                      ) : (
                        <p className="text-sm text-gray-500 text-center px-4">
                          Image is not available for this center
                        </p>
                      )}
                    </div>
                    <div className="pt-4">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{clinic.name}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{clinic.location}</span>
                      </div>
                      {/* Rating Section - Commented Out */}
                      {/* <div className="flex items-center gap-1">
                        {[...Array(clinic.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div> */}
                    </div>
                  </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {!loadingCenters && !error && pagination && pagination.totalPages > 1 && (
                <div className="flex items-center justify-center mt-10 gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!pagination.hasPrevPage}
                    className="w-10 h-10 flex items-center justify-center text-sm border border-dashed border-gray-300 rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MoveLeft className="w-4 h-4" />
                  </button>
                  
                  {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                    let pageNum;
                    if (pagination.totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= pagination.totalPages - 2) {
                      pageNum = pagination.totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-10 h-10 flex items-center justify-center text-sm rounded-full font-medium transition-colors ${
                          currentPage === pageNum
                            ? "bg-primary-800 text-white"
                            : "border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {String(pageNum).padStart(2, '0')}
                      </button>
                    );
                  })}
                  
                  {pagination.totalPages > 5 && currentPage < pagination.totalPages - 2 && (
                    <button className="w-10 h-10 flex items-center justify-center text-sm border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                      ...
                    </button>
                  )}
                  
                  {pagination.totalPages > 5 && currentPage < pagination.totalPages - 2 && (
                    <>
                      <button
                        onClick={() => handlePageChange(pagination.totalPages - 1)}
                        className="w-10 h-10 flex items-center justify-center text-sm border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                      >
                        {String(pagination.totalPages - 1).padStart(2, '0')}
                      </button>
                      <button
                        onClick={() => handlePageChange(pagination.totalPages)}
                        className="w-10 h-10 flex items-center justify-center text-sm border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                      >
                        {String(pagination.totalPages).padStart(2, '0')}
                      </button>
                    </>
                  )}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!pagination.hasNextPage}
                    className="w-10 h-10 flex items-center justify-center text-sm border border-dashed border-gray-300 rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MoveRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
