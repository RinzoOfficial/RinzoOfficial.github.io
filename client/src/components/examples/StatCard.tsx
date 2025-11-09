import StatCard from "../StatCard";
import { Database } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="p-8 bg-background">
      <StatCard
        icon={Database}
        value="25ТБ"
        label="Активных баз данных"
        iconColor="text-primary"
      />
    </div>
  );
}
