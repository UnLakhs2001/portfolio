"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

const IMAGES_PER_VIEW = 3;

const ProjectCarousel = ({ images, title }: ProjectCarouselProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const currentPage = Math.floor(startIndex / IMAGES_PER_VIEW) + 1;
  const totalPages = Math.ceil(images.length / IMAGES_PER_VIEW);

  const nextImages = () => {
    setStartIndex((prev) =>
      prev + IMAGES_PER_VIEW >= images.length ? 0 : prev + IMAGES_PER_VIEW,
    );
  };

  const prevImages = () => {
    setStartIndex((prev) => {
      if (prev === 0) {
        const remainder = images.length % IMAGES_PER_VIEW;
        return remainder === 0
          ? images.length - IMAGES_PER_VIEW
          : images.length - remainder;
      }
      return prev - IMAGES_PER_VIEW;
    });
  };

  const visibleImages = images.slice(startIndex, startIndex + IMAGES_PER_VIEW);

  return (
    <div className="space-y-4">
      {/* Carousel */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleImages.map((image, index) => (
          <button
            key={`${image}-${index}`}
            onClick={() => setSelectedImage(image)}
            className="hover:cursor-pointer relative aspect-3/2 overflow-hidden rounded-xl border border-foreground/10 group"
          >
            <Image
              src={image}
              alt={`${title} screenshot ${startIndex + index + 1}`}
              fill
              className="object-cover transition group-hover:scale-[1.02]"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
          </button>
        ))}
      </div>

      {/* Controls */}
      {images.length > IMAGES_PER_VIEW && (
        <div className="flex items-center justify-between">
          <button
            onClick={prevImages}
            className="rounded-lg bg-white border border-foreground/10 px-4 py-2 text-sm hover:bg-foreground/5 transition hover:cursor-pointer"
          >
            ← Previous
          </button>

          <span className="text-sm text-foreground/60">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={nextImages}
            className="rounded-lg bg-white border border-foreground/10 px-4 py-2 text-sm hover:bg-foreground/5 transition hover:cursor-pointer"
          >
            Next →
          </button>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-16/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full screenshot"
              fill
              className="object-contain rounded-lg"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-white text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
