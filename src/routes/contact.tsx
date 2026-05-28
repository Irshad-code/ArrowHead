import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/SectionHeader";
import { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Arrowhead General Trading" },
      { name: "description", content: "Get in touch with Arrowhead General Trading for FMCG distribution, partnerships, and bulk inquiries in Dubai and the UAE." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="Let's talk distribution, partnerships, and how Arrowhead can power your shelves." />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-5 lg:px-8 lg:py-20">
          <div className="lg:col-span-2 space-y-5">
            <InfoRow icon={MapPin} title="Office & Warehouse" lines={["Arrowhead General Trading LLC", "Dubai, United Arab Emirates"]} />
            <InfoRow icon={Phone} title="Phone" lines={["+971 4 000 0000", "+971 50 000 0000"]} />
            <InfoRow icon={Mail} title="Email" lines={["info@arrowheadtrading.ae", "sales@arrowheadtrading.ae"]} />
            <InfoRow icon={Clock} title="Working Hours" lines={["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"]} />
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-muted p-10 text-center">
                <h3 className="text-2xl font-bold text-secondary">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">Your message has been received. Our team will respond shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4 border bg-background p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-secondary">Send us a message</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name" required />
                  <Field label="Email" type="email" required />
                  <Field label="Phone" required />
                  <Field label="Company" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-secondary">Message</label>
                  <textarea required rows={5} className="w-full border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                </div>
                <button className="w-full bg-primary py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-secondary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-8 lg:pb-20">
          <iframe
            title="Arrowhead location in Dubai"
            src="https://www.google.com/maps?q=Dubai&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}

function InfoRow({ icon: Icon, title, lines }: { icon: any; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4 border bg-background p-5">
      <div className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-primary-foreground">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold text-secondary">{title}</h4>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground">{l}</p>
        ))}
      </div>
    </div>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-secondary">{label}</label>
      <input type={type} required={required} className="w-full border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
    </div>
  );
}
