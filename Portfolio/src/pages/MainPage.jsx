import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from "../components/layout/Header";
import AboutSection from "../components/ui/AboutSection";
import MainBanner from "../components/ui/MainBanner";

const MainPage = () => {

    const location = useLocation();

    useEffect(() => {
        if(location.hash) {
            const section = document.querySelector(location.hash);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    }, [location]);

    return <>
        <Header />
        <main className='w-full flex items-center justify-start flex-col relative'>
            <MainBanner />
            <AboutSection />
        </main>
    </>
}

export default MainPage;