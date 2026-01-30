'use client'

import { useEffect } from "react";

import { DollarSign, Users, ShoppingCart, Activity, Sun, Moon } from 'lucide-react';

import { DemographicsPieChart } from "@/components/graphs/DemographicsPieChart";
import { RecentSalesTable } from "@/components/graphs/RecentSalesTable";
import { RevenueBarChart } from "@/components/graphs/RevenueBarChart";
import { SalesLineChart } from "@/components/graphs/SalesLineChart";
import { StatCard } from "@/components/ui/StatCard";

export default function DashboardPage() {

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, [])

  const handleDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }


  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard de Analíticas</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              <span>Gráficos generados con </span>
              <a href="https://recharts.org" className="text-gray-800 dark:text-gray-100 underline" target="_blank">Reacharts</a>
            </p>
          </div>

          <button
            onClick={handleDarkMode}
            className="h-10 w-10 p-2 rounded-xl transition-all duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center"
          >
            <Sun className="dark:hidden text-yellow-500 fill-yellow-500/20" size={20} />
            <Moon className="hidden dark:block text-blue-400 fill-blue-400/10" size={20} />
          </button>
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
          <div className="lg:col-span-2 text-gray-600 dark:text-gray-300">
            <SalesLineChart />
          </div>
          <div className="lg:col-span-1 text-gray-600 dark:text-gray-300">
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