import images from '../../assets/images';

const AboutSection = () => {

    return <section id='about' className="w-full h-[110vh] relative flex items-center justify-center flex-col gap-8 p-5 bg-black md:h-[120vh] lg:h-[165vh] lg:gap-20 lg:p-0 dark:bg-white">

        <div className='w-full h-fit grid grid-cols-1 gap-8 justify-items-start items-end lg:p-8 lg:mt-12'>
            <article className="w-full h-fit mt-18 col-start-1 flex items-center justify-center flex-col gap-5 md:mt-32 lg:w-[90%] lg:items-start">
                <h3 className="text-4xl text-primary font-extralight lg:text-6xl dark:text-sextenary">Quem sou</h3>

                <div className="text-justify text-white font-light text-lg flex items-center justify-center flex-col gap-5 md:text-2xl lg:font-light dark:text-black">
                    <p>
                        Me chamo <span className='text-primary dark:text-sextenary'>Luiz Henrique</span>, tenho 17 anos e <span className='text-primary dark:text-sextenary'>sou aluno</span> do segundo ano do curso de Desenvolvimento de Sistemas integrado ao ensino médio na <span className='text-primary dark:text-sextenary'>Etec Basilides de Godoy</span>, onde desenvolvo e aplico <span className='text-primary dark:text-sextenary'>competências</span> como organização, <span className='text-primary dark:text-sextenary'>trabalho em equipe</span> e <span className='text-primary dark:text-sextenary'>proatividade</span>.
                    </p>

                    <p>
                        Atualmente sou desenvolvedor de <span className='text-primary dark:text-sextenary'>software full-stack</span> iniciante, apesar de <span className='text-primary dark:text-sextenary'>não possuir</span> experiência profissional, <span className='text-primary dark:text-sextenary'>estudo</span> e <span className='text-primary dark:text-sextenary'>desenvolvo</span> projetos buscando me tornar um dev mais <span className='text-primary dark:text-sextenary'>completo</span>.
                    </p>
                </div>
            </article>

            <div className='w-full h-fit overflow-hidden hidden lg:flex items-end justify-center lg:col-start-2'>
                <img src={images.IlustracaoPC} className='w-3/4 h-2/4 object-cover [animation:floating_2s_alternate_infinite] drop-shadow-secondary drop-shadow-sm' alt="Ilustração PC" loading='lazy' />
            </div>
        </div>

        <div className="w-full h-fit flex items-center justify-center flex-col gap-5 md:gap-8 lg:gap-10 lg:w-[90%] lg:h-72 lg:border-t-[1px] lg:border-t-primary">
            <h4 className='text-white text-2xl font-light'>Habilidades</h4>

            <div className='w-full h-36 relative flex items-center justify-around flex-col p-2 rounded-md bg-quaternary md:h-52 lg:justify-center lg:h-32 lg:p-0 dark:bg-quintenary'>
                <hr className='w-24 h-0.5 bg-primary border-primary absolute top-0' />

                <div className='flex items-center justify-center flex-wrap gap-y-2 max-sm:gap-2 md:p-5 md:gap-7 dark:brightness-0'>
                    <img src={images.IconJS} className='size-11 p-1 animate-float [animation-delay:1.75s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-Javascript" loading='lazy' />
                    <img src={images.IconTS} className='size-11 p-1 animate-float [animation-delay:1.5s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-Typescript" loading='lazy' />
                    <img src={images.IconReact} className='size-11 p-1 [animation:spin_4s_linear_infinite] [animation-delay:1.25s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-React.js" loading='lazy' />
                    <img src={images.IconTail} className='size-11 p-1 animate-float [animation-delay:1s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-TailwindCSS" loading='lazy' />
                    <img src={images.IconHtml} className='size-11 p-1 animate-float [animation-delay:1.25s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-HTML" loading='lazy' />
                    <img src={images.IconCss} className='size-11 p-1 animate-float [animation-delay:1.5s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-CSS" loading='lazy' />
                    <img src={images.IconNode} className='size-11 p-1 animate-float [animation-delay:1.75s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-Node.js" loading='lazy' />
                    <img src={images.IconMySql} className='size-11 p-1 animate-float [animation-delay:1.35s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-MySQL" loading='lazy' />
                    <img src={images.IconGit} className='size-11 p-1 animate-float [animation-delay:1.15s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-Git" loading='lazy' />
                    <img src={images.IconCsharp} className='size-11 p-1 animate-float [animation-delay:1.35s] transition-all duration-300 cursor-pointer drop-shadow-sm hover:drop-shadow-tertiary hover:scale-[1.15] md:size-16 lg:size-14' alt="Icone-Csharp" loading='lazy' />
                </div>
            </div>

            <button className='w-full h-fit flex items-center justify-center md:w-3/6 lg:w-2/6'>
                <a href="" className='w-full h-12 rounded-xs text-primary border-primary border-2 flex items-center justify-center gap-5 relative z-[2] before:content-[""] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] hover:text-black md:h-14 lg:h-10 dark:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  md:size-8 lg:size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                    <h4 className='text-xl md:text-3xl lg:text-2xl'>Meu Curriculo</h4>
                </a>
            </button>
        </div>
    </section>
}

export default AboutSection;