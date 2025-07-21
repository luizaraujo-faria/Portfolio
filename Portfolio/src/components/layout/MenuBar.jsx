import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

const MenuBar = ({ scrolled, className }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'light') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <aside className={`w-full h-screen transition-all duration-300 fixed z-40 left-0 top-0 bg-black flex items-center justify-start flex-col gap-8 p-2 shadow-[1px_1px_10px_] shadow-[#0f0f0f75] md:w-2/4 lg:w-2/6 dark:bg-white ${className}`}>
      <header className={`w-[95%] h-14 flex items center justify-end p-5 bg-quaternary shadow-[0px_2px_5px_] shadow-[#0f0f0f27] rounded-sm transition-all duration-300 ${scrolled ? 'mt-[4.5px] md:mt-0' : 'mt-5'} dark:bg-quintenary`}>
        <div className="flex items-center gap-2">
          <h4 className="text-primary text-lg font-light dark:text-black">Tema:</h4>

          <div id="theme-bar" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={'size-7 flex items-center p-1 relative cursor-pointer bg-primary rounded-full overflow-hidden dark:bg-black'}>
            <div id="theme-mode" className={'size-5 transform transition-all duration-300 ease-in-out flex items-center justify-center p-1 bg-black rounded-full dark:bg-white'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-4 absolute transition-all duration-300 text-primary ${theme === 'light' ? 'opacity-100' : 'opacity-0'} dark:text-black`}>
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-4 absolute transition-all duration-300 text-primary ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <nav className="w-[95%] h-3/5 flex items-center justify-start p-5 bg-quaternary shadow-[0px_3px_5px_] shadow-[#0f0f0f27] rounded-sm dark:bg-quintenary">
        <ul className="w-full text-xl text-white font-light flex flex-col gap-5 dark:text-black">
          <li>
            <Link to="/" className="flex items-center justify-start gap-5 group w-full h-8 hover:bg-black active:bg-black dark:hover:bg-white dark:active:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-primary transition-all duration-300 dark:text-black group-hover:mb-5 group-active:mb-5">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              Início
            </Link>
          </li>
          <li>
            <Link to="/main#about" className="flex items-center justify-start gap-5 group w-full h-8 hover:bg-black active:bg-black dark:hover:bg-white dark:active:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-primary transition-all duration-300 dark:text-black group-hover:mb-5 group-active:mb-5">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/main#portfolio" className="flex items-center justify-start gap-5 group w-full h-8 hover:bg-black active:bg-black dark:hover:bg-white dark:active:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-primary transition-all duration-300 dark:text-black group-hover:mb-5 group-active:mb-5">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
              Portfólio
            </Link>
          </li>
          <li>
            <Link to="/main#contact" className="flex items-center justify-start gap-5 group w-full h-8 hover:bg-black active:bg-black dark:hover:bg-white dark:active:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-primary transition-all duration-300 dark:text-black group-hover:mb-5 group-active:mb-5">
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-1 p-5 md:gap-0 dark:brightness-0">
        <a href="https://github.com/luizaraujo-faria" target="blank">
          <img src={images.Github} className="size-7 transition-all duration-300 [animation-delay:1s] animate-float hover:translate-y-[-4px]" alt="Icone GitHub" loading="lazy" />
        </a>
        <a href="https://www.linkedin.com/in/luizaraujo-tech/" target="blank">
          <img src={images.Linkedin} className="size-7 transition-all duration-300 [animation-delay:1.25s] animate-float hover:translate-y-[-4px]" alt="Icone LinkedIn" loading="lazy" />
        </a>
        <a href="https://www.instagram.com/araujol.web/" target="blank">
          <img src={images.Instagram} className="size-7 transition-all duration-300 [animation-delay:1.5s] animate-float hover:translate-y-[-4px]" alt="Icone Instagram" loading="lazy" />
        </a>
      </div>
    </aside>
  );
};

export default MenuBar;
