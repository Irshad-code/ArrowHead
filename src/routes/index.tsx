import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Truck, ShieldCheck, Users, Package, ArrowRight,
  Coffee, Cookie, ShoppingBasket, SprayCan, Home as HomeIcon, Boxes,
} from "lucide-react";
import hero from "@/assets/hero-warehouse.jpg";
import shelf from "@/assets/products-shelf.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arrowhead General Trading | Trusted FMCG Distributor in Dubai" },
      { name: "description", content: "Arrowhead General Trading LLC — your trusted FMCG distribution partner in Dubai and across the UAE. Beverages, snacks, personal care and household essentials delivered with reliability." },
    ],
  }),
  component: Home,
});

const categories = [
  { icon: Coffee, name: "Beverages", desc: "Juices, soft drinks, water, tea & coffee." },
  { icon: Cookie, name: "Snacks", desc: "Chips, biscuits, confectionery and more." },
  { icon: ShoppingBasket, name: "Packaged Foods", desc: "Staples, ready meals and pantry essentials." },
  { icon: SprayCan, name: "Personal Care", desc: "Hygiene, beauty and grooming products." },
  { icon: HomeIcon, name: "Household Essentials", desc: "Cleaning, laundry and home care." },
  { icon: Boxes, name: "General Merchandise", desc: "Broad assortment for every retail need." },
];

const values = [
  { icon: Truck, title: "Reliable Distribution Network", desc: "Modern fleet and warehousing ensuring on-time delivery across the UAE." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Sourced from trusted manufacturers with strict cold-chain and quality controls." },
  { icon: Users, title: "Customer-Centric Approach", desc: "Dedicated account managers building long-term retail partnerships." },
  { icon: Package, title: "Wide Product Range", desc: "Hundreds of SKUs across categories from leading regional and global brands." },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Arrowhead FMCG distribution warehouse in Dubai"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
        <div className="relative mx-auto flex max-w-7xl flex-col px-4 py-28 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-4 inline-block bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground">
              FMCG Distribution · Dubai
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Your Trusted FMCG Partner in Dubai
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              Arrowhead General Trading LLC delivers leading FMCG brands to retailers, supermarkets, and businesses across the UAE — backed by a modern logistics network and uncompromising quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-white hover:text-secondary"
              >
                Explore Our Products <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-secondary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Who We Are</div>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              Distributing leading FMCG brands across the UAE
            </h2>
          </div>
          <div className="text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Headquartered in Dubai, Arrowhead General Trading LLC is a fast-growing
              FMCG distributor serving supermarkets, hypermarkets, convenience chains
              and HoReCa partners across the Emirates. We combine deep market knowledge
              with a modern supply chain to help brands reach every shelf — on time,
              every time.
            </p>
            <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <SectionHeader
            eyebrow="Our Products"
            title="Featured Categories"
            description="From breakfast aisles to checkout counters — we distribute the everyday essentials shoppers reach for."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.name} className="group border bg-background p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 grid h-12 w-12 place-items-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-secondary">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 border-2 border-secondary px-6 py-3 text-sm font-bold uppercase tracking-wider text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <img src={shelf} alt="FMCG products on supermarket shelves" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Why Choose Us" title="Built on trust. Driven by performance." />
            <div className="space-y-5">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center bg-secondary text-secondary-foreground">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{v.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to stock the brands your customers love?</h2>
            <p className="mt-2 text-white/80">Talk to our team about bulk orders, partnerships, and distribution across the UAE.</p>
          </div>
          <Link to="/contact" className="bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-white hover:text-secondary">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
