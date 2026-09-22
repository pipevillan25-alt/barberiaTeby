export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center"
          aria-label="TEB Barber Experience - Inicio"
        >
          <img
            src="/logoBarberia-transparent.png"
            alt="TEB Barber Experience"
            className="h-14 w-auto object-contain brightness-0 invert sm:h-16"
          />
        </a>

        {/* Menú */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm font-medium text-white transition hover:text-[#D9A441]"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="text-sm font-medium text-white transition hover:text-[#D9A441]"
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            className="text-sm font-medium text-white transition hover:text-[#D9A441]"
          >
            Nosotros
          </a>

          <a
            href="#galeria"
            className="text-sm font-medium text-white transition hover:text-[#D9A441]"
          >
            Galería
          </a>

          <a
            href="#contacto"
            className="text-sm font-medium text-white transition hover:text-[#D9A441]"
          >
            Contacto
          </a>
        </div>

        {/* Botón */}
        <a
          href="https://booksy.com/es-es/139376_teby-barber-experience_barberia_53221_camarma-de-esteruelas#ba_s=sh_1"
          className="hidden rounded-full border border-[#D9A441] px-5 py-2.5 text-sm font-semibold text-[#D9A441] transition hover:bg-[#D9A441] hover:text-black md:block"
          target="_blank"
        >
          Reservar cita con Booksy
        </a>
      </div>
    </nav>
  );
}