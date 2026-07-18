interface OverlayProps {
  className: string;
}

const Overlay = ({ className }: OverlayProps) => {
  return <div className={`w-full h-screen transition-all duration-300 fixed top-0 right-0 backdrop-blur-xs bg-[#00000086] ${className}`}></div>;
};

export default Overlay;
