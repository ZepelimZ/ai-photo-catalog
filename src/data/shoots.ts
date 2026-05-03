import shootAniversario from "@/assets/ensaio_aniversario.png";
import shootPerfil from "@/assets/ensaio_perfil.png";
import shootAutoridade from "@/assets/ensaio_autoridade.png";
import shootMasculino from "@/assets/ensaio_masculino.png";
import shootFeminino from "@/assets/ensaio_feminino.png";

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
  "Aniversario",
  "Perfil",
  "Autoridade",
  "Masculino",
  "Feminino",
] as const;

export const shoots: Shoot[] = [
  {
    id: "1",
    title: "Celebração Elegante",
    category: "Aniversario",
    description: "Ensaio fotográfico de aniversário com decoração sofisticada e atmosfera festiva.",
    credits: 0,
    image: shootAniversario,
    featured: true,
  },
  {
    id: "2",
    title: "Perfil Corporativo",
    category: "Perfil",
    description: "Retrato profissional moderno com iluminação cinematográfica para perfis e portfólios.",
    credits: 0,
    image: shootPerfil,
  },
  {
    id: "3",
    title: "Presença Executiva",
    category: "Autoridade",
    description: "Fotografia de alto impacto para líderes e executivos que buscam transmitir confiança e poder.",
    credits: 0,
    image: shootAutoridade,
  },
  {
    id: "4",
    title: "Estilo Masculino",
    category: "Masculino",
    description: "Ensaio de moda e lifestyle com foco em estética marcante e iluminação dramática.",
    credits: 0,
    image: shootMasculino,
  },
  {
    id: "5",
    title: "Beleza Feminina",
    category: "Feminino",
    description: "Retrato editorial feminino com luz suave, destacando a elegância e estética.",
    credits: 0,
    image: shootFeminino,
  },
];