import Logo from '../../../public/Logo.png';

const Footer = () => {

    return <footer className="w-full h-18 fixed bottom-0 z-30 bg-linear-to-b from-t to-95% to-[#000000] from-transparent flex items-center justify-center p-3 md:h-10 md:justify-center">

        <div className="flex items-center">
            <img src={Logo} className="size-12" alt="Logotipo-Luiz" />
            <h3 className="text-base font-extralight text-white">©<span className="text-primary">2025</span> - Todos Os <span className="text-primary">Direitos</span> Reservados.</h3>
        </div>
    </footer>
}

export default Footer;