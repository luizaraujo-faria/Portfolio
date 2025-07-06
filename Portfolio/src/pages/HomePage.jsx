import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';

const HomePage = () => {
    return <>
        <Header/>
        <main className='w-full flex items-center justify-start flex-col relative'>
        <HomeSection/>
        </main>
        <Footer/>
    </>
}

export default HomePage;