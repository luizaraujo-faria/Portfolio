const HomeSection = () => {

    return <section className="sections transition-all duration-300 bg-[url(../src/assets/img/Banner-LH.webp)] animate-background bg-center bg-cover bg-fixed bg-no-repeat before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-[#0000007a]">

        <article className="absolute bottom-1/4 z-10 flex items-center justify-center flex-col">

            <h2 className="text-white text-4xl font-light ml-10"><span className="text-secondary">Olá</span>, me chamo</h2>
            <h1 className="font-cinzel text-8xl text-primary">Luiz Henrique</h1>

            <div className="flex flex-col">
                <h2 className="text-white text-4xl font-light">E sou <span className="text-secondary">Desenvolvedor</span> de <span className="text-secondary">Software</span>.</h2>
                <hr className="w-1/4 ml-64 bg-white border-white"/>
            </div>
        </article>
    </section>
}

export default HomeSection;