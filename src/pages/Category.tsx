import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Sidebar } from "@/components/catalog/Sidebar";
import { ShootCard } from "@/components/catalog/ShootCard";
import { shoots } from "@/data/shoots";

const Category = () => {
  const { id } = useParams<{ id: string }>();
  
  // Encontrar os ensaios daquela categoria
  // Vamos usar lowerCase para ignorar case sensitivity na URL
  const categoryShoots = shoots.filter(
    (s) => s.category.toLowerCase() === id?.toLowerCase()
  );

  // Nome da categoria formatado (primeira letra maiúscula)
  const categoryName = id ? id.charAt(0).toUpperCase() + id.slice(1) : "";

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
              <Sparkles className="h-3 w-3" />
              Categoria Selecionada
            </div>
            <h1 className="font-display text-4xl md:text-5xl leading-tight">
              Estilo <span className="italic text-primary/80">{categoryName}</span>
            </h1>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Confira os ensaios fotográficos com o estilo {categoryName}. Role para baixo para explorar as fotografias desta categoria.
            </p>
          </section>

          {categoryShoots.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {categoryShoots.map((s) => (
                <ShootCard key={s.id} shoot={s} minimal={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              Nenhum ensaio encontrado para a categoria "{categoryName}".
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Category;
