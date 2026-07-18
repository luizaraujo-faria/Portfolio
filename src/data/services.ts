export type ProjectsType = {
    id: number;
    title: string;
    description: string;
    github: string;
    image?: string;
    icon?: React.ReactNode;
    technologies: string[];
};

export const services: ProjectsType[] = [
  {
    id: 1,
    title: "JL - Donuts House",
    description:
      "Landing page de uma loja de donuts, com foco em responsividade e experiência do usuário.",
    github: "https://jl-donutshouse.netlify.app/",
    image: '',
    icon: '',
    technologies: ['HTML', "Javascript", "Tailwind"],
  },
];
