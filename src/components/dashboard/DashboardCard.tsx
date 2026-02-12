import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const DashboardCard = ({
  title,
  description,
  icon: Icon,
  className,
  children,
  onClick
}: DashboardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "bg-background border border-border rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </motion.div>
  );
};
