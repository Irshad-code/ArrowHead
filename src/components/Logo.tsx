import logoMark from "@/assets/arrowhead-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoMark}
        alt="Arrowhead General Trading logo"
        className="h-10 w-auto"
      />
      <div className="leading-tight">
        <div className="text-[1.05rem] font-bold tracking-wider text-primary">ARROWHEAD</div>
        <div className="text-[0.6rem] tracking-[0.25em] text-foreground/70">GENERAL TRADING</div>
      </div>
    </div>
  );
}
