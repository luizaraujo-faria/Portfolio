import { useEffect, useState } from 'react';
import MenuBar from './MenuBar';
import Overlay from './Overlay';
import images from '../../assets/images';

const Header = ({ className }) => {
  const [menuStatus, setMenuStatus] = useState('inactive');
  const [scrolled, setScrolled] = useState(false);

  const html = document.documentElement;
  menuStatus === 'active' ? html.classList.add('overflow-hidden') : html.classList.remove('overflow-hidden');

  const _headerScroll = useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 215);
    };

    window.addEventListener('scroll', handleScroll);

    return () => removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full transition-all duration-300 ${scrolled ? 'h-12 bg-black shadow-[0px_0px_10px_] shadow-[#0f0f0f27] dark:bg-white' : 'h-28 bg-linear-to-t from-b to-95% to-black from-5% from-transparent '} fixed z-40 flex items-center justify-between p-10 lg:p-8 ${className}`}>
      <MenuBar scrolled={scrolled} className={`${menuStatus === 'active' ? 'translate-x-[0%]' : 'translate-x-[-125%]'}`} />
      <Overlay className={`${menuStatus === 'active' ? 'block z-30' : 'hidden -z-50'}`} />

      <menu id="menu" onClick={() => setMenuStatus(menuStatus === 'inactive' ? 'active' : 'inactive')} className={`w-7 h-4 relative z-50 flex items-center justify-center cursor-pointer ${scrolled ? 'dark:brightness-0' : ''}`}>
        <div
          id="menu-line"
          className={`w-full h-0.5 transition-all duration-75 bg-primary ${menuStatus === 'active' ? 'invisible dark:bg-black before:visible before:rotate-[43deg] before:top-2/4 dark:before:bg-black after:visible after:bottom-2/5 after:rotate-[-43deg] dark:after:bg-black' : 'visible'} before:transition-all before:duration-300 before:content-[""] before:absolute before:w-full before:h-0.5 before:bg-primary before:top-0 after:transition-all after:duration-300 after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0`}
        ></div>
      </menu>

      <img src={images.Logo} className={`size-20 md:size-24 md:ml-10 ${scrolled ? 'dark:brightness-0' : ''}`} alt="Logotipo-Luiz" loading="lazy" />

      <div className={`hidden ${scrolled ? 'dark:brightness-0' : 'dark:brightness-110'} gap-1 md:gap-0 md:flex`}>
        <a href="https://github.com/luizaraujo-faria" target="blank">
          <img src={images.Github} className="size-6 transition-all duration-300 [animation-delay:1s] animate-float hover:translate-y-[-4px]" alt="Icone GitHub" loading="lazy" />
        </a>
        <a href="https://www.linkedin.com/in/luizaraujo-tech/" target="blank">
          <img src={images.Linkedin} className="size-6 transition-all duration-300 [animation-delay:1.25s] animate-float hover:translate-y-[-4px]" alt="Icone LinkedIn" loading="lazy" />
        </a>
        <a href="https://www.instagram.com/araujol.web/" target="blank">
          <img src={images.Instagram} className="size-6 transition-all duration-300 [animation-delay:1.5s] animate-float hover:translate-y-[-4px]" alt="Icone Instagram" loading="lazy" />
        </a>
      </div>
    </header>
  );
};

export default Header;
