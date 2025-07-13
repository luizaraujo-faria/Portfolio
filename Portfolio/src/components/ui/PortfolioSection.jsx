const PortfolioSection = () => {

    return <section className="w-full h-[125vh] relative flex items-center justify-start flex-col gap-8 p-5 bg-black border-t-quaternary border-t-5 dark:border-t-quintenary dark:bg-white">
        <h3 className="text-4xl text-primary font-extralight lg:text-6xl dark:text-black">Portfólio</h3>

        <div className="w-full h-fit flex items-center justify-center flex-col gap-5 lg:flex-row">
            
            <div className="w-full h-18 overflow-hidden flex items-center justify-around bg-quaternary cursor-pointer hover:animate-hoverfloat active:animate-hoverfloat text-primary rounded-sm group relative z-[2] before:content-[''] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] active:before:scale-x-[1] hover:text-black active:text-black shadow-[0px_3px_10px_] shadow-[#0f0f0f27] md:h-20 lg:h-24 dark:bg-quintenary dark:text-black">
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
                <article className="flex items-center justify-center flex-col gap-1 relative z-30">

                    <h4 className="text-2xl font-light lg:text-3xl">Projetos</h4>
                    <p className="hidden text-white lg:block group-hover:text-black group-active:text-black dark:text-black">Meus <span className="text-primary group-hover:text-black group-active:text-black dark:text-black">projetos</span> desenvolvidos.</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </article>
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
            </div>

            <div className="w-full h-18 overflow-hidden flex items-center justify-around bg-quaternary cursor-pointer hover:animate-hoverfloat active:animate-hoverfloat text-primary rounded-sm group relative z-[2] before:content-[''] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] active:before:scale-x-[1] hover:text-black active:text-black shadow-[0px_3px_10px_] shadow-[#0f0f0f27] md:h-20 lg:h-24 dark:bg-quintenary dark:text-black">
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
                <article className="flex items-center justify-center flex-col gap-1 relative z-30">

                    <h4 className="text-2xl font-light lg:text-3xl">Certificações</h4>
                    <p className="hidden text-white lg:block group-hover:text-black group-active:text-black dark:text-black">Certificados e <span className="text-primary group-hover:text-black group-active:text-black dark:text-black">cursos</span> realizados.</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </article>
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
            </div>

            <div className="w-full h-18 overflow-hidden flex items-center justify-around bg-quaternary cursor-pointer hover:animate-hoverfloat active:animate-hoverfloat text-primary rounded-sm group relative z-[2] before:content-[''] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] active:before:scale-x-[1] hover:text-black active:text-black shadow-[0px_3px_10px_] shadow-[#0f0f0f27] md:h-20 lg:h-24 dark:bg-quintenary dark:text-black">
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
                <article className="flex items-center justify-center flex-col gap-1 relative z-30">

                    <h4 className="text-2xl font-light lg:text-3xl">Serviços</h4>
                    <p className="hidden text-white lg:block group-hover:text-black group-active:text-black dark:text-black">Serviços <span className="text-primary group-hover:text-black group-active:text-black dark:text-black">prestados</span> e oferecidos.</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </article>
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
            </div>

        </div>

        <section className="w-full h-3/4 bg-quaternary dark:bg-quintenary">
            
            <div id="slideshow">

            </div>
        </section>
    </section>
}

export default PortfolioSection;