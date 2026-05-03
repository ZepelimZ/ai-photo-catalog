import shootAniversario from "@/assets/Aniversario/ensaio_aniversario.png";
import aniv1 from "@/assets/Aniversario/Woman_holding_balloons_studio_202605021746.jpeg";
import aniv2 from "@/assets/Aniversario/Woman_holding_decorated_cake_202605021809.jpeg";
import aniv3 from "@/assets/Aniversario/Woman_holding_gold_balloon_laughing_202605021745.jpeg";
import aniv4 from "@/assets/Aniversario/Woman_sitting_on_cube_balloons_202605021746.jpeg";
import aniv5 from "@/assets/Aniversario/Woman_untying_birthday_gift_202605021745.jpeg";
import shootPerfil from "@/assets/Perfil/ensaio_perfil.png";
import perf1 from "@/assets/Perfil/Man_in_dark_studio_202605031226.jpeg";
import perf2 from "@/assets/Perfil/Man_in_suit_cityscape_rooftop_202605031234.jpeg";
import perf3 from "@/assets/Perfil/Man_standing_in_glass_office_202605031226.jpeg";
import perf4 from "@/assets/Perfil/Woman_in_pastel_dress_studio_202605031226.jpeg";
import perf5 from "@/assets/Perfil/Woman_sitting_at_desk_coworking_202605031226.jpeg";
import perf6 from "@/assets/Perfil/Woman_standing_by_window_202605031234.jpeg";
import perf7 from "@/assets/Perfil/Woman_standing_outdoors_corporat…_202605031226 (1).jpeg";
import perf8 from "@/assets/Perfil/Woman_standing_outdoors_corporat…_202605031226.jpeg";
import shootAutoridade from "@/assets/Autoridade/ensaio_autoridade.png";
import shootMasculino from "@/assets/Masculino/ensaio_masculino.png";
import shootFeminino from "@/assets/Feminino/ensaio_feminino.png";

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
    id: "aniv-1",
    title: "Alegria e Balões",
    category: "Aniversario",
    description: "Mulher com vestido bege segurando um lindo buquê de balões dourados, brancos e rosados em estúdio.",
    credits: 0,
    image: aniv1,
  },
  {
    id: "aniv-2",
    title: "Bolo Decorado",
    category: "Aniversario",
    description: "Mulher sorridente segurando um bolo de aniversário escuro decorado com orquídeas brancas e detalhes dourados.",
    credits: 0,
    image: aniv2,
  },
  {
    id: "aniv-3",
    title: "Celebrando 43",
    category: "Aniversario",
    description: "Mulher rindo alegremente enquanto segura um balão dourado comemorativo em um cenário rústico.",
    credits: 0,
    image: aniv3,
  },
  {
    id: "aniv-4",
    title: "Charme e Elegância",
    category: "Aniversario",
    description: "Mulher em vestido elegante sentada em um cubo branco, cercada por balões brilhantes no chão.",
    credits: 0,
    image: aniv4,
  },
  {
    id: "aniv-5",
    title: "Abrindo Presentes",
    category: "Aniversario",
    description: "Mulher abrindo empolgada um presente de aniversário embrulhado em papel rústico com laço no sofá.",
    credits: 0,
    image: aniv5,
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
    id: "perf-1",
    title: "Retrato Sereno",
    category: "Perfil",
    description: "Retrato masculino com suéter preto em fundo escuro, transmitindo seriedade e confiança.",
    credits: 0,
    image: perf1,
  },
  {
    id: "perf-2",
    title: "Líder Urbano",
    category: "Perfil",
    description: "Homem de terno azul com vista panorâmica noturna da cidade ao fundo.",
    credits: 0,
    image: perf2,
  },
  {
    id: "perf-3",
    title: "Executivo Moderno",
    category: "Perfil",
    description: "Homem de terno azul sorrindo em um escritório bem iluminado com amplas janelas.",
    credits: 0,
    image: perf3,
  },
  {
    id: "perf-4",
    title: "Simpatia no Estúdio",
    category: "Perfil",
    description: "Mulher sorridente com blusa lilás clara em um ensaio de estúdio iluminado.",
    credits: 0,
    image: perf4,
  },
  {
    id: "perf-5",
    title: "Foco no Trabalho",
    category: "Perfil",
    description: "Mulher de blazer verde trabalhando focada em escritório moderno estilo coworking.",
    credits: 0,
    image: perf5,
  },
  {
    id: "perf-6",
    title: "Postura e Elegância",
    category: "Perfil",
    description: "Mulher de terno azul esverdeado sorrindo perto de grande janela com luz natural.",
    credits: 0,
    image: perf6,
  },
  {
    id: "perf-7",
    title: "Perfil Externo",
    category: "Perfil",
    description: "Mulher de terno cinza sorrindo de forma acolhedora em sacada externa de prédio comercial.",
    credits: 0,
    image: perf7,
  },
  {
    id: "perf-8",
    title: "Profissionalismo",
    category: "Perfil",
    description: "Retrato profissional de mulher com terno cinza claro em frente a um prédio envidraçado moderno.",
    credits: 0,
    image: perf8,
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