import Link from 'next/link';
import { navLinks } from './site-data';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-bold tracking-wide text-brandBlue">
          Goodman Horizon
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-brandGreen">
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
