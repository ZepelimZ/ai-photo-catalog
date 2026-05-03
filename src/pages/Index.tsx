import { useMemo, useState } from "react";
import { Sparkles, TrendingUp, Layers } from "lucide-react";
import { Sidebar } from "@/components/catalog/Sidebar";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { ShootCard } from "@/components/catalog/ShootCard";
import { categories, shoots } from "@/data/shoots";
import { cn } from "@/lib/utils";

const Index = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<(typeof categories)[number]>("Todos");

  const filtered = useMemo(() => {
    return shoots.filter((s) => {
      const matchCat = active === "Todos" || s.category === active;
      const matchQ =
        !query ||
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.category.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [query, active]);

  return (
    <div className="min-h-screen flex bg-background text-foreground relative overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />

      <Sidebar />

      <div className="flex-1 min-w-0 relative z-10">
        <CatalogHeader query={query} onQuery={setQuery} />

        <main className="px-6 md:px-10 py-8">
          {/* Hero / Title */}
          <section className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs text-secondary mb-4">
                <Sparkles className="h-3 w-3" />
                Coleção Outono 2026
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
                Catálogo de <span className="italic text-secondary">estilos fotográficos</span>
              </h1>
              <p className="text-muted-foreground mt-3 max-w-xl">
                Navegue pelo nosso portfólio, conheça os estilos que fotografamos e inspire-se para o seu próximo ensaio.
              </p>
            </div>
            <div className="flex gap-3">
              <Stat icon={<Layers className="h-4 w-4" />} label="Categorias" value="5" />
              <Stat icon={<TrendingUp className="h-4 w-4" />} label="Estilos" value="48" highlight />
            </div>
          </section>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm border transition-all",
                  active === cat
                    ? "bg-secondary text-secondary-foreground border-secondary shadow-glow"
                    : "bg-muted/40 border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((s) => (
                <ShootCard key={s.id} shoot={s} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              Nenhum estilo encontrado para "{query}".
            </div>
          )}

          <footer className="mt-16 pb-8 text-center text-xs text-muted-foreground">
            NeoStudio — Estúdio Fotográfico Especializado.
          </footer>
        </main>
      </div>
    </div>
  );
};

const Stat = ({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div
    className={cn(
      "px-4 py-3 rounded-xl border min-w-[100px]",
      highlight
        ? "border-secondary/40 bg-secondary/10 text-secondary"
        : "border-border bg-card/50 text-foreground"
    )}
  >
    <div className="flex items-center gap-2 text-xs opacity-80">
      {icon}
      {label}
    </div>
    <div className="font-display text-2xl mt-1">{value}</div>
  </div>
);

export default Index;
