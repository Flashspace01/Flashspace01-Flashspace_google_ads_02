import {
  Shield, Wallet, ArrowUpRight, Zap, MapPin, Users, ShoppingCart, Briefcase,
  Factory, Layers, Target, ClipboardCheck, Globe, Landmark, FileText,
  Award, Heart, HeartPulse, RefreshCw, ArrowRightLeft, MessageCircle,
  CheckCircle, Rocket, UserCheck, Laptop, Package, ShieldCheck, LifeBuoy,
  Receipt, Cpu, Building2, Plane, GitBranch, Scale, CreditCard, UserPlus,
  BadgeCheck, Mail, Phone, Monitor, Calendar, Lock, Search, Cloud, Code,
  Headphones, Wifi, HardDrive, ScrollText, BookmarkCheck, Gavel, Home,
  Stamp, Bell, Flag, Calculator, Clock, Repeat, TrendingUp, Database,
  BookOpen, TrendingDown, Scan, Smartphone, Handshake, GraduationCap,
  type LucideIcon,
} from "lucide-react";
import type { Feature } from "@/data/pageContent";

const iconMap: Record<string, LucideIcon> = {
  Shield, Wallet, ArrowUpRight, Zap, MapPin, Users, ShoppingCart, Briefcase,
  Factory, Layers, Target, ClipboardCheck, Globe, Landmark, FileText,
  Award, Heart, HeartPulse, RefreshCw, ArrowRightLeft, MessageCircle,
  CheckCircle, Rocket, UserCheck, Laptop, Package, ShieldCheck, LifeBuoy,
  Receipt, Cpu, Building2, Plane, GitBranch, Scale, CreditCard, UserPlus,
  BadgeCheck, Mail, Phone, Monitor, Calendar, Lock, Search, Cloud, Code,
  Headphones, Wifi, HardDrive, ScrollText, BookmarkCheck, Gavel, Home,
  Stamp, Bell, Flag, Calculator, Clock, Repeat, TrendingUp, Database,
  BookOpen, TrendingDown, Scan, Smartphone, Handshake, GraduationCap,
};

interface FeatureGridProps {
  features: Feature[];
}

export const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((f) => {
        const Icon = iconMap[f.icon] || Shield;
        return (
          <div
            key={f.title}
            className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1.5">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </div>
        );
      })}
    </div>
  );
};
