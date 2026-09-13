import { useRef, useState } from "react";

export function BeforeAfter({ src, alt }: { src: string; alt: string }) {
  const [position, setPosition] = useState(52);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const move = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  return (
    <div
      ref={frameRef}
      className="gold-frame relative aspect-[16/8] w-full cursor-ew-resize select-none"
      onPointerMove={(event) => {
        if (event.buttons === 1) move(event.clientX);
      }}
      onPointerDown={(event) => move(event.clientX)}
    >
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background/55 backdrop-grayscale" />
      </div>
      <div
        className="absolute inset-y-0 w-px bg-gold"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-background text-gold">
          ↔
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        aria-label="Reveal the finished result"
        onChange={(event) => setPosition(Number(event.target.value))}
        className="sr-only"
      />
      <span className="pill absolute bottom-4 left-4">Before</span>
      <span className="pill absolute right-4 bottom-4">After</span>
    </div>
  );
}
