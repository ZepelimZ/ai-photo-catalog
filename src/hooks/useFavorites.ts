import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("photo-catalog-favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse favorites", e);
      }
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id];
      
      localStorage.setItem("photo-catalog-favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
};
