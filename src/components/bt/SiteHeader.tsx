import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { productCategories } from "@/lib/content/images";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-gold/20 bg-background/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <a href="#home" aria-label="Beyond Trade home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isProducts = id === "products";
            return (
              <div key={link.href} className="group relative">
                <a
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors hover:text-gold ${
                    active === id ? "text-gold" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                  {isProducts ? " ▾" : ""}
                </a>
                {isProducts && (
                  <div className="invisible absolute top-full left-1/2 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="gold-panel space-y-1 p-3">
                      {productCategories.map((category) => (
                        <li key={category.id}>
                          <a
                            href={`#${category.id}`}
                            className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-gold/10 hover:text-gold"
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a href="tel:+971504386081" className="text-sm text-muted-foreground transition-colors hover:text-gold">
            +971 50 438 6081
          </a>
          <span className="pill">UAE • Egypt</span>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-gold/50 px-4 py-2 text-sm text-gold lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[4.5rem] z-40 bg-background/98 px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-foreground/90 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 space-y-2 border-t border-gold/20 pt-6 text-sm text-muted-foreground">
            <p>+971 50 438 6081 (UAE)</p>
            <p>+2 011 1826 5223 (Egypt)</p>
            <p>contact@beyond-trades.com</p>
            <span className="pill mt-3">UAE • Egypt</span>
          </div>
        </div>
      )}
    </header>
  );
}
