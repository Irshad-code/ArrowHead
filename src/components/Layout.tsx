import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/news", label: "News & Events" },
  { to: "/careers", label: "Careers" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link to="/" aria-label="Arrowhead Home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                    active ? "text-primary underline underline-offset-8" : "text-foreground hover:text-primary"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <Link
            to="/contact"
            className="hidden bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-secondary lg:block"
          >
            Contact Us
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t bg-background lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-semibold uppercase tracking-wide hover:text-primary"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 bg-primary px-6 py-3 text-center text-sm font-bold uppercase text-primary-foreground"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">
                Your trusted FMCG distribution partner across Dubai and the UAE since day one.
              </p>
              <div className="mt-4 flex gap-3">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="grid h-9 w-9 place-items-center bg-background text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="text-muted-foreground hover:text-primary">{n.label}</Link>
                  </li>
                ))}
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Beverages</li>
                <li>Snacks</li>
                <li>Packaged Foods</li>
                <li>Personal Care</li>
                <li>Household Essentials</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary">Get in Touch</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><MapPin size={16} className="mt-0.5 shrink-0 text-primary" /><span>Dubai, United Arab Emirates</span></li>
                <li className="flex gap-2 items-start"><Phone size={16} className="mt-0.5 shrink-0 text-primary" /><span>+971 4 000 0000</span></li>
                <li className="flex gap-2 items-start"><Mail size={16} className="mt-0.5 shrink-0 text-primary" /><span>info@arrowheadtrading.ae</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Arrowhead General Trading LLC. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
