// Single source of truth for every photo on the site.
// To add or remove a picture, edit this list only — never hard-code paths in JSX.
//
// Images are served as plain static files from /public/images/bt/.
// To add a new photo: drop the file into public/images/bt/ and add an entry below.
// To remove a photo: delete its entry below (and optionally the file).

export type ImageCategory =
  | "hero"
  | "lifestyle"
  | "feature"
  | "wooden"
  | "sanitary"
  | "tiles"
  | "marble"
  | "glass"
  | "lighting"
  | "steel";

export type GalleryImage = {
  id: string;
  category: ImageCategory;
  src: string;
  alt: string;
  order: number;
};

const asset = (filename: string) => `/images/bt/${filename}`;

export const galleryImages: GalleryImage[] = [
  { id: "hero-kitchen", category: "hero", src: asset("hero-kitchen-01.png"), alt: "Luxury marble and wood kitchen interior", order: 1 },
  { id: "hero-living", category: "hero", src: asset("hero-livingroom-01.png"), alt: "Elegant living room with warm wood panelling", order: 2 },

  { id: "before-after-villa", category: "feature", src: asset("before-after-villa.png"), alt: "Villa under construction transitioning into a finished luxury home", order: 1 },
  { id: "why-kitchen", category: "feature", src: asset("why-choose-us-kitchen.png"), alt: "Premium kitchen fitted with Beyond Trade materials", order: 2 },
  { id: "lobby-hero", category: "feature", src: asset("lobby-hero.png"), alt: "Grand hotel lobby with a sculptural feature tree", order: 3 },

  { id: "living-cream", category: "lifestyle", src: asset("livingroom-cream-tones.png"), alt: "Living room in soft cream tones", order: 1 },
  { id: "living-tv", category: "lifestyle", src: asset("livingroom-tv-unit.png"), alt: "Living room with bespoke TV unit", order: 2 },
  { id: "wardrobe-full", category: "lifestyle", src: asset("wardrobe-full-unit.png"), alt: "Full-height wardrobe and dressing unit", order: 3 },
  { id: "lifestyle-kitchen", category: "lifestyle", src: asset("hero-kitchen-01.png"), alt: "Marble kitchen with gold detailing", order: 4 },
  { id: "lifestyle-living", category: "lifestyle", src: asset("hero-livingroom-01.png"), alt: "Warm contemporary living space", order: 5 },
  { id: "lifestyle-lobby", category: "lifestyle", src: asset("lobby-hero.png"), alt: "Hotel lobby with stone and glass finishes", order: 6 },

  { id: "wooden-01", category: "wooden", src: asset("wooden-01-bedroom.png"), alt: "Wooden bedroom wall cladding and joinery", order: 1 },
  { id: "wooden-02", category: "wooden", src: asset("wooden-02-kitchen.png"), alt: "Wooden kitchen cabinetry", order: 2 },
  { id: "wooden-03", category: "wooden", src: asset("wooden-03-door.png"), alt: "Solid wood interior door", order: 3 },
  { id: "wooden-04", category: "wooden", src: asset("wooden-04-wardrobe.png"), alt: "Wooden wardrobe and dressing unit", order: 4 },

  { id: "sanitary-01", category: "sanitary", src: asset("sanitary-01-vanity-double.png"), alt: "Double vanity with designer mixers", order: 1 },
  { id: "sanitary-02", category: "sanitary", src: asset("sanitary-02-basin.png"), alt: "Sculpted washbasin", order: 2 },
  { id: "sanitary-03", category: "sanitary", src: asset("sanitary-03-vanity-mirror.png"), alt: "Vanity unit with backlit mirror", order: 3 },
  { id: "sanitary-04", category: "sanitary", src: asset("sanitary-04-vanity-wood.png"), alt: "Wood-framed vanity with stone counter", order: 4 },

  { id: "tiles-01", category: "tiles", src: asset("tiles-01-livingroom.png"), alt: "Living room with large-format floor tiles", order: 1 },
  { id: "tiles-02", category: "tiles", src: asset("tiles-02-kitchen-slab.png"), alt: "Kitchen with slab tile splashback", order: 2 },
  { id: "tiles-03", category: "tiles", src: asset("tiles-03-floor.png"), alt: "Polished floor tile detail", order: 3 },
  { id: "tiles-04", category: "tiles", src: asset("tiles-04-outdoor.png"), alt: "Outdoor terrace facade tiling", order: 4 },

  { id: "marble-01", category: "marble", src: asset("marble-01-bathroom.png"), alt: "Marble-clad bathroom", order: 1 },
  { id: "marble-02", category: "marble", src: asset("marble-02-kitchen-island.png"), alt: "Marble kitchen island", order: 2 },
  { id: "marble-03", category: "marble", src: asset("marble-03-bathtub.png"), alt: "Marble surround freestanding bathtub", order: 3 },
  { id: "marble-04", category: "marble", src: asset("marble-04-vanity-floor.png"), alt: "Marble vanity and flooring", order: 4 },

  { id: "glass-01", category: "glass", src: asset("glass-01-shower.png"), alt: "Frameless glass shower enclosure", order: 1 },
  { id: "glass-02", category: "glass", src: asset("glass-02-led-mirror.png"), alt: "LED bathroom mirror", order: 2 },
  { id: "glass-03", category: "glass", src: asset("glass-03-round-mirrors.png"), alt: "Cluster of round decorative mirrors", order: 3 },
  { id: "glass-04", category: "glass", src: asset("glass-04-staircase.png"), alt: "Glass staircase balustrade", order: 4 },

  { id: "lighting-01", category: "lighting", src: asset("lighting-01-ceiling.png"), alt: "Decorative ceiling lighting", order: 1 },
  { id: "lighting-02", category: "lighting", src: asset("lighting-02-pendant.png"), alt: "Pendant lighting over a dining table", order: 2 },
  { id: "lighting-03", category: "lighting", src: asset("lighting-03-ceiling-rings.png"), alt: "Ceiling light rings in a modern interior", order: 3 },
  { id: "lighting-04", category: "lighting", src: asset("lighting-04-outdoor-wall.png"), alt: "Outdoor wall lighting", order: 4 },

  { id: "steel-01", category: "steel", src: asset("steel-01-kitchen.png"), alt: "Stainless steel kitchen solution", order: 1 },
  { id: "steel-02", category: "steel", src: asset("steel-02-wardrobe.png"), alt: "Stainless steel wardrobe system", order: 2 },
  { id: "steel-03", category: "steel", src: asset("steel-03-vanity.png"), alt: "Stainless steel bathroom vanity", order: 3 },
  { id: "steel-04", category: "steel", src: asset("steel-04-vanity-mirror.png"), alt: "Stainless steel vanity with mirror", order: 4 },
];

export function imagesFor(category: ImageCategory): GalleryImage[] {
  return galleryImages
    .filter((image) => image.category === category)
    .sort((a, b) => a.order - b.order);
}

export function imageById(id: string): GalleryImage | undefined {
  return galleryImages.find((image) => image.id === id);
}

export type ProductCategory = {
  id: Extract<
    ImageCategory,
    "wooden" | "sanitary" | "tiles" | "marble" | "glass" | "lighting" | "steel"
  >;
  name: string;
  items: string[];
};

export const productCategories: ProductCategory[] = [
  { id: "wooden", name: "Wooden Products", items: ["Furniture", "Kitchen", "Dressing & Wardrobe", "Wall Cladding", "Doors"] },
  { id: "sanitary", name: "Sanitary Ware", items: ["Mixers", "Washbasin", "WC & Bidet", "Wellness", "Vanity", "Counters", "Accessories"] },
  { id: "tiles", name: "Tiles", items: ["Floor Tile", "Slab Tile", "Mosaic Tile", "Facade Tile", "Cladding Tile", "Decorative Tile", "Glass Tile", "Profiles"] },
  { id: "marble", name: "Marble & Granite", items: ["Floor", "Pillars and Columns", "Staircase", "Walls", "Counter-tops", "Furniture", "Cladding"] },
  { id: "glass", name: "Glass & Mirror", items: ["Shower Enclosures", "Staircase", "Balcony Railing", "Doors", "Cladding", "Smart Glass", "Counters", "Bathroom Mirrors", "LED Mirror"] },
  { id: "lighting", name: "Lighting", items: ["Decorative", "Indoor", "Outdoor", "Smart Lighting"] },
  { id: "steel", name: "Stainless Steel Solution", items: ["Kitchen", "Wardrobe & Dressing", "Bathroom & Vanity"] },
];
