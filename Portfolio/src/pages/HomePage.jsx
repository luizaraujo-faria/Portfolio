import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HomeSection from '../components/ui/HomeSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="w-full flex items-center justify-start flex-col relative overflow-hidden">
        <HomeSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
