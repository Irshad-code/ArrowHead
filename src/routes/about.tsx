import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero, SectionHeader } from "@/components/SectionHeader";
import { Target, Eye, Heart } from "lucide-react";
import team from "@/assets/team-meeting.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Arrowhead General Trading" },
      { name: "description", content: "Learn about Arrowhead General Trading LLC — our mission, vision, and expertise distributing FMCG brands across Dubai and the UAE." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero title="About Arrowhead" subtitle="A Dubai-based FMCG distributor connecting world-class brands with the UAE retail landscape." />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <img src={team} alt="Arrowhead team meeting" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
          <div>
            <SectionHeader eyebrow="Our Story" title="Building reliable supply chains for the modern UAE retailer." />
            <div className="space-y-4 text-muted-foreground">
              <p>
                Arrowhead General Trading LLC was founded with a simple ambition — to be the
                most reliable FMCG partner in the Emirates. Today we serve hundreds of retail
                outlets, supermarket chains and HoReCa customers across Dubai and the wider UAE.
              </p>
              <p>
                Our team brings decades of combined experience in FMCG sourcing, logistics, and
                retail execution. From category planning to last-mile delivery, we manage every
                touchpoint so our brand partners and trade customers can focus on what they do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <SectionHeader eyebrow="What Drives Us" title="Mission, Vision & Values" center />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", body: "To deliver FMCG excellence by connecting trusted brands with retailers across the UAE through dependable distribution." },
              { icon: Eye, title: "Our Vision", body: "To be the most respected and customer-focused FMCG distribution partner in the Gulf region." },
              { icon: Heart, title: "Our Values", body: "Integrity, reliability, partnership, and an obsession with quality and service." },
            ].map((c) => (
              <div key={c.title} className="bg-background p-8 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center bg-primary text-primary-foreground">
                  <c.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-secondary">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <SectionHeader eyebrow="Our Expertise" title="End-to-end FMCG distribution capability." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "500+", l: "Retail Outlets Served" },
              { n: "1000+", l: "SKUs in Portfolio" },
              { n: "50+", l: "Brand Partners" },
              { n: "100%", l: "UAE Coverage" },
            ].map((s) => (
              <div key={s.l} className="border-l-4 border-primary bg-muted p-6">
                <div className="text-3xl font-bold text-secondary">{s.n}</div>
                <div className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
