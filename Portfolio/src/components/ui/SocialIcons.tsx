import images from "../../assets/images";

interface SocialIconsProps {
    scrolled?: boolean;
    className?: string;
}

const SocialIcons = ({ scrolled, className }: SocialIconsProps) => {
    return(
        <div className={`hidden ${className} ${scrolled ? 'dark:brightness-0' : 'dark:brightness-110'} gap-1 md:gap-0 md:flex`}>
            <a href="https://github.com/luizaraujo-faria" target="blank">
            <img src={images.Github} className="size-6 transition-all duration-300 [animation-delay:1s] animate-float hover:translate-y-[-4px]" alt="Icone GitHub" loading="lazy" />
            </a>
            <a href="https://www.linkedin.com/in/luizaraujo-tech/" target="blank">
            <img src={images.Linkedin} className="size-6 transition-all duration-300 [animation-delay:1.25s] animate-float hover:translate-y-[-4px]" alt="Icone LinkedIn" loading="lazy" />
            </a>
            <a href="https://www.instagram.com/luiz.araujoweb/" target="blank">
            <img src={images.Instagram} className="size-6 transition-all duration-300 [animation-delay:1.5s] animate-float hover:translate-y-[-4px]" alt="Icone Instagram" loading="lazy" />
            </a>
        </div>
    )
}

export default SocialIcons;