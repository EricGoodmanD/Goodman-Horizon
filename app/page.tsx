import Link from 'next/link';
import CTASection from '@/components/CTASection';
import TrustMarkers from '@/components/TrustMarkers';
import { services } from '@/components/site-data';

const trustStats = [
  { label: 'Maryland Counties Served', value: 'Across the state' },
  { label: 'Response Commitment', value: 'Timely referral follow-up' },
  { label: 'Approach', value: 'Trauma-informed and person-centered' }
];

const testimonials = [
  {
    quote:
      'Goodman Horizon helped our family navigate a difficult season with dignity. We always felt heard and supported.',
    name: 'Family Caregiver',
    role: 'Parent Referral'
  },
  {
    quote:
      'Their team communicates clearly, moves quickly, and coordinates care in a way that builds confidence for providers and families.',
    name: 'Community Partner',
    role: 'Regional Service Agency'
  },
  {
    quote:
      'The referral process is professional and compassionate. We know people are met with urgency and respect.',
    name: 'Program Collaborator',
    role: 'School-Based Support Lead'
  }
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brandGray">
        <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-70" />
        <div className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-brandGreen/20 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brandBlue/20 blur-3xl animate-float-slow" />

        <div className="section-shell relative grid items-center gap-10 md:grid-cols-2">
          <div className="animate-floatUp">
            <p className="text-sm font-semibold uppercase tracking-wider text-brandGreen">Serving Maryland Communities</p>
            <h1 className="heading-xl mt-4 max-w-xl">
              Trusted care coordination that helps people feel supported, stable, and seen.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-700">
              Goodman Horizon partners with families, agencies, and providers to deliver compassionate case management
              and practical support for youth, adults, and families across Maryland.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/referrals" className="btn-primary">
                Submit a Referral
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustStats.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/70 bg-white/80 p-3 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brandGreen">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-brandBlue">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card animate-floatUp border-white/70 bg-white/85 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brandGreen">Referral confidence</p>
            <h2 className="mt-2 text-2xl font-semibold text-brandBlue">Professional support with human warmth</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              We combine leadership-ready coordination with community-centered care so every referral receives clear
              communication, responsive planning, and practical follow-through.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'Structured intake and care navigation for partners and families',
                'Cross-sector coordination with schools, health, and community providers',
                'Outcome-focused support designed around dignity and access'
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-brandGray p-3 transition duration-300 hover:bg-white">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brandGold" />
                  <p className="text-sm text-slate-700">{point}</p>
                </div>
              ))}
            </div>
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
            <div
              key={service}
              className="card group text-sm font-medium text-brandBlue transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-brandGreen/30 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <span>{service}</span>
                <span className="text-brandGreen transition duration-300 group-hover:translate-x-0.5">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-brandGreen">Stories of trust</p>
          <h2 className="mt-3 heading-lg">Families and partners rely on Goodman Horizon</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name + testimonial.role}
                className="rounded-2xl border border-slate-200 bg-brandGray p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
              >
                <p className="text-sm leading-6 text-slate-700">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-brandBlue">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">{testimonial.role}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 rounded-2xl bg-brandBlue p-6 text-white md:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold">Referral-ready</p>
              <p className="mt-1 text-sm text-slate-100">Clear intake and communication from first contact.</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Partner-aligned</p>
              <p className="mt-1 text-sm text-slate-100">Trusted by community organizations and public systems.</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Family-centered</p>
              <p className="mt-1 text-sm text-slate-100">Support designed around dignity, access, and outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="rounded-3xl bg-brandGray p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-brandGreen">Our mission in action</p>
          <h2 className="mt-3 heading-lg">Professional leadership with a deeply human approach</h2>
          <p className="mt-4 max-w-4xl text-slate-700">
            Goodman Horizon exists to make complex systems easier to navigate for people who need support most. We pair
            strategic coordination with compassionate relationships so youth, adults, and families can move forward with
            confidence.
          </p>
          <div className="mt-7">
            <Link href="/about" className="btn-secondary">
              Learn More About Our Mission
            </Link>
          </div>
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
