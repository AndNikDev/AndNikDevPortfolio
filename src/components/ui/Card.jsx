import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] overflow-hidden relative",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 pb-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={cn("text-xl font-semibold leading-none tracking-tight font-geist text-white", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("text-zinc-400 font-geistmono text-sm leading-relaxed", className)} {...props}>
      {children}
    </div>
  );
}
