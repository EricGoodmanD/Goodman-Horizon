import Link from 'next/link';
import CTASection from '@/components/CTASection';
import TrustMarkers from '@/components/TrustMarkers';
import { services } from '@/components/site-data';

export default function Home() {
  return (
    <>
      <section className="bg-brandGray">
        <div className="section-shell grid items-center gap-10 md:grid-cols-2">
          <div className="animate-floatUp">
            <p className="text-sm font-semibold uppercase tracking-wider text-brandGreen">Serving Maryland Communities</p>
            <h1 className="heading-xl mt-4">Compassionate support systems for youth, adults, and families.</h1>
            <p className="mt-5 text-lg text-slate-700">
              Goodman Horizon delivers trusted case management and community-based services that improve stability,
              strengthen households, and connect people to life-changing resources.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/referrals" className="btn-primary">
                Submit a Referral
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="card animate-floatUp bg-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-brandGreen">Leadership-ready and referral-focused</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>• Clear intake pathways for agencies, schools, and health systems.</li>
              <li>• Culturally responsive support designed around dignity and outcomes.</li>
              <li>• Professional communication and timely community follow-through.</li>
            </ul>
          </div>
        </div>
      </section>

      <TrustMarkers />

      <section className="section-shell">
        <h2 className="heading-lg">Core Services</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          We provide coordinated care and practical support so each person and family can access services with
          confidence.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="card text-sm font-medium text-brandBlue">
              {service}
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Partner with Goodman Horizon"
        description="Whether you are a family, provider, school, or public agency, we are ready to coordinate responsive support and care navigation."
        primaryLabel="Start a Referral"
        primaryHref="/referrals"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
