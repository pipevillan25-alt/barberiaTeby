const socialLinks = [
  {
    name: "Instagram",
    username: "Tebybarberexperience",
    url: "https://www.instagram.com/Tebybarberexperience/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    username: "@tebybarber",
    url: "https://www.tiktok.com/@tebybarber",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M15.5 3c.3 1.8 1.3 3.2 3 4v2.7c-1.2-.1-2.3-.5-3.3-1.2v6.4c0 4-2.7 6.1-5.9 6.1-3 0-5.3-2.1-5.3-5 0-3.2 2.6-5.5 6-5.5.3 0 .7 0 1 .1v2.8c-.3-.1-.7-.2-1-.2-1.7 0-3 1.1-3 2.8 0 1.5 1.1 2.5 2.5 2.5 1.7 0 3-1.1 3-3.4V3h3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    username: "Próximamente",
    url: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.3 3.7-6.3 3.7Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    username: "Próximamente",
    url: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H7.5v3h2.8v8h3.2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    username: "Próximamente",
    url: "",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M5.2 8.4H2V21h3.2V8.4ZM3.6 3A1.9 1.9 0 1 0 3.6 6.8 1.9 1.9 0 0 0 3.6 3ZM21 13.8c0-3.8-2-5.7-4.8-5.7-2.2 0-3.1 1.2-3.6 2v-1.7H9.4V21h3.2v-6.2c0-1.6.3-3.1 2.3-3.1 2 0 2 1.8 2 3.2V21H21v-7.2Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Parte principal */}
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
            <a
            href="#inicio"
            aria-label="TEB Barber Experience - Inicio"
            className="inline-flex items-center"
            >
            <img
                src="/logoBarberia-transparent.png"
                alt="TEB Barber Experience"
                className="h-24 w-auto object-contain brightness-0 invert sm:h-28"
            />
            </a>

          <div className="mt-4 h-px w-16 bg-[#D9A441]" />

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
            Estilo, precisión y experiencia. Tu barbería en Camarma de Esteruelas.
            </p>

          {/* Redes */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => {
              const isActive = social.url !== "";

              if (isActive) {
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${social.name}`}
                    title={social.username}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111111] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-black"
                  >
                    {social.icon}
                  </a>
                );
              }

              return (
                <span
                  key={social.name}
                  aria-label={`${social.name} próximamente`}
                  title={`${social.name} próximamente`}
                  className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-white/5 bg-[#0b0b0b] text-gray-700"
                >
                  {social.icon}
                </span>
              );
            })}
          </div>

          {/* Dirección */}
          <div className="mt-10 text-sm text-gray-500">
            Avenida de los Cazadores 5 · Camarma de Esteruelas, España
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-600 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Barbería. Todos los derechos
              reservados.
            </p>

            <p>
              Diseño y desarrollo web
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}