import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <Image
        src="/barber1.jpeg"
        alt="Interior de la barbería"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Degradado inferior */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
        <div className="max-w-3xl">
          
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#D9A441]">
            Barbería & Experience
          </p>

          <h1 className="text-5xl font-bold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl">
            Tu estilo.
            <br />
            <span className="text-[#D9A441]">Tu momento.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Cortes clásicos y modernos, cuidado de barba y una experiencia
            diseñada para que salgas con tu mejor estilo.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#reservar"
              className="rounded-full bg-[#D9A441] px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#C58A3A]"
            >
              Reservar cita
            </a>

            <a
              href="#servicios"
              className="rounded-full border border-white/40 px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#D9A441] hover:text-[#D9A441]"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}