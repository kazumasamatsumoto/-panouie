import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-lavender-500 to-lavender-600 text-white shadow-lg shadow-lavender-500/30 hover:shadow-xl hover:shadow-lavender-500/45"
      : "border border-plum-200 text-plum-700 hover:border-lavender-400 hover:text-lavender-600";

  return (
    <Link href={href} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
    </Link>
  );
}
