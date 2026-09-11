import { Info, TriangleAlert, Lightbulb, CircleAlert } from "lucide-react";

const styles = {
  info: { icon: Info, border: "border-cyan-500/40", bg: "bg-cyan-500/10", text: "text-cyan-400" },
  warning: { icon: TriangleAlert, border: "border-amber-500/40", bg: "bg-amber-500/10", text: "text-amber-400" },
  tip: { icon: Lightbulb, border: "border-emerald-500/40", bg: "bg-emerald-500/10", text: "text-emerald-400" },
  danger: { icon: CircleAlert, border: "border-red-500/40", bg: "bg-red-500/10", text: "text-red-400" },
};

export default function Callout({ type = "info", title, children }) {
  const config = styles[type] || styles.info;
  const Icon = config.icon;

  return (
    <div className={`my-6 rounded-xl border ${config.border} ${config.bg} p-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`${config.text} mt-0.5 shrink-0`} size={18} />
        <div className="text-sm text-zinc-300 leading-relaxed">
          {title && <p className={`font-medium mb-1 ${config.text}`}>{title}</p>}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
