export type ProjectsType = {
    id: number;
    title: string;
    description: string;
    github: string;
    technologies: string[];
};
export const projects: ProjectsType[] = [
  {
    id: 1,
    title: "Refeitório IMREA",
    description:
      "E-commerce desenvolvido para uma loja de roupas com foco em responsividade e experiência do usuário.",
    github: "https://github.com/luizaraujo-faria/App-BLE",
    technologies: ['React Native', 'TypeScript', 'Git'],
  },
  {
    id: 2,
    title: "API GoogleSheets",
    description:
      "API REST completa para gerenciamento de usuários com autenticação e CRUD.",
    github: "https://github.com/luizaraujo-faria/API_GoogleSheets",
    technologies: ["Node.js", "Express", "GoogleSheets API"],
  },
    {
    id: 3,
    title: "Shao Bank",
    description:
      "E-commerce desenvolvido para uma loja de roupas com foco em responsividade e experiência do usuário.",
    github: "https://github.com/luizaraujo-faria/Shao_Bank",
    technologies: ['Node.js', 'Nest.js', 'TypeScript', 'MySQL'],
  },
  {
    id: 4,
    title: "ServiFacil (Front-End)",
    description:
      "API REST completa para gerenciamento de usuários com autenticação e CRUD.",
    github: "https://github.com/luizaraujo-faria/ServiFacil-FrontEnd",
    technologies: ["React", "JavaScript", "Tailwind"],
  },
    {
    id: 5,
    title: "Refeitório BG",
    description:
      "E-commerce desenvolvido para uma loja de roupas com foco em responsividade e experiência do usuário.",
    github: "https://github.com/luizaraujo-faria/Sistema_Refeitorio_BG",
    technologies: ["C++", "ESP32", "Arduino IDE"],
  },
  {
    id: 6,
    title: "API Refeitório BG",
    description:
      "API REST completa para gerenciamento de usuários com autenticação e CRUD.",
    github: "https://github.com/luizaraujo-faria/Api_Refeitorio_BG",
    technologies: ["C#", "ASP.NET", "MySQL"],
  },
];