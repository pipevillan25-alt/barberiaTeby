"use client";

import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "/barberia.jpeg",
    alt: "Interior de la barbería",
  },
  {
    src: "/barberia.jpeg",
    alt: "Espacio de trabajo de la barbería",
  },
  {
    src: "/barberia.jpeg",
    alt: "Interior de la barbería",
  },
  {
    src: "/barberia.jpeg",
    alt: "Zona de barbería",
  },
  {
    src: "/barberia.jpeg",
    alt: "Espacio de atención",
  },
  {
    src: "/barberia.jpeg",
    alt: "Barbería",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === 0
        ? galleryImages.length - 1
        : selectedImage - 1
    );
  };

  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === galleryImages.length - 1
        ? 0
        : selectedImage + 1
    );
  };

  // Cerrar con Escape y navegar con las flechas del teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <section
        id="galeria"
        className="bg-[#080808] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D9A441]">
              Galería
            </p>

            <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              Conoce nuestro espacio
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-400">
              Un espacio pensado para disfrutar de una experiencia
              profesional, cómoda y diferente.
            </p>
          </div>

          {/* Galería */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 text-left focus:outline-none focus:ring-2 focus:ring-[#D9A441]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
                  <span className="scale-75 rounded-full border border-[#D9A441] bg-black/70 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#D9A441] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                    Ver imagen
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX / SLIDER */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeGallery}
        >
          {/* Cerrar */}
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:border-[#D9A441] hover:text-[#D9A441]"
            aria-label="Cerrar galería"
          >
            ×
          </button>

          {/* Imagen */}
          <div
            className="relative flex max-h-[90vh] max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
            />

            {/* Flecha anterior */}
            <button
              type="button"
              onClick={previousImage}
              className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-3xl text-white transition hover:border-[#D9A441] hover:text-[#D9A441] sm:-left-16"
              aria-label="Imagen anterior"
            >
              ‹
            </button>

            {/* Flecha siguiente */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-3xl text-white transition hover:border-[#D9A441] hover:text-[#D9A441] sm:-right-16"
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          </div>

          {/* Contador */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm text-gray-300">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}