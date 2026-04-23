import Link from 'next/link';
import { navLinks } from './site-data';

export default function Footer() {
  return (
    <footer className="bg-brandBlue text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6 md:py-16 lg:gap-x-12 lg:gap-y-10 lg:py-[4.25rem] xl:py-16">
        <div className="md:pr-4">
          <p className="text-xl font-semibold tracking-tight">Goodman Horizon</p>
          <p className="mt-3 max-w-sm text-sm text-slate-200">
            Community support and case management across Maryland for youth, adults, and families.
          </p>
          <p className="mt-4 text-sm font-medium text-slate-100">goodmanhorizon.com</p>
        </div>
        <div className="md:pl-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandGold">Quick Links</p>
          <div className="mt-5 grid gap-2.5 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-medium text-slate-100/95 transition-colors duration-200 hover:text-brandGold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:justify-self-end md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandGold">Contact</p>
          <div className="mt-5 space-y-1.5 text-sm text-slate-100/95">
            <p>Serving communities throughout Maryland.</p>
            <p>Email: info@goodmanhorizon.com</p>
            <p>Web: goodmanhorizon.com</p>
            <p>Phone: (410) 555-0108</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
