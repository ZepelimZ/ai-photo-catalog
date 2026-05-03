import { Sparkles, Heart } from "lucide-react";
import type { Shoot } from "@/data/shoots";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

export const ShootCard = ({ shoot, minimal }: { shoot: Shoot; minimal?: boolean }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(shoot.id);
  return (
    <article className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={shoot.image}
          alt={`Ensaio ${shoot.title} - estilo ${shoot.category}`}
          loading="lazy"
          width={768}
          height={960}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
        {minimal && (
          <button
            aria-label="Favoritar"
            onClick={() => toggleFavorite(shoot.id)}
            className={cn(
              "absolute top-3 right-3 h-9 w-9 rounded-full bg-card/70 backdrop-blur flex items-center justify-center transition-colors",
              favorited ? "text-primary hover:text-primary/80" : "text-muted-foreground hover:text-secondary"
            )}
          >
            <Heart className={cn("h-4 w-4", favorited && "fill-primary")} />
          </button>
        )}
        {!minimal && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/70 backdrop-blur text-[11px] font-medium uppercase tracking-wider text-primary border border-primary/30">
            {shoot.category}
          </span>
        )}
      </div>

      <div className="p-5 -mt-16 relative">
        {!minimal && <h3 className="font-display text-2xl leading-tight mb-2">{shoot.title}</h3>}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{shoot.description}</p>
        {!minimal && (
          <div className="flex items-center justify-end mt-2">
            <button 
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-primary/15 text-foreground border border-primary/30 hover:bg-primary/25 transition-colors"
              onClick={() => window.open(`/categoria/${shoot.category.toLowerCase()}`, "_blank")}
            >
              Ver Estilo
            </button>
          </div>
        )}
      </div>
    </article>
  );
};