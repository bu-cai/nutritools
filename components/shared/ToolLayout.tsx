import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface ToolLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export default function ToolLayout({ children, title, description, badge }: ToolLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="border-b border-gray-100 bg-gradient-to-b from-green-50/50 to-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {badge}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{description}</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
