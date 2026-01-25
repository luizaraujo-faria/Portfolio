import images from '../../assets/images';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`w-full h-18 fixed bottom-0 z-30 bg-linear-to-b from-t to-95% to-[#000000] from-transparent flex items-center justify-center md:h-10 md:justify-center ${className}`}>
      <div className="flex items-center">
        <img src={images.Logo} className={`size-14 bg-transparent shadow-none dark:brightness-0 ${className}`} alt="Logotipo-Luiz" loading="lazy" />
        <h3 className={`text-base font-extralight text-white bg-transparent h-fit lg:h-fit md:h-fit ${className}`}>
          ©<span className={`text-primary bg-transparent h-fit lg:h-fit md:h-fit ${className}`}>2025</span> - Todos Os <span className={`text-primary bg-transparent h-fit lg:h-fit md:h-fit ${className}`}>Direitos</span> Reservados.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
