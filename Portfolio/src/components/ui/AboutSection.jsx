import IconJS from '../../assets/icon/icon-js-cor.png';
import IconTS from '../../assets/icon/icon-ts-cor.png';
import IconReact from '../../assets/icon/icon-react-cor.png';
import IconTail from '../../assets/icon/icon-tailwind-cor.png';
import IconHtml from '../../assets/icon/icon-html-cor.png';
import IconCss from '../../assets/icon/icon-css-cor.png';
import IconNode from '../../assets/icon/icon-node-cor.png';
import IconMySql from '../../assets/icon/icon-mysql-cor.png';
import IconGit from '../../assets/icon/icon-git-cor.png';
import IconCsharp from '../../assets/icon/icon-csharp-cor.png';

const AboutSection = () => {

    return <section id='about' className="w-full h-screen relative grid grid-cols-1 gap-8 p-5 place-content-start bg-black md:h-[110vh] lg:grid-cols-2 lg:place-content-center lg:p-0 dark:bg-white">

        <article className="w-full h-fit mt-18 col-start-1 flex items-center justify-center flex-col gap-5 md:mt-32 lg:mt-38 lg:items-start lg:p-6">
            <h3 className="text-4xl text-primary font-light lg:text-5xl dark:text-sextenary">Quem sou</h3>

            <div className="text-justify text-white text-lg flex items-center justify-center flex-col gap-5 md:text-2xl lg:font-light dark:text-black">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequatur culpa, impedit delectus sequi veritatis aut iste deserunt quidem dolor blanditiis, tempore voluptates repudiandae animi rem accusamus numquam odio nemo!</p>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat aspernatur debitis atque voluptate? Necessitatibus repellat quo, distinctio facere reiciendis accusantium mollitia illo dolore libero aspernatur maxime maiores autem aliquid fugiat?</p>
            </div>
        </article>

        <div className="w-full h-fit flex items-center justify-center flex-col gap-5 col-start-1 lg:col-start-2 lg:mt-60 lg:w-[95%] lg:items-end lg:gap-10">
            <div className='w-full h-36 relative flex items-center justify-around flex-col p-2 rounded-md bg-quaternary md:h-52 lg:justify-center lg:w-[90%] lg:p-0 dark:bg-quintenary'>
                <hr className='w-24 h-0.5 bg-primary border-primary' />

                <div className='flex items-center justify-center flex-wrap gap-y-2 md:p-5 md:gap-5 dark:brightness-0'>
                    <img src={IconJS} className='size-11 p-1 animate-float [animation-delay:1.75s] md:size-18 lg:size-14' alt="Icone-Javascript" />
                    <img src={IconTS} className='size-11 p-1 animate-float [animation-delay:1.5s] md:size-18 lg:size-14' alt="Icone-Typescript" />
                    <img src={IconReact} className='size-11 p-1 animate-float [animation-delay:1.25s] md:size-18 lg:size-14' alt="Icone-React.js" />
                    <img src={IconTail} className='size-11 p-1 animate-float [animation-delay:1s] md:size-18 lg:size-14' alt="Icone-TailwindCSS" />
                    <img src={IconHtml} className='size-11 p-1 animate-float [animation-delay:1.25s] md:size-18 lg:size-14' alt="Icone-HTML" />
                    <img src={IconCss} className='size-11 p-1 animate-float [animation-delay:1.5s] md:size-18 lg:size-14' alt="Icone-CSS" />
                    <img src={IconNode} className='size-11 p-1 animate-float [animation-delay:1.75s] md:size-18 lg:size-14' alt="Icone-Node.js" />
                    <img src={IconMySql} className='size-11 p-1 animate-float [animation-delay:1.35s] md:size-18 lg:size-14' alt="Icone-MySQL" />
                    <img src={IconGit} className='size-11 p-1 animate-float [animation-delay:1.15s] md:size-18 lg:size-14' alt="Icone-Git" />
                    <img src={IconCsharp} className='size-11 p-1 animate-float [animation-delay:1.35s] md:size-18 lg:size-14' alt="Icone-Csharp" />
                </div>
            </div>

            <button className='w-full h-fit flex items-center justify-center lg:w-[90%]'>
                <a href="" className='w-full h-12 rounded-sm text-primary border-primary border-2 flex items-center justify-center gap-5 relative z-[2] before:content-[""] before:absolute before:z-[-1] before:bg-primary before:left-0 before:top-0 before:w-full before:h-full before:scale-y-0 before:transition-all before:duration-300 before:ease-custom-ease hover:before:scale-y-[1] hover:text-black md:h-16 lg:w-[70%] lg:h-10 dark:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  md:size-8 lg:size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                    <h4 className='text-xl md:text-3xl lg:text-2xl'>Meu Curriculo</h4>
                </a>
            </button>
        </div>
    </section>
}

export default AboutSection;