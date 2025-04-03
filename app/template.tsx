import FloatBar from "@/components/FloatBar";
import PageTransition from "@/components/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative overflow-hidden">
      <PageTransition />
      <FloatBar />
      {children}
    </div>
  );
}
