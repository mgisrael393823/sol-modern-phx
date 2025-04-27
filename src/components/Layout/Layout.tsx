
import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      </main>
    </div>
  );
}
