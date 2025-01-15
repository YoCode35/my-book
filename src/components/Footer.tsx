export default function Footer() {
  return (
    <footer className=" bg-black
                        text-white 
                        text-center 
                        p-4 
                        fixed 
                        bottom-0 
                        left-0 
                        w-full 
                        z-10 
                        shadow-[0_0_20px_0_rgba(0,0,0,1)]"
      >
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '10px 10px'
      }}></div>
      <p className="relative 
                    z-10 
                    text-[#2d3748] 
                    text-sm sm:text-base md:text-lg"
      >© 2025 Mon Portfolio. Tous droits réservés.</p>
    </footer>
  );
}