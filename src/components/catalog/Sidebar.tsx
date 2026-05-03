import { Sparkles, LayoutGrid, Image as ImageIcon, Wand2, Settings, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Descobrir", icon: Sparkles, key: "discover" },
  { label: "Catálogo", icon: LayoutGrid, key: "catalog", active: true },
  { label: "Meus Ensaios", icon: ImageIcon, key: "shoots" },
  { label: "Geradores", icon: Wand2, key: "gen" },
  { label: "Ajustes", icon: Settings, key: "settings" },
];

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-card/40 backdrop-blur-xl p-6 sticky top-0 h-screen">
      <div className="flex items-center gap-3 mb-12">
        <div
          className="h-10 w-10 rounded-xl flex items-center justify-center text-primary-foreground shadow-glow"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h1 className="font-display text-xl leading-none">Lumina AI</h1>
          <p className="text-xs text-muted-foreground mt-1">Photo Studio</p>
        </div>
      </div>

      <nav className="space-y-1 flex-1">
        {nav.map((item) => (
          <a
            key={item.key}
            href="#"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
              item.active
                ? "bg-primary/15 text-secondary border border-primary/30"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div
        className="mt-8 rounded-xl p-5 border border-secondary/30 relative overflow-hidden"
        style={{ background: "var(--gradient-glow)" }}
      >
        <Crown className="h-5 w-5 text-secondary mb-3" />
        <h3 className="font-display text-lg leading-tight mb-1">Plano Pro</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Créditos ilimitados e estilos exclusivos.
        </p>
        <button
          className="w-full py-2 rounded-lg text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.02]"
          style={{ background: "var(--gradient-gold)" }}
        >
          Fazer Upgrade
        </button>
      </div>
    </aside>
  );
};