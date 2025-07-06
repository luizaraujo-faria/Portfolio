import Footer from './components/Footer';
import Header from './components/Header';
import HomeSection from './components/HomeSection';

function App() {

  return (
    <>
      <Header/>
      <main className='w-full flex items-center justify-start flex-col relative'>
        <HomeSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App;