import { useState, useEffect } from 'react';
import Github from '../../assets/icon/icon-git hub.png';
import Linkedin from '../../assets/icon/icon-linkedin.png';
import Instagram from '../../assets/icon/icon-instagram.png';

const MenuBar = ({ className }) => {
        
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    })
    
    useEffect(() => {
        const root = document.documentElement;
    
        if(theme === 'light'){
            root.classList.add('dark');
        }
        else{
            root.classList.remove('dark');
        }
    
        localStorage.setItem('theme', theme);
    }, [theme])

    return <aside className={`w-full h-screen transition-all duration-300 fixed z-40 left-0 top-0 bg-black flex items-center justify-start flex-col gap-16 p-7 md:w-2/4 lg:w-2/6 dark:bg-white ${className}`}>

        <header className="w-full h-14 flex items center justify-end p-5 bg-quaternary rounded-sm dark:bg-quintenary">
            
            <div className='flex items-center gap-2'>
                <h4 className='text-primary text-lg font-light dark:text-black'>Tema:</h4>

                <div id='theme-bar' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`size-7 flex items-center p-1 relative cursor-pointer bg-primary rounded-full overflow-hidden dark:bg-black`}>

                    <div id='theme-mode' className={`size-5 transform transition-all duration-300 ease-in-out flex items-center justify-center p-1 bg-black rounded-full dark:bg-white`}>

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

        <nav className='w-full h-3/4 flex items-center justify-start p-5 bg-quaternary rounded-sm dark:bg-quintenary'>
            <ul className='text-xl text-white font-light flex flex-col gap-5 dark:text-black'>
                <li><a href="">Início</a></li>
                <li><a href="">Sobre</a></li>
                <li><a href="">Portfólio</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>

        <div className="flex gap-1 md:gap-0 dark:brightness-0">
            <a href="https://github.com/luizaraujo-faria" target='blank'><img src={Github} className="size-7 transition-all duration-300 [animation-delay:1s] animate-float hover:translate-y-[-4px]" alt="Icone GitHub" /></a>
            <a href="https://www.linkedin.com/in/luiz-h-araujo-95050731b/" target='blank'><img src={Linkedin} className="size-7 transition-all duration-300 [animation-delay:1.25s] animate-float hover:translate-y-[-4px]" alt="Icone LinkedIn" /></a>
            <a href="https://www.instagram.com/araujol.web/" target='blank'><img src={Instagram} className="size-7 transition-all duration-300 [animation-delay:1.5s] animate-float hover:translate-y-[-4px]" alt="Icone Instagram" /></a>
        </div>

    </aside>
}

export default MenuBar;