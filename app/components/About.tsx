import Image from "next/image";

const whatsappNumber = "34624995947 ";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero reservar una cita en la barbería. ¿Qué horarios tienen disponibles?"
);
const barbers = [
  {
    id: 1,
    name: "Steban Ortega",
    role: "Barbero profesional",
    description:
      "Especialista en cortes modernos y estilos personalizados.",
    image: "/barbero1.jpeg",
    whatsappMessage:"Hola, quiero reservar una cita en la barbería con Steban Ortega. ¿Qué horarios tienen disponibles?",
  },
  {
    id: 2,
    name: "Nombre del Barbero",
    role: "Barbero profesional",
    description:
      "Especialista en barbería clásica y cuidado de barba.",
    image: "/barbero2.jpeg",
    whatsappMessage:"Hola, quiero reservar una cita en la barbería. ¿Qué horarios tienen disponibles?",
  },
  {
    id: 3,
    name: "Nombre del Barbero",
    role: "Barbero profesional",
    description:
      "Especialista en barbería clásica y cuidado de barba.",
    image: "/barbero3.jpeg",
    whatsappMessage:"Hola, quiero reservar una cita en la barbería. ¿Qué horarios tienen disponibles?",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-[#111111] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Información general */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D9A441]">
              Sobre nosotros
            </p>

            <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              Más que un corte,
              <br />
              una experiencia.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400">
              Somos una barbería enfocada en ofrecer cortes de calidad,
              cuidado de barba y una experiencia diferente para cada cliente.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-400">
              Nuestro objetivo es combinar técnicas tradicionales con
              estilos modernos, cuidando cada detalle para que cada visita
              sea una experiencia de calidad.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-[#D9A441]">+5</p>
                <p className="mt-1 text-sm text-gray-400">
                  Años de experiencia
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#D9A441]">+1000</p>
                <p className="mt-1 text-sm text-gray-400">
                  Clientes atendidos
                </p>
              </div>
            </div>
          </div>

          {/* Bloque visual */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#080808]">
              {/* Fotografía del barbero */}
              <div className="relative h-[360px] w-full overflow-hidden bg-[#0d0d0d]">
                <Image
                  src="/corte.jpeg"
                  alt="Barbero de la barbería"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Información */}
              <div className="p-8">
                <h3 className="text-2xl font-bold uppercase text-white">
                  Calidad en cada detalle
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  Desde el primer contacto hasta el resultado final, buscamos
                  ofrecer un servicio profesional, cómodo y personalizado.
                </p>
              </div>
            </div>
        </div>

        {/* Equipo */}
        <div className="mt-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D9A441]">
              Nuestro equipo
            </p>

            <h2 className="mt-4 text-4xl font-bold uppercase text-white sm:text-5xl">
              Conoce a nuestros barberos
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Profesionales dedicados a cuidar cada detalle de tu estilo.
            </p>
          </div>

          {/* Tarjetas de barberos */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {barbers.map((barber) => (
              <div
                key={barber.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#080808] transition duration-300 hover:-translate-y-2 hover:border-[#D9A441]/50"
              >
                {/* Fotografía */}
                <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={barber.image}
                    alt={barber.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Información */}
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
                    {barber.role}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {barber.name}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-400">
                    {barber.description}
                  </p>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${barber.whatsappMessage}`}
                    className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-[#D9A441] transition hover:text-white"
                  >
                    Reservar con este barbero →
                  </a>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}