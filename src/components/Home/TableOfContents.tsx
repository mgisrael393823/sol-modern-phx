
import React from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

const sections = [
  { 
    id: 1, 
    title: "Executive Summary", 
    path: "/executive-summary", 
    description: "Overview of key findings and recommendations",
    gated: false
  },
  { 
    id: 2, 
    title: "Market Intelligence", 
    path: "/market-intelligence", 
    description: "Analysis of current market conditions and trends",
    gated: false
  },
  { 
    id: 3, 
    title: "Competitive Landscape Analysis", 
    path: "/competitive-landscape", 
    description: "Detailed assessment of competing properties",
    gated: false
  },
  { 
    id: 4, 
    title: "Strategic Opportunities", 
    path: "/strategic-opportunities", 
    description: "Identified opportunities for competitive advantage",
    gated: true
  },
  { 
    id: 5, 
    title: "Pricing & Incentive Framework", 
    path: "/pricing-framework", 
    description: "Recommended pricing strategy and incentive structure",
    gated: true
  },
  { 
    id: 6, 
    title: "Go-to-Market Roadmap", 
    path: "/go-to-market", 
    description: "Timeline and implementation plan",
    gated: true
  },
  { 
    id: 7, 
    title: "Opportunity Map", 
    path: "/opportunity-map", 
    description: "Visual representation of key opportunities",
    gated: false
  },
];

export default function TableOfContents() {
  return (
    <section className="max-w-4xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link 
            href={section.path} 
            key={section.id}
            className="group border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-medium">{section.title}</h3>
              {section.gated && (
                <Lock size={16} className="text-gray-400" />
              )}
            </div>
            <p className="text-gray-600 text-sm">{section.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
