import FeatureCard from "../FeatureCard";
import { Database } from "lucide-react";

export default function FeatureCardExample() {
  return (
    <div className="p-8 bg-background">
      <FeatureCard
        icon={Database}
        title="Поиск по базам"
        description="Поиск в различных базах данных с использованием гибкого синтаксиса"
        iconColor="text-primary"
      />
    </div>
  );
}
