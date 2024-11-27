export interface User {
  id: number;
  full_name: string;
  birth_date: string;
  balance: number;
  visits_quantity: number; // кол-во посещений
  visits_available: number; // посещения доступны
  photo: File | null;
}
