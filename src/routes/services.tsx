import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero, SectionHeader } from "@/components/SectionHeader";
import { Truck, Warehouse, Handshake, ShoppingCart, MapPin, Clock } from "lucide-react";
import fleet from "@/assets/distribution-fleet.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Distribution | Arrowhead General Trading" },
      { name: "description", content: "Distribution, warehousing and logistics services across Dubai and the UAE for retailers, supermarkets and e-commerce partners." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: MapPin, title: "Nationwide Coverage", desc: "Distribution across Dubai, Abu Dhabi and the wider GCC region." },
  { icon: Warehouse, title: "Warehousing & Storage", desc: "Climate-controlled warehouses with strict inventory management." },
  { icon: Truck, title: "Logistics & Fleet", desc: "Modern fleet of refrigerated and dry vehicles for safe delivery." },
  { icon: Clock, title: "On-time Delivery", desc: "Guaranteed delivery windows so your shelves stay stocked." },
  { icon: Handshake, title: "Retail Partnerships", desc: "Long-term partnerships with supermarkets, hypermarkets and HoReCa." },
  { icon: ShoppingCart, title: "E-commerce Support", desc: "Fulfilment support for fast-moving e-commerce categories." },
];

function Services() {
  return (
    <Layout>
      <PageHero title="Services & Distribution" subtitle="A complete distribution platform built for the speed of modern FMCG." />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <SectionHeader eyebrow="What We Do" title="Distribution capabilities" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="border bg-background p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="mb-4 grid h-12 w-12 place-items-center bg-secondary text-secondary-foreground">
                  <s.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-secondary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <img src={fleet} alt="Arrowhead distribution fleet" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
          <div>
            <SectionHeader eyebrow="B2B Support" title="Built for retailers, supermarkets and resellers." />
            <ol className="space-y-4">
              {[
                { t: "Submit Inquiry", d: "Share your product list, volumes and delivery locations through our contact form." },
                { t: "Tailored Quote", d: "Our team prepares a competitive quote with pricing, MOQ and lead times." },
                { t: "Order & Onboard", d: "Confirm your order and become an Arrowhead trade partner." },
                { t: "Delivery & Support", d: "Receive on-time deliveries and ongoing account management." },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4 bg-background p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center bg-primary text-primary-foreground font-bold">{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-secondary">{step.t}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/contact" className="mt-6 inline-block bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-secondary">
              Bulk Inquiry
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
