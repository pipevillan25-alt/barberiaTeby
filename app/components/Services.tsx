import Image from "next/image";

const services = [
  {
    name: "Corte",
    description:
      "Un corte en el que cuidamos cada detalle. Además de ofrecerte un lavado de cabeza y un masaje al finalizar el corte, te invitamos a disfrutar de una bebida para completar tu experiencia.",
    price: "13 €",
    image: "/example.jpeg",
  },
  {
    name: "Barba y Spa",
    description:
      "Una experiencia pensada para cuidar cada detalle. Disfruta de una exfoliación facial, un masajeador ocular y un diseño de barba hecho a la medida. Finalizamos con la aplicación de aceite para barba y una bebida para completar la experiencia.",
    price: "10 €",
    image: "/barbaspa.jpeg",
  },
  {
    name: "Limpieza Facial",
    description:
      "Una limpieza profunda para cuidar tu piel y dejar tu rostro libre de impurezas y puntos negros. Además, disfruta de un momento de relajación con un pequeño masaje en el cuello para completar la experiencia.",
    price: "16 €",
    image: "/limpiezafacial.jpeg",
  },
  {
    name: "Corte normal + Barba express",
    description:
      "Diseños personalizados y detalles especiales para darle un toque único a tu look.",
    price: "18 €",
    image: "/corte.jpeg",
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
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111]"
            >

              {/* Imagen */}
              <div className="relative flex h-[210px] w-full items-center justify-center overflow-hidden bg-[#0d0d0d]">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-7">

                <h3 className="text-2xl font-bold uppercase text-white">
                  {service.name}
                </h3>

                {/* Descripción */}
                <p className="mt-4 min-h-[144px] text-sm leading-6 text-gray-400">
                  {service.description}
                </p>

                {/* Parte inferior */}
                <div className="mt-auto">

                  {/* Precio */}
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-2xl font-bold text-[#D9A441]">
                      {service.price}
                    </p>
                  </div>

                  {/* Botón */}
                  <a
                    href="#reservar"
                    className="mt-6 block rounded-full border border-[#D9A441]/50 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#D9A441] transition hover:bg-[#D9A441] hover:text-black"
                  >
                    Reservar
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}