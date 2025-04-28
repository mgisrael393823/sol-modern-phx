
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { 
  Home,
  BarChart2,
  Target,
  LineChart,
  PieChart,
  Rocket,
  Map,
  Lock
} from 'lucide-react';

const navItems = [
  { name: 'Executive Summary', path: '/executive-summary', icon: Home },
  { name: 'Market Intelligence', path: '/market-intelligence', icon: BarChart2 },
  { name: 'Competitive Landscape Analysis', path: '/competitive-landscape', icon: Target },
  { name: 'Strategic Opportunities', path: '/strategic-opportunities', icon: LineChart, gated: true },
  { name: 'Pricing & Incentive Framework', path: '/pricing-framework', icon: PieChart, gated: true },
  { name: 'Go-to-Market Roadmap', path: '/go-to-market', icon: Rocket, gated: true },
  { name: 'Opportunity Map', path: '/opportunity-map', icon: Map },
];

export function Navigation() {
  const router = useRouter();
  
  return (
    <nav className='w-64 bg-white border-r border-gray-100 h-screen fixed left-0 top-0 p-4 overflow-y-auto'>
      <div className='space-y-1'>
        <div className='px-3 py-4 border-b border-gray-100 mb-4'>
          <Link href="/">
            <h2 className='text-xl font-semibold mb-1'>SOL Modern</h2>
          </Link>
          <p className='text-sm text-gray-500 mb-2'>Lease-Up Strategy Blueprint</p>
        </div>
        
        {navItems.map((item) => {
          const isActive = router.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                ${isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
              `}
            >
              <Icon className='mr-3 h-5 w-5' />
              <span>{item.name}</span>
              {item.gated && (
                <Lock size={14} className='ml-2 text-gray-400' />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
