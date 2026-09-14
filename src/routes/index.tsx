import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/bt/SiteHeader";
import { Reveal } from "@/components/bt/Reveal";
import { Logo } from "@/components/bt/Logo";
import { Lightbox } from "@/components/bt/Lightbox";
import { BeforeAfter } from "@/components/bt/BeforeAfter";
import { ContactForm } from "@/components/bt/ContactForm";
import {
  imageById,
  imagesFor,
  productCategories,
  type GalleryImage,
} from "@/lib/content/images";

const title = "Beyond Trade — Premium Building Materials | UAE & Egypt";
const description =
  "22+ years supplying wood, sanitary ware, tiles, marble & granite, glass, lighting and stainless steel for palaces, villas, hotels and hospitals across the UAE and Egypt.";
const siteUrl = "https://beyond-trade-landing-page.vercel.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },

      // Open Graph / Facebook / WhatsApp
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: `${siteUrl}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${siteUrl}/og-image.jpg` },
    ],
    links: [
      // Favicon setup
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  component: Index,
});

function SectionHeading({ eyebrow, heading }: { eyebrow?: string; heading: string }) {
  return (
    <div className="mb-8">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-[0.06em] text-gold uppercase sm:text-4xl">
        {heading}
      </h2>
    </div>
  );
}

function Index() {
  const heroImages = imagesFor("hero");
  const lifestyle = imagesFor("lifestyle");
  const beforeAfter = imageById("before-after-villa");
  const whyImage = imageById("why-kitchen");
  const lobby = imageById("lobby-hero");
  const intro = imageById("living-cream");

  const [heroIndex, setHeroIndex] = useState(0);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (heroImages.length < 2) return;
    const timer = window.setInterval(
      () => setHeroIndex((index) => (index + 1) % heroImages.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section id="home" className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="gold-frame relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[16/8]">
            {heroImages.map((image, index) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
                  index === heroIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16">
              <span className="pill mb-5 w-fit">UAE • Egypt</span>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[0.08em] uppercase sm:text-6xl lg:text-7xl">
                <span className="text-gold">Beyond</span> Trade
              </h1>
              <p className="mt-4 max-w-xl text-base text-foreground/90 sm:text-lg">
                Premium building materials for extraordinary spaces.
              </p>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                22+ years supplying palaces, villas, hotels, hospitals and commercial complexes
                across the UAE and Egypt.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="rounded-full bg-gold px-7 py-3 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.2em] text-background uppercase transition-colors hover:bg-gold-dark"
                >
                  Explore Products
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-gold/60 px-7 py-3 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold/10"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Who we are" heading="Introduction" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                With more than 22 years of experience in the building material domain, we have
                encountered and successfully tackled a myriad of challenges. This experience has
                honed our skills, enabling us to offer expert advice and tailored solutions for even
                the most complex projects.
              </p>
              <p>
                Our strong network and partnerships with renowned manufacturers allow us to offer an
                extensive and premium product range. From the finest quality products, we pride
                ourselves on providing materials that elevate the aesthetics and functionality of
                any space.
              </p>
            </div>
          </Reveal>
          {intro && (
            <Reveal delay={120} className="gold-frame aspect-[4/3]">
              <img src={intro.src} alt={intro.alt} className="h-full w-full object-cover" loading="lazy" />
            </Reveal>
          )}
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "22+", label: "Years experience" },
            { value: "7", label: "Product categories" },
            { value: "2", label: "Countries — UAE & Egypt" },
            { value: "∞", label: "Palaces • Villas • Hotels • Hospitals" },
          ].map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90} className="gold-panel p-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-gold">
                {stat.value}
              </p>
              <p className="mt-2 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Before / after */}
      {beforeAfter && (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <BeforeAfter src={beforeAfter.src} alt={beforeAfter.alt} />
              <p className="mt-5 text-center text-sm text-muted-foreground italic">
                From concept to completion — we deliver the materials behind every transformation.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Why choose us */}
      <section id="why-us" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {whyImage && (
            <Reveal className="gold-frame aspect-[4/3] lg:order-first">
              <img src={whyImage.src} alt={whyImage.alt} className="h-full w-full object-cover" loading="lazy" />
            </Reveal>
          )}
          <Reveal delay={120}>
            <SectionHeading eyebrow="Our edge" heading="Why Choose Us" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Over the years, we have had the privilege of working on an extensive range of
                projects. From luxurious palaces and villas to towering commercial complexes, hotels,
                and hospitals, our experience spans across diverse segments, reflecting our
                versatility and adaptability.
              </p>
              <p>
                Our team comprises seasoned professionals with an in-depth understanding of the
                latest product trends. This knowledge empowers us to source and provide the most
                innovative and superior building material products for our clients.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Expert Advice", body: "Two decades of specification know-how on every enquiry." },
            { title: "Premium Network", body: "Direct partnerships with renowned manufacturers." },
            { title: "Versatile Experience", body: "Palaces, villas, hotels, hospitals and complexes." },
            { title: "Tailored Solutions", body: "Material packages built around your project." },
          ].map((card, index) => (
            <Reveal key={card.title} delay={index * 90} className="gold-panel p-6">
              <span className="mb-4 block h-px w-10 bg-gold" />
              <h3 className="font-[family-name:var(--font-display)] text-base tracking-[0.12em] text-gold-soft uppercase">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="gold-panel mx-auto max-w-6xl p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="eyebrow mb-4">Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To emerge as the foremost and relied-upon building materials enterprise, acknowledged
                for our unwavering dedication to excellence, ingenuity, sustainability, and
                unwavering commitment to customer contentment.
              </p>
            </div>
            <div className="md:border-l md:border-gold/25 md:pl-10">
              <h2 className="eyebrow mb-4">Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to redefine spaces and enrich lives by delivering exceptional
                products, tailored solutions, and unmatched customer experiences. We strive to be at
                the forefront of the industry, setting benchmarks for quality and innovation while
                fostering sustainability and exceeding customer expectations.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Core values */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="What drives us" heading="Core Values" />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Customer-Centric",
                body: "Embedded in the foundation of our business ethos is an unwavering dedication to a customer-centric approach, where each facet of our operations is meticulously crafted with an unwavering focus on ensuring the utmost satisfaction of our valued customers.",
              },
              {
                title: "Excellence & Innovation",
                body: "Our relentless pursuit of excellence permeates every dimension of our endeavors, propelling us to establish and uphold elevated standards that serve as the driving force behind the continual enhancement of our products and services.",
              },
              {
                title: "Continuous Improvement",
                body: "We consider this commitment to excellence not merely as a goal but as an ongoing journey, a journey that propels us to consistently exceed expectations and set new benchmarks in the ever-evolving landscape of our industry.",
              },
            ].map((value, index) => (
              <Reveal key={value.title} delay={index * 110} className="gold-panel p-7">
                <h3 className="font-[family-name:var(--font-display)] text-base tracking-[0.14em] text-gold uppercase">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section id="products" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Seven categories" heading="Our Products" />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {productCategories.map((category, index) => (
              <Reveal key={category.id} delay={index * 60}>
                <a
                  href={`#${category.id}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-gold/25 bg-card/60 px-6 py-5 transition-colors hover:border-gold hover:bg-gold/5"
                >
                  <span className="flex items-center gap-4">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                    <span className="font-[family-name:var(--font-display)] tracking-[0.1em] uppercase">
                      {category.name}
                    </span>
                  </span>
                  <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category detail sections */}
      {productCategories.map((category) => {
        const images = imagesFor(category.id);
        return (
          <section key={category.id} id={category.id} className="px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[0.1em] text-gold uppercase sm:text-3xl">
                  {category.name}
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item} className="pill normal-case">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {images.length === 0 ? (
                <p className="mt-8 rounded-2xl border border-dashed border-gold/30 p-10 text-center text-sm text-muted-foreground">
                  Photos for this category are coming soon.
                </p>
              ) : (
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {images.map((image, index) => (
                    <Reveal key={image.id} delay={index * 80}>
                      <button
                        type="button"
                        onClick={() => setLightbox(image)}
                        className="gold-frame block aspect-[3/4] w-full"
                        aria-label={`View larger: ${image.alt}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </button>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Gallery */}
      <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Selected work" heading="Lifestyle Gallery" />
          </Reveal>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {lifestyle.map((image, index) => (
              <Reveal key={image.id} delay={index * 70}>
                <button
                  type="button"
                  onClick={() => setLightbox(image)}
                  className="gold-frame block w-full"
                  aria-label={`View larger: ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" className="w-full object-cover" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured statement */}
      {lobby && (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="gold-frame relative mx-auto aspect-[4/3] max-w-7xl sm:aspect-[16/9]">
            <img src={lobby.src} alt={lobby.alt} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 p-8">
              <p className="max-w-2xl text-center font-[family-name:var(--font-display)] text-xl tracking-wide text-foreground sm:text-3xl">
                “Every space tells a story — we supply the materials that make it
                <span className="text-gold"> extraordinary</span>.”
              </p>
            </div>
          </Reveal>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="border-t border-gold/20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Let's talk" heading="Contact Us" />
            <p className="max-w-md text-muted-foreground">
              Tell us about your project and our team will come back with a tailored material
              proposal.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p>
                <span className="text-gold">Phone (UAE)</span>{" "}
                <a href="tel:+971504386081" className="hover:text-gold">+971 50 438 6081</a>
              </p>
              <p>
                <span className="text-gold">Phone (Egypt)</span>{" "}
                <a href="tel:+201118265223" className="hover:text-gold">+2 011 1826 5223</a>
              </p>
              <p>
                <span className="text-gold">Email</span>{" "}
                <a href="mailto:contact@beyond-trades.com" className="hover:text-gold">
                  contact@beyond-trades.com
                </a>
              </p>
              <span className="pill mt-2">UAE • Egypt</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-gold/20 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <Logo />
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Building materials trading • UAE & Egypt
          </p>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-gold">Back to top</a>
            <span className="h-4 w-px bg-gold/30" />
            <span>© {new Date().getFullYear()} Beyond Trade</span>
          </div>
        </div>
      </footer>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}
