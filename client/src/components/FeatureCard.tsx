import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  index?: number;
}

export default function FeatureCard({ icon: Icon, title, description, iconColor = "text-primary", index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 hover-elevate transition-all duration-200 cursor-pointer h-full" data-testid={`card-feature-${title.toLowerCase()}`}>
        <div className="flex flex-col gap-4">
          <motion.div 
            className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center ${iconColor}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
