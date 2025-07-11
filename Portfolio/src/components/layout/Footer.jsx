import images from "../../assets/images";


const Footer = ({ className }) => {

    return <footer className={`w-full h-18 fixed bottom-0 z-30 bg-linear-to-b from-t to-95% to-[#000000] from-transparent flex items-center justify-center md:h-10 md:justify-center ${className}`}>

        <div className="flex items-center">
            <img src={images.Logo} className="size-12 dark:brightness-0" alt="Logotipo-Luiz" loading='lazy' />
            <h3 className="text-base font-extralight text-white dark:text-black">©<span className="text-primary dark:text-sextenary">2025</span> - Todos Os <span className="text-primary dark:text-sextenary">Direitos</span> Reservados.</h3>
        </div>
    </footer>
}

export default Footer;