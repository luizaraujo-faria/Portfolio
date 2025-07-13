import images from '../../assets/images';

const MyPhoto = ({ className }) => {
  return (
    <div className={`rounded-full bg-quaternary absolute flex items-center justify-center md:size-52 lg:size-64 dark:bg-quintenary ${className}`}>
      <img src={images.Foto} className="size-[90%] rounded-full object-cover" alt="Foto de Perfil" loading="lazy" />
    </div>
  );
};

export default MyPhoto;
