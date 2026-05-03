import { Search, SlidersHorizontal, Bell, Check } from "lucide-react";
import { categories } from "@/data/shoots";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  query: string;
  onQuery: (v: string) => void;
  activeCategory: string;
  onCategorySelect: (cat: string) => void;
};

export const CatalogHeader = ({ query, onQuery, activeCategory, onCategorySelect }: Props) => {
  return (
    <header className="flex flex-col md:flex-row md:items-center gap-4 px-6 md:px-10 py-6 border-b border-border bg-background/60 backdrop-blur-xl sticky top-0 z-20">
      <div className="relative flex-1 max-w-xl">
        <Search className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          type="text"
          placeholder="Buscar estilos, categorias, vibes..."
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/60 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-muted transition-colors"
        />
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hidden md:flex items-center gap-2 px-4 py-3 rounded-xl bg-muted/60 border border-border text-sm hover:bg-muted transition-colors outline-none">
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-card border-border">
            {categories.map((cat) => (
              <DropdownMenuItem
                key={cat}
                onClick={() => onCategorySelect(cat)}
                className="flex items-center justify-between cursor-pointer focus:bg-primary/10"
              >
                {cat}
                {activeCategory === cat && <Check className="h-4 w-4 text-primary" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <button
          aria-label="Notificações"
          className="hidden md:flex h-12 w-12 items-center justify-center rounded-xl bg-muted/60 border border-border hover:bg-muted transition-colors relative"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-secondary" />
        </button>
      </div>
    </header>
  );
};