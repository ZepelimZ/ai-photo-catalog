import shoot1 from "@/assets/shoot-1.jpg";
import shoot2 from "@/assets/shoot-2.jpg";
import shoot3 from "@/assets/shoot-3.jpg";
import shoot4 from "@/assets/shoot-4.jpg";
import shoot5 from "@/assets/shoot-5.jpg";
import shoot6 from "@/assets/shoot-6.jpg";

export type Shoot = {
  id: string;
  title: string;
  category: string;
  description: string;
  credits: number;
  image: string;
  featured?: boolean;
};

export const categories = [
  "Todos",
  "Fantasia",
  "Cyberpunk",
  "Cinemático",
  "Etéreo",
  "Editorial",
  "Natureza",
] as const;

export const shoots: Shoot[] = [
  {
    id: "1",
    title: "Celestial Bloom",
    category: "Fantasia",
    description: "Retrato etéreo com luz cósmica e flores luminosas.",
    credits: 120,
    image: shoot1,
    featured: true,
  },
  {
    id: "2",
    title: "Neon Tokyo",
    category: "Cyberpunk",
    description: "Editorial urbano banhado em néon magenta e ciano.",
    credits: 95,
    image: shoot2,
  },
  {
    id: "3",
    title: "Noir Whisper",
    category: "Cinemático",
    description: "Retrato em P&B com sombras dramáticas e fumaça vintage.",
    credits: 80,
    image: shoot3,
  },
  {
    id: "4",
    title: "Golden Reverie",
    category: "Etéreo",
    description: "Sonho pastel com partículas douradas suspensas no ar.",
    credits: 110,
    image: shoot4,
  },
  {
    id: "5",
    title: "Concrete Muse",
    category: "Editorial",
    description: "Pose escultural em estúdio de concreto com luz dourada.",
    credits: 130,
    image: shoot5,
  },
  {
    id: "6",
    title: "Aurora Mystic",
    category: "Natureza",
    description: "Silhueta sob a aurora boreal em uma paisagem mágica.",
    credits: 140,
    image: shoot6,
  },
];