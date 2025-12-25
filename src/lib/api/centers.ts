/**
 * API service for fetching diagnostic centers and locations
 */

export interface Center {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  gMapLink: string | null;
  centerLogoUrl: string | null;
  latitude: number | null;
  longitude: number | null;
}

export interface Pagination {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface CentersResponse {
  success: boolean;
  message: string;
  data: {
    centers: Center[];
    pagination: Pagination;
  };
}

export interface CentersQueryParams {
  search?: string;
  state?: string;
  city?: string;
  scanType?: string;
  page?: number;
  limit?: number;
  minFee?: number;
  maxFee?: number;
}

export interface LocationsResponse {
  success: boolean;
  message: string;
  data: {
    states: string[];
    cities: string[];
    citiesByState: Record<string, string[]>;
  };
}

export interface Scan {
  id: number;
  name: string;
  description: string;
  isHaveReport: boolean;
  minPrice: number;
  maxPrice: number;
}

export interface ScanType {
  type: string;
  scans: Scan[];
  minPrice: number;
  maxPrice: number;
  centersCount: number;
}

export interface ScanTypesResponse {
  success: boolean;
  message: string;
  data: {
    scanTypes: ScanType[];
    priceRange: {
      min: number;
      max: number;
      currency: string;
    };
  };
}

/**
 * Fetches available locations (states and cities)
 * Cached for 60 seconds using ISR - locations don't change frequently
 */
export async function fetchLocations(): Promise<LocationsResponse> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/centers/locations`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Use force-cache with revalidate for ISR - enables static generation and caching
      cache: 'force-cache',
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => response.statusText);
      throw new Error(`Failed to fetch locations: ${response.status} ${errorText}`);
    }

    const data: LocationsResponse = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to fetch locations');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    
    // Return a fallback response structure instead of throwing
    // This prevents the component from crashing
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to fetch locations',
      data: {
        states: [],
        cities: [],
        citiesByState: {},
      },
    };
  }
}

/**
 * Fetches available scan types
 * Cached for 60 seconds using ISR - scan types are relatively static
 */
export async function fetchScanTypes(): Promise<ScanTypesResponse> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/centers/scan-types`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Use force-cache with revalidate for ISR - enables static generation and caching
      cache: 'force-cache',
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => response.statusText);
      throw new Error(`Failed to fetch scan types: ${response.status} ${errorText}`);
    }

    const data: ScanTypesResponse = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to fetch scan types');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching scan types:', error);
    
    // Return a fallback response structure instead of throwing
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to fetch scan types',
      data: {
        scanTypes: [],
        priceRange: {
          min: 0,
          max: 10000,
          currency: 'INR',
        },
      },
    };
  }
}

/**
 * Fetches centers from the API based on query parameters
 * Cached for 30 seconds using ISR - centers data can change but benefits from caching
 */
export async function fetchCenters(
  params: CentersQueryParams = {}
): Promise<CentersResponse> {
  
  // Build query string
  const queryParams = new URLSearchParams();
  
  if (params.search) queryParams.append('search', params.search);
  if (params.state) queryParams.append('state', params.state);
  if (params.city) queryParams.append('city', params.city);
  if (params.scanType) queryParams.append('scanType', params.scanType);
  if (params.page) queryParams.append('page', params.page.toString());
  if (params.limit) queryParams.append('limit', params.limit.toString());
  if (params.minFee) queryParams.append('minFee', params.minFee.toString());
  if (params.maxFee) queryParams.append('maxFee', params.maxFee.toString());

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/centers?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Use force-cache with shorter revalidate for dynamic queries - still benefits from caching
      cache: 'force-cache',
      next: { revalidate: 30 }, // Revalidate every 30 seconds (shorter for dynamic queries)
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch centers: ${response.statusText}`);
    }

    const data: CentersResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching centers:', error);
    throw error;
  }
}
