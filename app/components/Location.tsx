const address =
  "Avenida de los Cazadores 5, Camarma de Esteruelas, España";

const mapUrl =
  "https://www.google.com/maps?q=Avenida+de+los+Cazadores+5,+Camarma+de+Esteruelas,+España&output=embed";

export default function Location() {
  return (
    <section id="contacto" className="bg-[#080808] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D9A441]">
    Encuéntranos
  </p>

  <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
    Ven a visitarnos
  </h2>

  <p className="mt-5 text-base leading-7 text-gray-400">
    Estamos ubicados en Camarma de Esteruelas. Te esperamos para ofrecerte
    una experiencia profesional de barbería.
  </p>
</div>

        {/* Información + mapa */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Información */}
          <div className="rounded-3xl border border-white/10 bg-[#111111] p-8">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
                Dirección
              </p>

              <p className="mt-3 text-lg leading-7 text-white">
                {address}
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
                Horario
              </p>

              <div className="mt-4 space-y-3 text-sm text-gray-400">
                <div className="flex justify-between gap-4">
                  <span>Lunes - Viernes</span>
                  <span className="text-white">9:00 - 20:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Sábado</span>
                  <span className="text-white">9:00 - 18:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Domingo</span>
                  <span className="text-white">Cerrado</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Avenida+de+los+Cazadores+5,+Camarma+de+Esteruelas,+España"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-full border border-[#D9A441] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#D9A441] transition hover:bg-[#D9A441] hover:text-black"
            >
              Abrir en Google Maps
            </a>
          </div>

          {/* Mapa */}
          <div className="min-h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la barbería"
            />
          </div>
        </div>
      </div>
    </section>
  );
}