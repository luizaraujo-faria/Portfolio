import images from '../../assets/images';
import CV from '/CV-Luiz.pdf';

const AboutSection = () => {

  return(

    <section id="about" className="w-full h-[110vh] relative flex items-center justify-start flex-col gap-8 p-5 bg-black md:h-[130vh]  lg:gap-20 lg:p-0 dark:bg-white">
      
      <div className="w-full h-fit flex gap-8 justify-center items-center ">
        <article className="w-full h-fit mt-18 col-start-1 flex items-center justify-start flex-col gap-30 lg:w-[90%]">
          <h3 className="text-4xl text-white font-normal lg:text-6xl dark:text-black ">QUEM SOU</h3>

          {/* Grid de 2 colunas: texto | cards */}
          <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div className="text-justify text-white font-light text-lg flex flex-col gap-5 md:text-2xl lg:font-light dark:text-black">
              <p className='md:indent-8'>
                  Me chamo <span className="text-primary dark:text-sextenary">Luiz Henrique</span>, tenho 18 anos e curso o <span className="text-primary dark:text-sextenary">3º ano</span> de Desenvolvimento de Sistemas integrado ao ensino médio na <span className="text-primary dark:text-sextenary">Etec Basilides de Godoy</span>. Ao longo dessa trajetória venho desenvolvendo{' '}
                <span className="text-primary dark:text-sextenary">competências</span> como organização, <span className="text-primary dark:text-sextenary">trabalho em equipe</span> e <span className="text-primary dark:text-sextenary">proatividade</span>.
              </p>

              <p className='md:indent-8'>
                  Atualmente atuo como desenvolvedor <span className="text-primary dark:text-sextenary">full-stack</span> construindo soluções inovadoras para sistemas Web ou Mobile utilizando principalmente <span className="text-primary dark:text-sextenary">JavaScript</span> e <span className="text-primary dark:text-sextenary">TypeScript</span>.
              </p>
            </div>

            {/* Cards de informações */}
            <div className="w-full grid grid-cols-2 gap-4 lg:gap-6">
              <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 gap-2 flex flex-col dark:border-sextenary/30 dark:bg-sextenary/5">
                <span className="block text-xs tracking-widest text-white/40 uppercase font-cinzel dark:text-black/40">Experiência</span>
                <span className="text-primary font-medium text-justify [word-spacing:3px]  text-lg dark:text-sextenary">Iniciação Científica - Lucy Montoro IMREA HCFMUSP</span>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 gap-2 flex flex-col dark:border-sextenary/30 dark:bg-sextenary/5">
                <span className="block text-xs tracking-widest text-white/40 uppercase font-cinzel dark:text-black/40">Formação</span>
                <span className="text-primary font-medium text-justify [word-spacing:3px]  text-lg dark:text-sextenary">Técnico em Desenvolvimento de Sistemas</span>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 gap-2 flex flex-col dark:border-sextenary/30 dark:bg-sextenary/5">
                <span className="block text-xs tracking-widest text-white/40 uppercase font-cinzel dark:text-black/40">Especialização</span>
                <span className="text-primary font-medium text-justify [word-spacing:3px]  text-lg dark:text-sextenary">Desenvolvimento Full-Stack</span>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 gap-2 flex flex-col dark:border-sextenary/30 dark:bg-sextenary/5">
                <span className="block text-xs tracking-widest text-white/40 uppercase font-cinzel dark:text-black/40">Status</span>
                <span className="text-primary font-medium text-justify [word-spacing:3px]  text-lg dark:text-sextenary">Aberto a novas oportunidades</span>
              </div>
            </div>
          </div>
        </article>
      </div>

        {/* <div className="w-full h-fit overflow-hidden hidden lg:flex items-end justify-center lg:col-start-2">
          <img src={images.IlustracaoPC} className="w-3/4 h-2/4 object-cover [animation:floating_2s_alternate_infinite] drop-shadow-secondary drop-shadow-sm" alt="Ilustração PC" loading="lazy" />
        </div>
      </div> */}

      <div className="w-full h-fit flex items-center justify-center flex-col gap-5 md:gap-8 lg:gap-5 lg:w-[90%] lg:h-72 ">
        <h4 className="text-white text-2xl font-light">HABILIDADES</h4>

        <div className="w-full h-36 relative flex items-center justify-around flex-col p-2 rounded-md bg-quaternary shadow-[0px_3px_10px] shadow-[#0f0f0f27] md:h-52 lg:justify-center lg:h-40 lg:p-0 dark:bg-quintenary">
          <hr className="w-24 h-0.5 bg-primary border-primary absolute top-0" />

          <div className="flex items-center justify-center flex-wrap gap-y-2 max-sm:gap-2 md:p-5 md:gap-7 dark:brightness-0">
            <img src={images.IconJS} className="size-11 p-1 animate-float [animation-delay:1.75s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-Javascript" loading="lazy" />
            <img src={images.IconTS} className="size-11 p-1 animate-float [animation-delay:1.5s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-Typescript" loading="lazy" />
            <img src={images.IconReact} className="size-11 p-1 animate-[spin_4s_linear_infinite] [animation-delay:1.25s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-React.js" loading="lazy" />
            <img src={images.IconTail} className="size-11 p-1 animate-float [animation-delay:1s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-TailwindCSS" loading="lazy" />
            <img src={images.IconVSCode} className="size-11 p-1 animate-float [animation-delay:1.25s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-HTML" loading="lazy" />
            <img src={images.IconGit} className="size-11 p-1 animate-float [animation-delay:1.15s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-Git" loading="lazy" />
            <img src={images.IconNode} className="size-11 p-1 animate-float [animation-delay:1.75s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-Node.js" loading="lazy" />
            <img src={images.IconNest} className="size-11 p-1 animate-float [animation-delay:1.5s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-13" alt="Icone-CSS" loading="lazy" />
            <img src={images.IconCsharp} className="size-11 p-1 animate-float [animation-delay:1.35s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-Csharp" loading="lazy" />
            <img src={images.IconCpp} className="size-11 p-1 animate-float [animation-delay:1.45s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-Linux" loading="lazy" />
            <img src={images.IconJava} className="size-11 p-1 animate-float [animation-delay:1.25s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-15" alt="Icone-HTML" loading="lazy" />
            <img src={images.IconMySql} className="size-11 p-1 animate-float [animation-delay:1.35s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-MySQL" loading="lazy" />
            <img src={images.IconDocker} className="size-11 p-1 animate-float [animation-delay:1.25s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-Docker" loading="lazy" />
            <img src={images.IconArduino} className="size-11 p-1 animate-float [animation-delay:1.45s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] active:drop-shadow-tertiary active:scale-[1.15] md:size-16 lg:size-14" alt="Icone-Arduino" loading="lazy" />
          </div>
        </div>

        <div className='w-full h-10 flex items-center justify-center gap-6'>

          <button className="w-full h-fit flex items-center justify-center md:w-3/6 lg:w-2/10">
            <a href='/CV-Luiz.pdf' download={CV} className='w-full h-10 rounded-xs text-primary border-primary border-1 flex items-center justify-center gap-5 relative z-2 before:content-[""] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] active:before:scale-x-[1] hover:text-black active:text-black md:h-14 lg:h-10 dark:text-black'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.35} stroke="currentColor" className="size-6  md:size-8 lg:size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>

              <h4 className="text-xl font-light md:text-3xl lg:text-2xl">Curriculo</h4>
            </a>
          </button>
          <button className="w-full h-fit flex items-center justify-center md:w-3/6 lg:w-2/10">
            <a href='/CV-Luiz.pdf' download={CV} className='w-full h-10 rounded-xs text-primary border-primary border-1 flex items-center justify-center gap-5 relative z-2 before:content-[""] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] active:before:scale-x-[1] hover:text-black active:text-black md:h-14 lg:h-10 dark:text-black'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>

              <h4 className="text-xl font-light md:text-3xl lg:text-2xl">Projetos</h4>
            </a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
