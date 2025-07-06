const Footer = () => {

    return <footer className="w-full h-18 fixed bottom-0 z-40 bg-linear-to-b from-t to-95% to-[#000000] from-transparent flex items-center justify-center flex-col-reverse p-3 md:h-10 md:justify-between md:flex-row">

        <div className="flex items-center">
            <img src="../public/Logo.png" className="size-12" alt="Logotipo-Luiz" />
            <h3 className="text-base font-extralight text-white">©<span className="text-primary">2025</span> - Todos Os <span className="text-primary">Direitos</span> Reservados.</h3>
        </div>

        <div className="flex gap-2 md:gap-0">
            <a href=""><img src="../src/assets/icon/icon-git hub.png" className="size-6 transition-all duration-300 [animation-delay:1s] animate-float hover:translate-y-[-4px]" alt="Icone GitHub" /></a>
            <a href=""><img src="../src/assets/icon/icon-linkedin.png" className="size-6 transition-all duration-300 [animation-delay:1.25s] animate-float hover:translate-y-[-4px]" alt="Icone LinkedIn" /></a>
            <a href=""><img src="../src/assets/icon/icon-instagram.png" className="size-6 transition-all duration-300 [animation-delay:1.5s] animate-float hover:translate-y-[-4px]" alt="Icone Instagram" /></a>
        </div>
    </footer>
}

export default Footer;