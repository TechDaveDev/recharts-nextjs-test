import { RecentSale, RevenueData, SalesData, UserDemographicsData } from "@/infrastructure/interfaces/Interfaces";

export const salesData: SalesData[] = [
  { name: 'Ene', ventas: 400, ingresos: 240 },
  { name: 'Feb', ventas: 300, ingresos: 139 },
  { name: 'Mar', ventas: 200, ingresos: 980 },
  { name: 'Abr', ventas: 278, ingresos: 390 },
  { name: 'May', ventas: 189, ingresos: 480 },
  { name: 'Jun', ventas: 239, ingresos: 380 },
  { name: 'Jul', ventas: 349, ingresos: 430 },
];

export const revenueByProductData: RevenueData[] = [
  { name: 'Producto A', revenue: 4560 },
  { name: 'Producto B', revenue: 3210 },
  { name: 'Producto C', revenue: 2390 },
  { name: 'Producto D', revenue: 1890 },
  { name: 'Producto E', revenue: 1520 },
];

export const userDemographicsData: UserDemographicsData[] = [
  { name: '18-24', value: 400 },
  { name: '25-34', value: 300 },
  { name: '35-44', value: 300 },
  { name: '45+', value: 200 },
];

export const recentSalesData: RecentSale[] = [
  { id: '1', name: 'Ana García', email: 'ana.g@example.com', amount: '$2,500.00' },
  { id: '2', name: 'Carlos Rodríguez', email: 'carlos.r@example.com', amount: '$1,500.00' },
  { id: '3', name: 'Sofía Martínez', email: 'sofia.m@example.com', amount: '$350.00' },
  { id: '4', name: 'Luis Hernández', email: 'luis.h@example.com', amount: '$450.00' },
  { id: '5', name: 'Laura Pérez', email: 'laura.p@example.com', amount: '$150.00' },
];