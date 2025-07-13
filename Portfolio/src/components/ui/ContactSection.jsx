import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import images from '../../assets/images';

const ContactSection = () => {

  const navigate = useNavigate();
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus('success');
        form.current.reset();

        setTimeout(() => {
          navigate('/thanks');
        }, 500);
      })
      .catch((err) => {
        console.error('Erro ao enviar:', err);
        setStatus('error');
      })
      .finally(() => {
        setTimeout(() => {
          setStatus('idle');
        }, 1000);
      });
  }

  const renderButtonContent = () => {
    switch (status) {
      case 'loading':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-7 absolute animate-spin">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg> 
          </>
        );
      case 'success':
        return 'Enviado com sucesso!';
      case 'error':
        return 'Erro ao enviar!';
      default:
        return 'Enviar';
    }
  };

  return (
    <section id="contact" className="w-full h-screen bg-black relative z-20 flex items-center justify-start flex-col gap-16 lg:h-[115vh] dark:bg-white">
      <form ref={form} onSubmit={sendEmail} className="w-[90%] h-5/6 bg-quaternary rounded-lg mt-[-15%] flex items-center justify-center flex-col p-2 gap-5 shadow-[1px_1px_10px_] shadow-[#0f0f0f27] md:w-3/4 md:mt-[-10%] lg:w-2/4 lg:h-[90%] lg:gap-8 xl:h-[95%] xl:mt-[-8%] dark:bg-quintenary">
        <h3 className="text-4xl text-primary font-extralight lg:text-6xl dark:text-black">Contate-me</h3>

        <div className="w-full flex items-center justify-center flex-col gap-5">
          <input name='name' type="text" className="w-[90%] h-10 shadow-[0px_0px_5px_] shadow-[#0f0f0f27] bg-black rounded-sm p-5 text-base text-primary placeholder:text-primary placeholder:text-base -outline-offset-1 dark:border-black dark:text-black dark:placeholder:text-black dark:bg-white" placeholder="Nome" required />
          <input name='email' type="email" className="w-[90%] h-10 shadow-[0px_0px_5px_] shadow-[#0f0f0f27] bg-black rounded-sm p-5 text-base text-primary placeholder:text-primary placeholder:text-base -outline-offset-1 dark:border-black dark:text-black dark:placeholder:text-black dark:bg-white" placeholder="Email" required />
          <input name='number' type="tel" className="w-[90%] h-10 shadow-[0px_0px_5px_] shadow-[#0f0f0f27] bg-black rounded-sm p-5 text-base text-primary placeholder:text-primary placeholder:text-base -outline-offset-1 dark:border-black dark:text-black dark:placeholder:text-black dark:bg-white" placeholder="Telefone" required />
          <textarea name='message' className="w-[90%] h-72 shadow-[0px_0px_5px_] shadow-[#0f0f0f27] bg-black rounded-sm resize-none p-5 text-base text-primary placeholder:text-primary placeholder:text-base -outline-offset-1 dark:border-black dark:text-black dark:placeholder:text-black dark:bg-white" placeholder="Mensagem" required></textarea>
        </div>

        <button type="submit" className="w-[90%] h-10 flex items-center justify-center border-2 rounded-xs border-primary bg-black text-primary font-light text-xl cursor-pointer relative z-[2] before:content-[''] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] active:before:scale-x-[1] hover:text-black active:text-black md:h-14 lg:h-10 lg:w-3/5 dark:text-black dark:bg-transparent">
        {renderButtonContent()}
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
