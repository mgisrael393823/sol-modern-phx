
import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  BookOpen,
  BarChart2,
  Target,
  Lightbulb,
  DollarSign,
  Rocket,
  Map,
  Lock,
  ArrowRight
} from "lucide-react";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

const sections = [
  { 
    id: 1, 
    title: "EXECUTIVE SUMMARY", 
    path: "/executive-summary", 
    description: "Overview of key findings and recommendations",
    icon: BookOpen,
    gated: false
  },
  { 
    id: 2, 
    title: "MARKET INTELLIGENCE", 
    path: "/market-intelligence", 
    description: "Analysis of current market conditions and trends",
    icon: BarChart2,
    gated: false
  },
  { 
    id: 3, 
    title: "COMPETITIVE LANDSCAPE", 
    path: "/competitive-landscape", 
    description: "Detailed assessment of competing properties",
    icon: Target,
    gated: false
  },
  { 
    id: 4, 
    title: "STRATEGIC OPPORTUNITIES", 
    path: "/strategic-opportunities", 
    description: "Identified opportunities for competitive advantage",
    icon: Lightbulb,
    gated: true
  },
  { 
    id: 5, 
    title: "PRICING & INCENTIVES", 
    path: "/pricing-framework", 
    description: "Recommended pricing strategy and incentive structure",
    icon: DollarSign,
    gated: true
  },
  { 
    id: 6, 
    title: "GO-TO-MARKET ROADMAP", 
    path: "/go-to-market", 
    description: "Timeline and implementation plan",
    icon: Rocket,
    gated: true
  },
  { 
    id: 7, 
    title: "OPPORTUNITY MAP", 
    path: "/opportunity-map", 
    description: "Visual representation of key opportunities",
    icon: Map,
    gated: false
  },
];

export default function TableOfContents() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#E57161] font-medium mb-1`}>ACCESS THE BLUEPRINT</h4>
        <div className="h-0.5 w-32 bg-[#E57161] mx-auto mb-6"></div>
        <h2 className={`${headingFont.className} text-3xl uppercase tracking-wide mb-4 text-[#333333]`}>BLUEPRINT SECTIONS</h2>
        <p className={`${bodyFont.className} text-[#777777] max-w-2xl mx-auto`}>
          Navigate through our comprehensive strategic framework, with premium sections gated for client access
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {sections.map((section) => {
          const Icon = section.icon;
          
          return (
            <Link 
              href={section.path} 
              key={section.id}
              className="group bg-white border border-[#E8E3D9] rounded-sm p-6 transition-all hover:border-[#E57161] flex flex-col h-full relative overflow-hidden"
            >
              {section.id % 3 === 0 && (
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#E57161] opacity-5"></div>
              )}
              
              <div className="flex items-start mb-5">
                <div className="p-2 mr-3 text-[#E57161]">
                  <Icon className="h-5 w-5" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className={`${headingFont.className} text-sm tracking-wide text-[#333333]`}>{section.title}</h3>
                    {section.gated && (
                      <Lock size={12} className="text-[#A0A0A0] ml-2" />
                    )}
                  </div>
                </div>
              </div>
              
              <p className={`${bodyFont.className} text-[#777777] text-sm mb-5 flex-1`}>{section.description}</p>
              
              <div className="mt-auto">
                <span className="inline-flex items-center text-xs uppercase tracking-wider font-medium text-[#E57161] group-hover:underline">
                  VIEW SECTION <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      
      <div className="mt-20 bg-[#FCFAF5] border border-[#E8E3D9] p-8 rounded-sm text-center">
        <h3 className={`${headingFont.className} text-xl uppercase tracking-wide mb-3 text-[#333333]`}>PREMIUM SECTIONS</h3>
        <p className={`${bodyFont.className} text-[#777777] mb-4 max-w-2xl mx-auto`}>
          Gated sections contain our proprietary strategic frameworks and implementation plans.
          Access is available to clients and qualified prospects.
        </p>
        <div className="inline-block bg-white border border-[#E8E3D9] px-6 py-3 rounded-sm">
          <p className={`${bodyFont.className} text-sm`}>CONTACT: <span className="text-[#E57161] font-medium">misrael00@gmail.com</span></p>
        </div>
      </div>
    </section>
  );
}
