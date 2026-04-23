import Link from 'next/link';
import { navLinks } from './site-data';

export default function Footer() {
  return (
    <footer className="bg-brandBlue text-white">
      <div className="section-shell grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold">Goodman Horizon</p>
          <p className="mt-3 max-w-sm text-sm text-slate-200">
            Community support and case management across Maryland for youth, adults, and families.
          </p>
          <p className="mt-3 text-sm text-slate-100">goodmanhorizon.com</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brandGold">Quick Links</p>
          <div className="mt-4 grid gap-2 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-100 hover:text-brandGold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brandGold">Contact</p>
          <p className="mt-4 text-sm text-slate-100">Serving communities throughout Maryland.</p>
          <p className="mt-2 text-sm text-slate-100">Email: info@goodmanhorizon.com</p>
          <p className="mt-1 text-sm text-slate-100">Web: goodmanhorizon.com</p>
          <p className="mt-1 text-sm text-slate-100">Phone: (410) 555-0108</p>
        </div>
      </div>
    </footer>
  );
}
