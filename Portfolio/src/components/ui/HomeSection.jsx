import { Link } from 'react-router-dom';

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

      <Link to="/main" className="size-10 flex items-center absolute bottom-1/4 cursor-pointer transition-all duration-500 rounded-full overflow-hidden group hover:w-36 active:w-36 md:bottom-1/5">
        <h3 className="text-white text-xl font-light transition-all duration-200 whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100">Conheça-me</h3>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white transition-all duration-500 border-[1px] border-white rounded-full p-1 absolute right-0 group-hover:size-9 group-hover:border-primary group-active:size-9 group-active:border-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
    </section>
  );
};

export default HomeSection;
