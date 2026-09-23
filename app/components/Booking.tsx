import { MessageCircle } from "lucide-react";
const whatsappNumber = "34624995947 ";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero reservar una cita en la barbería. ¿Qué horarios tienen disponibles?"
);
export default function Booking() {
  return (
    <section
      id="reservar"
      className="relative overflow-hidden bg-[#111111] px-6 py-24 lg:px-8"
    >
      {/* Detalle dorado */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#D9A441]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D9A441]">
          Reserva tu cita
        </p>

        <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          Tu próximo corte
          <br />
          comienza aquí.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400">
          Elige tu servicio y ponte en contacto con nosotros para reservar
          tu próxima cita.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
          className="inline-flex items-center justify-center gap-2 rounded-full 
          bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-wide text-black shadow-lg 
          shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] 
          hover:shadow-xl hover:shadow-[#25D366]/30 active:translate-y-0" > 
          <MessageCircle className="h-5 w-5" strokeWidth={2.5} /> 
          WhatsApp 
          </a>

          {/* Botón */}
          <a
            href="https://booksy.com/es-es/139376_teby-barber-experience_barberia_53221_camarma-de-esteruelas#ba_s=sh_1"
            className="rounded-full border border-[#D9A441] px-8 py-4 text-sm font-bold uppercase text-[#D9A441] transition hover:bg-[#D9A441] hover:text-black md:block"
            target="_blank"
          >
            Reservar cita con Booksy
          </a>

          <a
            href="#servicios"
            className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#D9A441] hover:text-[#D9A441]"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}