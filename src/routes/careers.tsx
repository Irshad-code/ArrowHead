import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero, SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";
import { Briefcase, MapPin } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Arrowhead General Trading" },
      { name: "description", content: "Join Arrowhead General Trading — open roles in distribution, sales and logistics across the UAE." },
    ],
  }),
  component: Careers,
});

const openings = [
  { title: "Sales Executive – Modern Trade", location: "Dubai, UAE", type: "Full-time" },
  { title: "Warehouse Supervisor", location: "Jebel Ali, Dubai", type: "Full-time" },
  { title: "Distribution Driver (LMV/HMV)", location: "Dubai, UAE", type: "Full-time" },
  { title: "Category Manager – Beverages", location: "Dubai, UAE", type: "Full-time" },
];

function Careers() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero title="Careers at Arrowhead" subtitle="Be part of a growing FMCG distribution team shaping the UAE retail landscape." />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <SectionHeader eyebrow="Open Positions" title="Current opportunities" />
          <div className="space-y-3">
            {openings.map((o) => (
              <div key={o.title} className="flex flex-col gap-2 border bg-background p-5 transition-all hover:border-primary md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-secondary">{o.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {o.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {o.type}</span>
                  </div>
                </div>
                <a href="#apply" className="bg-primary px-5 py-2 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-secondary">Apply</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-20">
          <SectionHeader eyebrow="Apply Now" title="Submit your application" center />
          {sent ? (
            <div className="bg-background p-8 text-center">
              <p className="text-lg font-semibold text-secondary">Thanks! We've received your application.</p>
              <p className="mt-2 text-sm text-muted-foreground">Our HR team will reach out if your profile matches an open role.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-4 bg-background p-6 md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Full Name" required />
                <Input label="Email" type="email" required />
                <Input label="Phone" required />
                <Input label="Position of Interest" required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-secondary">Message</label>
                <textarea required rows={4} className="w-full border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-secondary">Upload CV</label>
                <input type="file" className="w-full border bg-background px-3 py-2 text-sm" />
              </div>
              <button className="w-full bg-primary py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-secondary">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Input({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-secondary">{label}</label>
      <input type={type} required={required} className="w-full border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
    </div>
  );
}
