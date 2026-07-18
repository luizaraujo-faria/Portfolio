import { Link } from 'react-router-dom';
import StatsSection from './StatsSection';

const HomeSection = () => {
  return (
    <section className="sections transition-all duration-300 bg-[url(../src/assets/img/Banner-LH.webp)] lg:animate-background bg-center bg-cover bg-no-repeat before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-[#0000008c] before:backdrop-blur-[3px]">
      <article className="absolute bottom-2/5 z-10 flex items-center justify-center flex-col md:bottom-1/3">
        <h2 className="text-white text-2xl font-light md:text-3xl">
          <span className="text-secondary">Olá</span>, me chamo
        </h2>
        <h1 className="font-cinzel text-5xl text-primary  md:text-8xl">Luiz Henrique</h1>

        <div className="flex flex-col">
          <h2 className="text-white text-xl font-light md:text-3xl">
            E sou <span className="text-secondary">Desenvolvedor</span> de <span className="text-secondary">Software</span>.
          </h2>
          <hr className="w-1/4 ml-36 bg-white border-white md:ml-60" />
        </div>
      </article>

      <StatsSection/>
    </section>
  );
};

export default HomeSection;
