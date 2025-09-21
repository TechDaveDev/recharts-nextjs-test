import { DemographicsPieChart } from "@/components/graphs/DemographicsPieChart";
import { RecentSalesTable } from "@/components/graphs/RecentSalesTable";
import { RevenueBarChart } from "@/components/graphs/RevenueBarChart";
import { SalesLineChart } from "@/components/graphs/SalesLineChart";
import { StatCard } from "@/components/ui/StatCard";
import { DollarSign, Users, ShoppingCart, Activity } from 'lucide-react';

export default function DashboardPage() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard de Análisis</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Bienvenido de nuevo, aquí está el resumen de tu negocio.</p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            title="Ingresos Totales"
            value="$45,231.89"
            change="+20.1%"
            changeType="increase"
            icon={DollarSign}
          />
          <StatCard
            title="Nuevos Usuarios"
            value="+2,350"
            change="+180.1%"
            changeType="increase"
            icon={Users}
          />
          <StatCard
            title="Ventas"
            value="+12,234"
            change="+19%"
            changeType="increase"
            icon={ShoppingCart}
          />
          <StatCard
            title="Tasa de Actividad"
            value="73.5%"
            change="-1.2%"
            changeType="decrease"
            icon={Activity}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SalesLineChart />
          </div>
          <div className="lg:col-span-1">
            <RevenueBarChart />
          </div>
          <div className="lg:col-span-1">
            <DemographicsPieChart />
          </div>
          <div className="lg:col-span-2">
            <RecentSalesTable />
          </div>
        </div>
      </div>
    </main>
  );
}