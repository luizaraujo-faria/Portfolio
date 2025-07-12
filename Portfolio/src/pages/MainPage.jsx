import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/layout/Header';
import AboutSection from '../components/ui/AboutSection';
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
        <MainBanner />
        <AboutSection />
        <MainBanner className="hidden h-[60vh]" />
        <ContactSection />
      </main>
      <Footer className="relative bg-quaternary md:h-16 lg:h-20 dark:to-quintenary dark:from-quintenary" />
    </>
  );
};

export default MainPage;
