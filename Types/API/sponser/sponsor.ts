
interface Sponsor {
  SponserID: string;
  name: string;
  SImage: string;
  Type: string;
  Type_id: number;
}


interface Category {
  id: number;
  name: string;
  sponsers: Sponsor[];
}


interface ApiResponse {
  error: boolean;
  responseData: Category[];
  status_code: number;
}

export type { Category, ApiResponse,Sponsor } 