import Link from 'next/link';
import CTASection from '@/components/CTASection';
import TrustMarkers from '@/components/TrustMarkers';
import { services } from '@/components/site-data';
import AssetImage from '@/components/AssetImage';
import { siteAssets } from '@/config/siteAssets';

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

const photographySections = [
  // Non-developer note: each image path below maps directly to /public/images/<section-folder>/.
  // Replace files there (keeping the same filenames) to update homepage imagery.
  {
    title: 'Family Support',
    description: 'Warm, practical care coordination for households navigating complex needs.',
    image: siteAssets.sections.familySupport.primary
  },
  {
    title: 'Youth Mentorship',
    description: 'Trusted guidance that helps young people build confidence and momentum.',
    image: siteAssets.sections.youthMentorship.primary
  },
  {
    title: 'Case Management Meetings',
    description: 'Professional planning sessions focused on outcomes, dignity, and access.',
    image: siteAssets.sections.caseManagement.primary
  },
  {
    title: 'Behavioral Health Support',
    description: 'Compassionate conversations that center emotional wellness and stability.',
    image: siteAssets.sections.behavioralHealth.primary
  },
  {
    title: 'Community Outreach',
    description: 'Relationship-based partnerships built directly in neighborhoods and communities.',
    image: siteAssets.sections.communityOutreach.primary
  },
  {
    title: 'Referral Consultations',
    description: 'Clear intake conversations that make next steps easy for families and agencies.',
    image: siteAssets.sections.referralConsultations.primary
  },
  {
    title: 'Supportive Housing Coordination',
    description: 'Collaborative support for housing pathways, safety, and long-term stability.',
    image: siteAssets.sections.housingSupport.primary
  },
  {
    title: 'Professional Care & Trust-Building',
    description: 'Human-centered support moments that strengthen confidence and belonging.',
    image: siteAssets.sections.trustCare.primary
  }
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brandGray laptop-hero-breakpoint-debug">
        <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-70" />
        <div className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-brandGreen/20 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brandBlue/20 blur-3xl animate-float-slow" />

        <div className="section-shell laptop-hero-shell relative grid items-center gap-10 md:grid-cols-2 lg:min-h-[36rem] lg:gap-14 xl:gap-16">
          <div className="animate-floatUp laptop-hero-left lg:pr-4 xl:pr-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brandGreen">Serving Maryland Communities</p>
            <h1 className="heading-xl laptop-hero-title mt-5 max-w-xl lg:mt-6">
              Trusted care coordination that helps people feel supported, stable, and seen.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-slate-700 laptop-hero-copy lg:mt-8">
              Goodman Horizon partners with families, agencies, and providers to deliver compassionate case management
              and practical support for youth, adults, and families across Maryland.
            </p>
            <div className="mt-10 flex flex-wrap gap-3.5 laptop-hero-actions lg:mt-11">
              <Link href="/referrals" className="btn-primary">
                Submit a Referral
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
            <div className="mt-10 grid gap-3.5 laptop-hero-stats sm:grid-cols-3 lg:mt-12">
              {trustStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/70 bg-white/80 p-3 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brandGreen">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-brandBlue">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card animate-floatUp border-white/80 bg-white/90 p-7 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:shadow-xl laptop-hero-card lg:mx-auto lg:w-full lg:max-w-[33rem] lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brandGreen">Referral confidence</p>
            <h2 className="mt-2 text-2xl font-semibold text-brandBlue laptop-hero-card-title">Professional support with human warmth</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              We combine leadership-ready coordination with community-centered care so every referral receives clear
              communication, responsive planning, and practical follow-through.
            </p>
            <div className="mt-7 space-y-3.5 laptop-hero-card-points">
              {[
                'Structured intake and care navigation for partners and families',
                'Cross-sector coordination with schools, health, and community providers',
                'Outcome-focused support designed around dignity and access'
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl bg-brandGray p-3 transition duration-300 hover:bg-white laptop-hero-card-point"
                >
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brandGold" />
                  <p className="text-sm text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustMarkers />

      <section className="section-shell laptop-support-section pt-0">
        <p className="text-sm font-semibold uppercase tracking-wider text-brandGreen">Real-world support in action</p>
        <h2 className="mt-3 heading-lg laptop-support-title">Professional, human-centered care moments across our work</h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Curated photography placeholders below are designed to be replaced with official Goodman Horizon imagery while
          preserving premium composition, trust-building tone, and referral-focused storytelling.
        </p>
        <div className="mt-8 grid gap-5 laptop-support-grid md:grid-cols-2 xl:grid-cols-4">
          {photographySections.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-xl laptop-support-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden laptop-support-media">
                <AssetImage
                  src={item.image}
                  alt={`${item.title} photography placeholder`}
                  fallbackLabel={`${item.title} image missing`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandBlue/55 to-transparent" />
                <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brandBlue">
                  {item.title}
                </p>
              </div>
              <div className="p-4 laptop-support-content">
                <p className="text-sm text-slate-700">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0 lg:pt-3 xl:pt-2 laptop-core-section">
        <h2 className="heading-lg">Core Services</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          We provide coordinated care and practical support so each person and family can access services with
          confidence.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 xl:mt-11 xl:gap-x-7 xl:gap-y-7 laptop-core-grid">
          {services.map((service) => (
            <div
              key={service}
              className="card group text-sm font-medium text-brandBlue transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-brandGreen/30 hover:shadow-xl lg:p-7 laptop-core-card"
            >
              <div className="flex items-center justify-between gap-4">
                <span>{service}</span>
                <span className="text-brandGreen transition duration-300 group-hover:translate-x-0.5">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0 lg:pt-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-brandGreen">Stories of trust</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-brandBlue md:text-4xl lg:text-[2.15rem] xl:text-4xl">
            Families and partners rely on Goodman Horizon
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3 lg:mt-10 lg:gap-6 xl:mt-11 xl:gap-7">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name + testimonial.role}
                className="rounded-2xl border border-slate-200 bg-brandGray p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft lg:p-7"
              >
                <p className="text-sm leading-6 text-slate-700">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-brandBlue">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">{testimonial.role}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-4 rounded-2xl bg-brandBlue p-6 text-white md:grid-cols-3 lg:mt-11 lg:gap-5 lg:p-7">
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
