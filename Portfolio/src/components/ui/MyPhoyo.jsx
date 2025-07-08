import Foto from '../../assets/img/Foto-Perfil.webp';

const MyPhoto = () => {

    return <div className='size-36 rounded-full bg-quaternary absolute  flex items-center justify-center bottom-[-35%] md:bottom-[-45%] md:size-52 lg:bottom-[-50%] lg:size-64 dark:bg-quintenary'>
        <img src={Foto} className='size-[90%] rounded-full object-cover' alt="Foto de Perfil" />
    </div>
}

export default MyPhoto;