'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/positions', label: 'Positions We Fill' },
    { href: '/industries', label: 'Industries' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">BuilderAssist</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  pathname === link.href
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-slate-700 hover:text-orange-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-orange-600 text-white px-6 py-2 rounded font-semibold hover:bg-orange-700 transition"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
