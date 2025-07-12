import MyPhoto from './MyPhoyo';

const MainBanner = ({ className }) => {
  return (
    <section className={'w-full h-[25vh] relative z-20 flex items-center justify-center bg-[url(../src/assets/img/Banner-LH.webp)] bg-center bg-fixed bg-no-repeat bg-cover scale-[1] md:h-[30vh] lg:scale-none lg:h-[45vh] lg:bg-top'}>
      <MyPhoto className={`${className}`} />
    </section>
  );
};

export default MainBanner;
