import PageTransition from "@/components/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageTransition />
      <div className="animate-opacity-page">{children}</div>
    </>
  );
}
