
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Lock } from "lucide-react";

const navItems = [
  { name: "Executive Summary", path: "/executive-summary" },
  { name: "Market Intelligence", path: "/market-intelligence" },
  { name: "Competitive Landscape Analysis", path: "/competitive-landscape" },
  { name: "Strategic Opportunities", path: "/strategic-opportunities", gated: true },
  { name: "Pricing & Incentive Framework", path: "/pricing-framework", gated: true },
  { name: "Go-to-Market Roadmap", path: "/go-to-market", gated: true },
  { name: "Opportunity Map", path: "/opportunity-map" },
];

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className="py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`
                px-4 py-2 rounded-md transition-colors
                ${router.pathname === item.path 
                  ? "bg-gray-100 text-gray-900" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                flex items-center gap-1.5
              `}
            >
              {item.name}
              {item.gated && (
                <Lock size={14} className="text-gray-400" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
