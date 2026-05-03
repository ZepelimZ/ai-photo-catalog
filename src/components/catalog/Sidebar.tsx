import { Sparkles, LayoutGrid, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

import { Link, useLocation } from "react-router-dom";

import logoImg from "@/assets/logo.png";

const nav = [
  { label: "Início", icon: Sparkles, key: "home", href: "/" },
  { label: "Favoritos", icon: Heart, key: "favorites", href: "/favoritos" },
];

export const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-card/40 backdrop-blur-xl p-6 sticky top-0 h-screen">
      <div className="flex items-center gap-3 mb-12">
        <img 
          src={logoImg} 
          alt="NeoStudio Logo" 
          className="h-12 w-12 rounded-xl object-cover shadow-glow border border-primary/20"
        />
        <div>
          <h1 className="font-display text-xl leading-none">NeoStudio</h1>
          <p className="text-xs text-muted-foreground mt-1">Photo Studio</p>
        </div>
      </div>

      <nav className="space-y-1 flex-1">
        {nav.map((item) => (
          <Link
            key={item.key}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
              location.pathname === item.href
                ? "bg-primary/15 text-primary border border-primary/30"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

    </aside>
  );
};