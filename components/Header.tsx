import Link from 'next/link';
import AssetImage from './AssetImage';
import { siteAssets } from '@/config/siteAssets';
import { navLinks } from './site-data';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-all duration-300">
      <div className="laptop-header-row mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-1.5" aria-label="Goodman Horizon home">
          <span className="laptop-logo-wrap relative h-[5.1rem] w-[5.1rem] shrink-0 md:h-[6.7rem] md:w-[6.7rem]">
            <AssetImage
              src={siteAssets.brand.logo}
              alt="Goodman Horizon logo"
              fallbackLabel="Logo missing"
              fill
              sizes="(max-width: 768px) 82px, 107px"
              className="object-contain object-center"
            />
          </span>
          <span className="pt-0.5 text-lg font-bold tracking-wide text-brandBlue">Goodman Horizon</span>
        </Link>

        <nav className="laptop-nav hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-brandAccent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/referrals" className="btn-primary laptop-header-cta hidden md:inline-flex">
          Make a Referral
        </Link>
      </div>
    </header>
  );
}
