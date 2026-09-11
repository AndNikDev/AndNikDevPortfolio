import { codeToHtml } from "shiki";
import CopyButton from "./CopyButton";

function getCodeString(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getCodeString).join("");
  if (children?.props?.children) return getCodeString(children.props.children);
  return "";
}

export default async function CodeBlock({ children, className }) {
  const lang = className?.replace(/^language-/, "") || "text";
  const code = getCodeString(children).replace(/\n$/, "");

  let html = "";
  try {
    html = await codeToHtml(code, { lang, theme: "github-dark" });
  } catch {
    try {
      html = await codeToHtml(code, { lang: "text", theme: "github-dark" });
    } catch {
      html = "";
    }
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-[#24292e]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/40">
        <span className="text-xs font-geistmono text-zinc-400">{lang}</span>
        <CopyButton text={code} />
      </div>
      {html ? (
        <div
          className="overflow-x-auto text-sm leading-relaxed [&_pre]:p-4 [&_pre]:!bg-transparent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="p-4 text-sm text-zinc-300 overflow-x-auto">{code}</pre>
      )}
    </div>
  );
}
