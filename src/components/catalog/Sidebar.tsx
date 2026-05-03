import { Sparkles, LayoutGrid, Image as ImageIcon, Wand2, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Início", icon: Sparkles, key: "home" },
  { label: "Estilos", icon: LayoutGrid, key: "styles", active: true },
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
          <h1 className="font-display text-xl leading-none">NeoStudio</h1>
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

    </aside>
  );
};