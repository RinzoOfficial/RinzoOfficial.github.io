import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  iconColor?: string;
  index?: number;
}

export default function StatCard({ icon: Icon, value, label, iconColor = "text-primary", index = 0 }: StatCardProps) {
  return (
    <motion.div 
      className="flex items-center gap-4 p-6 rounded-lg bg-secondary/30 border border-border/50" 
      data-testid={`stat-${label.toLowerCase()}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center ${iconColor}`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="h-6 w-6" />
      </motion.div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
}
