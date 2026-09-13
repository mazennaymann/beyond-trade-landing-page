import { useState, type FormEvent } from "react";
import { productCategories } from "@/lib/content/images";

const inputClass =
  "w-full rounded-xl border border-gold/25 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Project type: ${data.get("projectType")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:contact@beyond-trades.com?subject=${encodeURIComponent(
      `Enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="gold-panel space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
            Name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
            Phone
          </label>
          <input id="phone" name="phone" className={inputClass} placeholder="+971 ..." />
        </div>
        <div>
          <label htmlFor="projectType" className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
            Project type
          </label>
          <select id="projectType" name="projectType" className={inputClass} defaultValue={productCategories[0]?.name}>
            {productCategories.map((category) => (
              <option key={category.id} value={category.name} className="bg-background">
                {category.name}
              </option>
            ))}
            <option value="Multiple categories" className="bg-background">
              Multiple categories
            </option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us about your project" />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-gold px-6 py-3 font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-background uppercase transition-colors hover:bg-gold-dark sm:w-auto"
      >
        Request a quote
      </button>
      {sent && (
        <p className="text-sm text-gold-soft">
          Your email app should now be open with the enquiry ready to send.
        </p>
      )}
    </form>
  );
}
