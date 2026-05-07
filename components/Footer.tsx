import Link from 'next/link';
import { navLinks } from './site-data';

export default function Footer() {
  return (
    <footer className="bg-brandBlue text-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-7 pt-14 md:px-6 md:pt-16 lg:pb-8 lg:pt-[4.75rem] xl:pt-20 laptop-footer-shell">
        <div className="grid gap-12 border-b border-white/15 pb-11 md:grid-cols-[1.2fr_0.9fr_1fr] md:gap-10 lg:gap-14 lg:pb-12 laptop-footer-grid">
          <div className="md:pr-4">
            <p className="text-xl font-semibold tracking-tight lg:text-2xl">Goodman Horizon</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-200">
              Community support and case management across Maryland for youth, adults, and families.
            </p>
            <p className="mt-6 text-sm font-medium text-slate-100">goodmanhorizon.com</p>
          </div>
          <nav className="md:pl-2 laptop-footer-links" aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandCobalt">Quick Links</p>
            <div className="mt-6 grid gap-3 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-slate-100/95 transition-colors duration-200 hover:text-brandCobalt"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="md:text-left laptop-footer-contact">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brandCobalt">Contact</p>
            <div className="mt-6 space-y-2 text-sm text-slate-100/95">
              <p>Serving communities throughout Maryland.</p>
              <p>Email: info@goodmanhorizon.com</p>
              <p>Web: goodmanhorizon.com</p>
              <p>Phone: 202 735 1044</p>
            </div>
          </div>
        </div>
        <div className="pt-6 text-xs uppercase tracking-[0.18em] text-slate-300/90 laptop-footer-note">
          Built with care for Maryland communities
        </div>
      </div>
    </footer>
  );
}
