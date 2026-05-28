import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero, SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";
import { Search, Coffee, Cookie, ShoppingBasket, SprayCan, Home as HomeIcon, Boxes } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Brands | Arrowhead General Trading" },
      { name: "description", content: "Explore the full range of FMCG products and brands distributed by Arrowhead General Trading across the UAE." },
    ],
  }),
  component: Products,
});

const categories = [
  { icon: Coffee, name: "Beverages", desc: "Juices, soft drinks, mineral water, energy drinks, tea & coffee.", items: ["Carbonated Soft Drinks", "Fruit Juices", "Mineral Water", "Tea & Coffee"] },
  { icon: Cookie, name: "Snacks", desc: "Chips, biscuits, chocolates and confectionery.", items: ["Potato Chips", "Cookies & Biscuits", "Chocolates", "Nuts & Dried Fruits"] },
  { icon: ShoppingBasket, name: "Packaged Foods", desc: "Pantry staples, sauces, breakfast and ready meals.", items: ["Rice & Pulses", "Cooking Oils", "Sauces & Condiments", "Breakfast Cereals"] },
  { icon: SprayCan, name: "Personal Care", desc: "Hygiene, beauty and grooming essentials.", items: ["Shampoo & Hair Care", "Skin Care", "Oral Care", "Deodorants"] },
  { icon: HomeIcon, name: "Household Essentials", desc: "Cleaning, laundry and home care.", items: ["Detergents", "Surface Cleaners", "Tissues & Paper", "Air Fresheners"] },
  { icon: Boxes, name: "General Merchandise", desc: "Wide assortment for every retail need.", items: ["Disposables", "Kitchenware", "Stationery", "Seasonal Items"] },
];

const brands = ["Nestle", "Unilever", "P&G", "Coca-Cola", "PepsiCo", "Mondelez", "Almarai", "Mars", "Reckitt", "Henkel", "Kellogg's", "Nabil"];

function Products() {
  const [q, setQ] = useState("");
  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(q.toLowerCase()) ||
    c.items.some((i) => i.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <Layout>
      <PageHero title="Our Products" subtitle="A curated portfolio of FMCG categories and brands to power every aisle." />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="mb-8 flex max-w-md items-center gap-2 border bg-muted px-4 py-3">
            <Search size={18} className="text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search categories or products..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <div key={c.name} className="group flex flex-col border bg-background p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 grid h-12 w-12 place-items-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-secondary">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-foreground/80">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-primary" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground">No matches. Try a different search.</p>
          )}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <SectionHeader eyebrow="Featured Brands" title="Trusted partners in our portfolio" center />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {brands.map((b) => (
              <div key={b} className="grid h-24 place-items-center bg-background text-center text-sm font-bold text-secondary transition-all hover:shadow-md">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
