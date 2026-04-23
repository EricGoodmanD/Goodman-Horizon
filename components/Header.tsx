import Link from 'next/link';
import AssetImage from './AssetImage';
import { siteAssets } from '@/config/siteAssets';
import { navLinks } from './site-data';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-all duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Goodman Horizon home">
          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm md:h-16 md:w-16">
            <AssetImage
              src={siteAssets.brand.logo}
              alt="Goodman Horizon logo"
              fallbackLabel="Logo missing"
              fill
              sizes="(max-width: 768px) 56px, 64px"
              className="object-contain object-center p-0 scale-[1.35]"
            />
          </span>
          <span className="text-lg font-bold tracking-wide text-brandBlue">Goodman Horizon</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-brandGreen"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/referrals" className="btn-primary hidden md:inline-flex">
          Make a Referral
        </Link>
      </div>
    </header>
  );
}
