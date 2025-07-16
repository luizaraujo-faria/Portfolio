import { useState, _useEffect } from 'react';
import { projects } from '../../data/projects';
import { services } from '../../data/services';
import { certificates } from '../../data/certificates';

const PortfolioSection = () => {

    const [activeSection, setActiveSection] = useState('projects');
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const contents = { projects, certificates, services };
    const slides = contents[activeSection];
    const _currentSlide = slides[currentSlideIndex];

    const nextSlide = () => {
        setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prev) => (prev - 1 + slides.length ) % slides.length);
    };

    return <section className="w-full h-[125vh] relative flex items-center justify-start flex-col gap-8 p-5 bg-black border-t-quaternary border-t-5 xl:h-[135vh] dark:border-t-quintenary dark:bg-white">
        <h3 className="text-4xl text-primary font-extralight lg:text-6xl dark:text-black">Portfólio</h3>

        <div className="w-full h-fit flex items-center justify-center flex-col gap-5 lg:flex-row">
            
            <button onClick={() => {setActiveSection('projects'); setCurrentSlideIndex(0);} } className={`w-full h-18 overflow-hidden flex items-center justify-around bg-quaternary cursor-pointer hover:animate-hoverfloat active:animate-hoverfloat text-primary rounded-sm group relative z-[2] before:content-[''] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] active:before:scale-x-[1] ${activeSection === 'projects' ? 'animate-hoverfloat border-tertiary border-1' : 'animate-none'} hover:text-black active:text-black shadow-[0px_3px_10px_] shadow-[#0f0f0f27] md:h-20 lg:h-24 dark:bg-quintenary dark:text-black`}>
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
                <article className="flex items-center justify-center flex-col gap-1 relative z-30">

                    <h4 className="text-2xl font-light lg:text-3xl">Projetos</h4>
                    <p className="hidden text-white lg:block group-hover:text-black group-active:text-black dark:text-black">Meus <span className="text-primary group-hover:text-black group-active:text-black dark:text-black">projetos</span> desenvolvidos.</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </article>
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
            </button>

            <button onClick={() => {setActiveSection('certificates'); setCurrentSlideIndex(0);} } className={`w-full h-18 overflow-hidden flex items-center justify-around bg-quaternary cursor-pointer hover:animate-hoverfloat active:animate-hoverfloat text-primary rounded-sm group relative z-[2] before:content-[''] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] active:before:scale-x-[1] ${activeSection === 'certificates' ? 'animate-hoverfloat border-tertiary border-1' : 'animate-none'} hover:text-black active:text-black shadow-[0px_3px_10px_] shadow-[#0f0f0f27] md:h-20 lg:h-24 dark:bg-quintenary dark:text-black`}>
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
                <article className="flex items-center justify-center flex-col gap-1 relative z-30">

                    <h4 className="text-2xl font-light lg:text-3xl">Certificações</h4>
                    <p className="hidden text-white lg:block group-hover:text-black group-active:text-black dark:text-black">Certificados e <span className="text-primary group-hover:text-black group-active:text-black dark:text-black">cursos</span> realizados.</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </article>
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
            </button>

            <button onClick={() => {setActiveSection('services'); setCurrentSlideIndex(0);} } className={`w-full h-18 overflow-hidden flex items-center justify-around bg-quaternary cursor-pointer hover:animate-hoverfloat active:animate-hoverfloat text-primary rounded-sm group relative z-[2] before:content-[''] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-x-[1] active:before:scale-x-[1] ${activeSection === 'services' ? 'animate-hoverfloat border-tertiary border-1' : 'animate-none'} hover:text-black active:text-black shadow-[0px_3px_10px_] shadow-[#0f0f0f27] md:h-20 lg:h-24 dark:bg-quintenary dark:text-black`}>
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
                <article className="flex items-center justify-center flex-col gap-1 relative z-30">

                    <h4 className="text-2xl font-light lg:text-3xl">Serviços</h4>
                    <p className="hidden text-white lg:block group-hover:text-black group-active:text-black dark:text-black">Serviços <span className="text-primary group-hover:text-black group-active:text-black dark:text-black">prestados</span> e oferecidos.</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </article>
                <hr className="w-0.25 h-5 border-primary bg-primary group-hover:bg-black group-hover:border-black group-active:border-black group-active:bg-black dark:bg-black dark:border-black" />
            </button>

        </div>

        <section className="w-full h-3/4 flex items-end justify-center p-5 shadow-[0px_3px_10px_] shadow-[#0f0f0f27] bg-quaternary lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:place-content-center dark:bg-quintenary">
            
            <div id="slideshow" className={`w-5/6 h-full lg:h-full flex items-center justify-center flex-col lg:justify-center gap-10 transition-all duration-300 ${activeSection === 'services' ? 'col-start-1' : 'lg:col-end-1'} lg:gap-18  lg:w-full`}>
                {/* <h4 className='text-2xl text-white font-light md:text-3xl dark:text-black'>{activeSection === 'projects' ? 'Projetos' : activeSection === 'certificates' ? 'Certificados' : 'Serviços'}</h4> */}

                <div id="slider" className="max-w-full w-full lg:h-75 flex items-center justify-center gap-10 flex-nowrap transition-all duration-300">
                    <div id='card' className={`w-full cursor-pointer md:w-3/6 ${activeSection === 'services' ? 'lg:w-4/6' : activeSection === 'projects' ? 'lg:w-3/6' : 'lg:w-2/6'} h-fit flex flex-col items-center justify-center gap-5 transition-all duration-300`}>
                        <img src={_currentSlide.src} alt={_currentSlide.title} loading='lazy' className='w-full object-cover drop-shadow-[0px_0px_10px_] drop-shadow-[#0f0f0f27]' />
                        <h5 className='text-2xl text-primary text-center font-light dark:text-black'>{_currentSlide.title}</h5>
                    </div>
                    {/* {slides.map((slide) => (
                        <div key={slide.id} id='card' className='w-3/6 h-72 flex flex-col items-center justify-center gap-2 shrink-0 transition-all duration-300'>
                            <img src={slide.src} alt={slide.title} loading='lazy' className='w-full object-cover' />
                            <h5 className='text-2xl text-primary font-light'>{slide.title}</h5>
                        </div>
                    ))} */}
                </div>

                <div className="flex gap-15">
                    <button id="back" onClick={prevSlide} className="cursor-pointer text-white size-8 hover:border-1 hover:border-primary rounded-full flex items-center justify-center p-2 transition-all duration-300 hover:size-10 hover:p-3 dark:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button id="next" onClick={nextSlide} className="cursor-pointer text-white size-8 hover:border-1 hover:border-primary rounded-full flex items-center justify-center p-2 transition-all duration-300 hover:size-10 hover:p-3 dark:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <article id="content" className={`w-full h-full hidden lg:items-center lg:justify-around lg:flex-col ${activeSection === 'services' ? 'lg:flex lg:col-start-2' : 'lg:hidden'}`}>
                <h4 className='text-3xl text-white font-light dark:text-black'>Serviçõs Oferecidos.</h4>

                <ul className='flex flex-col items-center justify-center'>
                    <li className='text-2xl text-primary font-light dark:text-black'>Desenvolvimento de sites.</li>
                    <ul className='text-white p-3 dark:text-quaternary'>
                        <li className='text-xl font-light'>- Landing Pages.</li>
                        <li className='text-xl font-light'>- Portfólio Profissional.</li>
                        <li className='text-xl font-light'>- Aplicações maiores.</li>
                    </ul>
                    <li className='text-2xl text-primary font-light dark:text-black'>Desenvolvimento de Sistemas.</li>
                    <ul className='text-white p-3 dark:text-quaternary'>
                        <li className='text-xl font-light'>- Aplicações web.</li>
                        <li className='text-xl font-light'>- Banco de dados.</li>
                    </ul>
                    <li className='text-2xl text-primary font-light dark:text-black'>Design Digital (UI/UX).</li>
                    <ul className='text-white p-3 dark:text-quaternary'>
                        <li className='text-xl font-light'>- Identidade visual.</li>
                        <li className='text-xl font-light'>- Prototipação</li>
                    </ul>
                </ul>
            </article>
        </section>
    </section>
}

export default PortfolioSection;