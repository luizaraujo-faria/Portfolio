import images from '../../assets/images';

const MyPhoto = ({ className }) => {

    return <div className={`size-36 rounded-full bg-quaternary absolute  flex items-center justify-center bottom-[-35%] md:bottom-[-45%] md:size-52 lg:bottom-[-50%] lg:size-64 dark:bg-quintenary ${className}`}>
        <img src={images.Foto} className='size-[90%] rounded-full object-cover' alt="Foto de Perfil" loading='lazy' />
    </div>
}

export default MyPhoto;