const services = [
  {
    name: "Corte",
    description:
      "Cortes clásicos y modernos adaptados a tu estilo y tipo de cabello.",
    price: "$25.000",
  },
  {
    name: "Barba",
    description:
      "Perfilado, diseño y cuidado de barba para mantener un acabado limpio.",
    price: "$15.000",
  },
  {
    name: "Corte + Barba",
    description:
      "La combinación perfecta para renovar completamente tu estilo.",
    price: "$35.000",
  },
  {
    name: "Diseño",
    description:
      "Diseños personalizados y detalles especiales para darle un toque único a tu look.",
    price: "$10.000",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#080808] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D9A441]">
            Nuestros servicios
          </p>

          <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Tu estilo, nuestra experiencia
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400">
            Servicios profesionales pensados para que disfrutes una
            experiencia completa de barbería.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="group rounded-2xl border border-white/10 bg-[#111111] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#D9A441]/50"
            >
              {/* Icono */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9A441]/40 text-xl text-[#D9A441]">
                ✂
              </div>

              <h3 className="mt-6 text-2xl font-bold uppercase text-white">
                {service.name}
              </h3>

              <p className="mt-4 min-h-[80px] text-sm leading-6 text-gray-400">
                {service.description}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-2xl font-bold text-[#D9A441]">
                  {service.price}
                </p>
              </div>

              <a
                href="#reservar"
                className="mt-6 block rounded-full border border-[#D9A441]/50 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#D9A441] transition hover:bg-[#D9A441] hover:text-black"
              >
                Reservar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}