import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import { Sidebar } from "@/components/catalog/Sidebar";
import { ShootCard } from "@/components/catalog/ShootCard";
import { shoots } from "@/data/shoots";
import { useFavorites } from "@/hooks/useFavorites";

const Favorites = () => {
  const { favorites } = useFavorites();
  
  // Filter only the favorited shoots
  const favoriteShoots = shoots.filter((s) => favorites.includes(s.id));

  return (
    <div className="min-h-screen flex bg-background text-foreground relative overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      
      <Sidebar />

      <div className="flex-1 min-w-0 relative z-10">
        <header className="p-6 md:p-10 border-b border-border/50 flex items-center justify-between backdrop-blur-md sticky top-0 z-50">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Catálogo
          </Link>
        </header>

        <main className="px-6 md:px-10 py-8">
          <section className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs text-primary mb-4">
              <Heart className="h-3 w-3 fill-primary text-primary" />
              Minha Coleção
            </div>
            <h1 className="font-display text-4xl md:text-5xl leading-tight">
              Meus <span className="italic text-primary/80">Favoritos</span>
            </h1>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Aqui estão os estilos de ensaios que você mais gostou. Eles ficam salvos no seu navegador para você consultar depois.
            </p>
          </section>

          {favoriteShoots.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {favoriteShoots.map((s) => (
                <ShootCard key={s.id} shoot={s} minimal={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 flex flex-col items-center justify-center border border-dashed border-border rounded-2xl bg-card/20">
              <Heart className="h-12 w-12 text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-display mb-2">Você ainda não tem favoritos</h3>
              <p className="text-muted-foreground max-w-sm mb-6">
                Navegue pelas categorias e clique no coração das fotos que você mais gosta para salvá-las aqui.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/15 text-primary font-medium hover:bg-primary/25 transition-colors border border-primary/30"
              >
                <Sparkles className="h-4 w-4" />
                Explorar Catálogo
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Favorites;
