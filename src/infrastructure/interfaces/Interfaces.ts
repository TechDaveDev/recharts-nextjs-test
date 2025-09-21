export interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ElementType;
}

export interface SalesData {
  name: string;
  ventas: number;
  ingresos: number;
}

export interface RevenueData {
  name: string;
  revenue: number;
}

export interface UserDemographicsData {
  name: string;
  value: number;
  [key: string]: number | string;
}

export interface RecentSale {
  id: string;
  name: string;
  email: string;
  amount: string;
}