import { Sparkles, Heart } from "lucide-react";
import type { Shoot } from "@/data/shoots";

export const ShootCard = ({ shoot }: { shoot: Shoot }) => {
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
        <button
          aria-label="Favoritar"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-card/70 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-secondary transition-colors"
        >
          <Heart className="h-4 w-4" />
        </button>
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/70 backdrop-blur text-[11px] font-medium uppercase tracking-wider text-secondary border border-secondary/30">
          {shoot.category}
        </span>
      </div>

      <div className="p-5 -mt-16 relative">
        <h3 className="font-display text-2xl leading-tight mb-2">{shoot.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{shoot.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-secondary">
            <Sparkles className="h-4 w-4" />
            <span className="font-bold">{shoot.credits}</span>
            <span className="text-xs text-muted-foreground">créditos</span>
          </div>
          <button className="text-sm font-semibold px-4 py-2 rounded-lg bg-primary/15 text-foreground border border-primary/30 hover:bg-primary/25 transition-colors">
            Gerar
          </button>
        </div>
      </div>
    </article>
  );
};