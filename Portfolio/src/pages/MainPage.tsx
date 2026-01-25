import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/layout/Header';
import AboutSection from '../components/ui/AboutSection';
import PortfolioSection from '../components/ui/PortfolioSection';
import MainBanner from '../components/ui/MainBanner';
import ContactSection from '../components/ui/ContactSection';
import Footer from '../components/layout/Footer';

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <main className="w-full flex items-center justify-start flex-col relative z-20">
        <MainBanner className='size-36 bottom-[-35%] md:bottom-[-45%] lg:bottom-[-50%]' />
        <AboutSection />
        <PortfolioSection />
        <MainBanner className="hidden h-[60vh]" />
        <ContactSection />
      </main>
      <Footer className="static bg-quaternary md:h-16 lg:h-20 dark:text-black dark:to-quintenary dark:from-quintenary dark:drop-shadow-[0px_-3px_10px_] dark:drop-shadow-[#0f0f0f75]" />
    </>
  );
};

export default MainPage;
