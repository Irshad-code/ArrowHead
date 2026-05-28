import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/SectionHeader";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events | Arrowhead General Trading" },
      { name: "description", content: "Latest updates, product launches and industry insights from Arrowhead General Trading." },
    ],
  }),
  component: News,
});

const posts = [
  { date: "May 20, 2026", title: "Arrowhead expands cold-chain capacity in Dubai", excerpt: "Our new climate-controlled facility doubles capacity for chilled and frozen FMCG distribution." },
  { date: "April 12, 2026", title: "Five new brand partnerships announced", excerpt: "We are proud to welcome five leading international FMCG brands to our UAE distribution portfolio." },
  { date: "March 03, 2026", title: "FMCG trends shaping UAE retail in 2026", excerpt: "From premiumisation to e-commerce — here's how the UAE FMCG landscape is evolving this year." },
  { date: "February 18, 2026", title: "Arrowhead at Gulfood 2026", excerpt: "Our team showcased category innovations and met with brand partners at the region's largest food expo." },
];

function News() {
  return (
    <Layout>
      <PageHero title="News & Events" subtitle="Company milestones, brand launches and FMCG industry insights." />
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <article key={p.title} className="group flex flex-col border bg-background p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
                  <Calendar size={14} /> {p.date}
                </div>
                <h3 className="mt-3 text-xl font-bold text-secondary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-secondary">
                  Read More <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
