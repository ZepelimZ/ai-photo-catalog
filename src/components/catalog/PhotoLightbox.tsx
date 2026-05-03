import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Shoot } from "@/data/shoots";

type Props = {
  shoot: Shoot;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export const PhotoLightbox = ({ shoot, onClose, onPrev, onNext }: Props) => {
  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        aria-label="Fechar"
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-card/70 border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          aria-label="Anterior"
          className="absolute left-4 h-10 w-10 rounded-full bg-card/70 border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          aria-label="Próxima"
          className="absolute right-4 h-10 w-10 rounded-full bg-card/70 border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Image container — stop propagation so click on image doesn't close */}
      <div
        className="relative max-w-4xl max-h-[90vh] mx-4 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={shoot.image}
          alt={shoot.title}
          className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl border border-border/30"
        />
        <p className="text-sm text-muted-foreground text-center max-w-lg px-4">
          {shoot.description}
        </p>
      </div>
    </div>
  );
};
