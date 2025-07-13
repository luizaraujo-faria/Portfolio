import { Link } from 'react-router-dom';
import MyPhoto from '../components/ui/MyPhoyo';
import images from '../assets/images';

const ThanksPage = () => {

    return <>
        <header className='w-full h-14 fixed top-0 z-20 bg-primary flex items-center justify-between p-5 shadow-[0px_0px_10px_] shadow-[#0f0f0f75] dark:bg-quintenary'>

            <Link to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-black transition-all duration-300 hover:mb-3 active:mb-3">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
            </Link>

            <img src={images.Logo} className='size-20 brightness-0 md:size-24 md:ml-10' alt="Logotipo-Luiz" loading="lazy" />

            <div className='hidden gap-1 brightness-0 md:gap-0 md:flex'>
                <a href="https://github.com/luizaraujo-faria" target="blank">
                    <img src={images.Github} className="size-6 transition-all duration-300 [animation-delay:1s] animate-float hover:translate-y-[-4px]" alt="Icone GitHub" loading="lazy" />
                </a>
                <a href="https://www.linkedin.com/in/luiz-h-araujo-95050731b/" target="blank">
                    <img src={images.Linkedin} className="size-6 transition-all duration-300 [animation-delay:1.25s] animate-float hover:translate-y-[-4px]" alt="Icone LinkedIn" loading="lazy" />
                </a>
                <a href="https://www.instagram.com/araujol.web/" target="blank">
                    <img src={images.Instagram} className="size-6 transition-all duration-300 [animation-delay:1.5s] animate-float hover:translate-y-[-4px]" alt="Icone Instagram" loading="lazy" />
                </a>
            </div>
        </header>
        <main className="w-full h-screen bg-black flex items-center justify-center flex-col relative dark:bg-white">

            <MyPhoto className='[animation:floating_2s_alternate_infinite] top-1/4 size-52' />
            <article className='flex flex-col items-center justify-center gap-5 absolute bottom-1/4 lg:bottom-1/8'>
                <h3 className='text-white text-4xl font-light dark:text-black'><span className='text-primary dark:text-sextenary'>Obrigado</span> pelo <span className='text-primary dark:text-sextenary'>email</span></h3>
                <h4 className='text-white text-3xl font-light text-center dark:text-black'>Retornarei sua mensagem em <span className='text-primary dark:text-sextenary'>breve</span>!</h4>
            </article>
        </main>
    </>
}

export default ThanksPage;