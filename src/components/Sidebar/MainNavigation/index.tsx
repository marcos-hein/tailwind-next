import {
  Home,
  Users,
  Flag,
  CheckSquare,
  BarChart2,
  Layers3,
} from "lucide-react";
import { NavItem } from "./NavItem";

export function MainNavigation() {
  return (
    <nav className="space-y-1">
      <NavItem icon={Home} title="Home" />
      <NavItem icon={BarChart2} title="Dashboard" />
      <NavItem icon={Layers3} title="Projects" />
      <NavItem icon={CheckSquare} title="Tasks" />
      <NavItem icon={Flag} title="Reporting" />
      <NavItem icon={Users} title="Users" />
    </nav>
  );
}
