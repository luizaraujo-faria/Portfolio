import images from '../../assets/images';

const ContactSection = () => {
  return (
    <section id="contact" className="w-full h-screen bg-black relative z-20 flex items-center justify-start flex-col gap-16 lg:h-[115vh] dark:bg-white">
      <form action="" className="w-[90%] h-5/6 bg-quaternary rounded-lg mt-[-15%] flex items-center justify-center flex-col p-2 gap-5 md:w-3/4 md:mt-[-10%] lg:w-2/4 lg:h-[90%] lg:gap-8 xl:h-[95%] xl:mt-[-8%] dark:bg-quintenary">
        <h3 className="text-4xl text-primary font-extralight lg:text-6xl dark:text-sextenary">Contate-me</h3>

        <div className="w-full flex items-center justify-center flex-col gap-5">
          <input type="text" className="w-[90%] h-10 border-[1px] border-[#9b8649] bg-black rounded-xs p-5 text-base text-primary placeholder:text-primary placeholder:text-base outline-none dark:border-black dark:text-black dark:placeholder:text-black dark:bg-white" placeholder="Nome" />
          <input type="text" className="w-[90%] h-10 border-[1px] border-[#9b8649] bg-black rounded-xs p-5 text-base text-primary placeholder:text-primary placeholder:text-base outline-none dark:border-black dark:text-black dark:placeholder:text-black dark:bg-white" placeholder="Email" />
          <input type="text" className="w-[90%] h-10 border-[1px] border-[#9b8649] bg-black rounded-xs p-5 text-base text-primary placeholder:text-primary placeholder:text-base outline-none dark:border-black dark:text-black dark:placeholder:text-black dark:bg-white" placeholder="Senha" />
          <textarea className="w-[90%] h-72 border-[1px] border-[#9b8649] bg-black rounded-xs resize-none p-5 text-base text-primary placeholder:text-primary placeholder:text-base outline-none dark:border-black dark:text-black dark:placeholder:text-black dark:bg-white" placeholder="Mensagem"></textarea>
        </div>

        <button
          type="submit"
          className="w-[90%] h-10 border-[1px] border-primary bg-black text-primary text-xl cursor-pointer relative z-[2] before:content-[''] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] hover:text-black md:h-14 lg:h-10 lg:w-3/5 dark:text-black dark:bg-white"
        >
          Enviar
        </button>
      </form>

      <div className="flex gap-1 p-5 md:gap-0 dark:brightness-0">
        <a href="https://github.com/luizaraujo-faria" target="blank">
          <img src={images.Github} className="size-7 transition-all duration-300 [animation-delay:1s] animate-float hover:translate-y-[-4px]" alt="Icone GitHub" loading="lazy" />
        </a>
        <a href="https://www.linkedin.com/in/luiz-h-araujo-95050731b/" target="blank">
          <img src={images.Linkedin} className="size-7 transition-all duration-300 [animation-delay:1.25s] animate-float hover:translate-y-[-4px]" alt="Icone LinkedIn" loading="lazy" />
        </a>
        <a href="https://www.instagram.com/araujol.web/" target="blank">
          <img src={images.Instagram} className="size-7 transition-all duration-300 [animation-delay:1.5s] animate-float hover:translate-y-[-4px]" alt="Icone Instagram" loading="lazy" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
