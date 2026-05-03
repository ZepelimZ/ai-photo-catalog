import { useState } from "react";
import { X, Heart, BookOpen, Check, ChevronLeft } from "lucide-react";
import { shoots, categories } from "@/data/shoots";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

type Source = "favoritos" | "catalogo";
type Step = "source" | "category" | "photos";

type Props = {
  onClose: () => void;
};

export const NewShootModal = ({ onClose }: Props) => {
  const [step, setStep] = useState<Step>("source");
  const [source, setSource] = useState<Source | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const { favorites } = useFavorites();

  const photosToShow = () => {
    if (source === "favoritos") {
      return shoots.filter((s) => favorites.includes(s.id));
    }
    if (source === "catalogo" && selectedCategory) {
      return shoots.filter((s) => s.category === selectedCategory);
    }
    return [];
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleSourceSelect = (src: Source) => {
    setSource(src);
    if (src === "favoritos") {
      setStep("photos");
    } else {
      setStep("category");
    }
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setStep("photos");
  };

  const handleBack = () => {
    if (step === "photos" && source === "catalogo") {
      setStep("category");
      setSelected(new Set());
    } else {
      setStep("source");
      setSource(null);
      setSelectedCategory(null);
      setSelected(new Set());
    }
  };

  const handleConfirm = () => {
    alert(`${selected.size} foto(s) selecionada(s) para o novo ensaio!`);
    onClose();
  };

  const categoriesOnly = categories.filter((c) => c !== "Todos");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] bg-card border border-border rounded-2xl flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            {step !== "source" && (
              <button
                onClick={handleBack}
                className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            <div>
              <h2 className="font-display text-xl leading-none">Novo Ensaio</h2>
              <p className="text-xs text-muted-foreground mt-1">
                {step === "source" && "De onde deseja escolher as fotos?"}
                {step === "category" && "Selecione uma categoria"}
                {step === "photos" && `Escolha as fotos — ${selectedCategory ?? "Favoritas"}`}
              </p>
            </div>
          </div>
          <button
            aria-label="Fechar"
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6">

          {/* STEP 1: Source */}
          {step === "source" && (
            <div className="grid grid-cols-2 gap-4 mt-2">
              <button
                onClick={() => handleSourceSelect("favoritos")}
                className="group flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-border bg-card/60 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">Favoritas</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Escolher entre as fotos que você favoritou
                  </p>
                </div>
              </button>

              <button
                onClick={() => handleSourceSelect("catalogo")}
                className="group flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-border bg-card/60 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">Catálogo</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Navegar pelo catálogo completo de categorias
                  </p>
                </div>
              </button>
            </div>
          )}

          {/* STEP 2: Category */}
          {step === "category" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {categoriesOnly.map((cat) => {
                const cover = shoots.find((s) => s.category === cat);
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className="group relative rounded-xl overflow-hidden border-2 border-border hover:border-primary/60 transition-all aspect-[4/3]"
                  >
                    {cover && (
                      <img
                        src={cover.image}
                        alt={cat}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 font-semibold text-white text-sm">
                      {cat}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 3: Photos */}
          {step === "photos" && (
            <>
              {photosToShow().length === 0 ? (
                <p className="text-center text-muted-foreground py-16">
                  {source === "favoritos"
                    ? "Você ainda não favoritou nenhuma foto."
                    : "Nenhuma foto encontrada nesta categoria."}
                </p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {photosToShow().map((s) => {
                    const isSelected = selected.has(s.id);
                    return (
                      <button
                        key={s.id}
                        onClick={() => toggleSelect(s.id)}
                        className={cn(
                          "relative rounded-xl overflow-hidden border-2 transition-all group text-left",
                          isSelected
                            ? "border-primary shadow-glow"
                            : "border-transparent hover:border-primary/40"
                        )}
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-44 object-cover object-center"
                        />
                        <div className={cn(
                          "absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity",
                          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                        )}>
                          {isSelected && (
                            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                              <Check className="h-5 w-5 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                        <div className="p-2 bg-card/90 border-t border-border/50">
                          <p className="text-xs text-muted-foreground line-clamp-2">{s.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer — only on photo step */}
        {step === "photos" && (
          <div className="px-6 py-4 border-t border-border shrink-0 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {selected.size > 0
                ? `${selected.size} foto${selected.size > 1 ? "s" : ""} selecionada${selected.size > 1 ? "s" : ""}`
                : "Nenhuma foto selecionada"}
            </span>
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-sm border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                Cancelar
              </button>
              <button
                disabled={selected.size === 0}
                onClick={handleConfirm}
                className="px-5 py-2 rounded-lg text-sm font-semibold text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-[1.02] shadow-glow"
                style={{ background: "var(--gradient-primary)" }}
              >
                Enviar Pedido
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
