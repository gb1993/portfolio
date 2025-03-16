import PageTransition from "@/components/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <PageTransition />
      <div className="min-h-dvh animate-opacity-page">{children}</div>
    </div>
  );
}
