import { useEffect } from "react";
import type { GalleryImage } from "@/lib/content/images";

export function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  useEffect(() => {
    if (!image) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev?.();
      if (event.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [image, onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-5 right-5 rounded-full border border-gold/50 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-background"
      >
        Close
      </button>
      <img
        src={image.src}
        alt={image.alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] w-auto max-w-full rounded-2xl border border-gold/40 object-contain"
      />
    </div>
  );
}
