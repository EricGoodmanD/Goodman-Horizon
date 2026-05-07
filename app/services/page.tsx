import Link from 'next/link';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import { services } from '@/components/site-data';
import { serviceHrefByLabel } from '@/components/service-pages';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="Our multidisciplinary team provides practical, relationship-based services to increase stability, independence, and wellbeing."
      />
      <section className="section-shell">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service} href={serviceHrefByLabel[service]} className="card transition hover:border-brandAccent/30 hover:shadow-lg" aria-label={`Learn more about ${service}`}>
              <h2 className="text-lg font-semibold text-brandBlue">{service}</h2>
              <p className="mt-2 text-sm text-slate-700">
                Tailored interventions and personalized follow-up to make this service accessible and impactful.
              </p>
            </Link>
          ))}
        </div>
      </section>
      <CTASection
        title="Need support now?"
        description="Submit a referral and our team will coordinate next steps with care, urgency, and professionalism."
        primaryLabel="Submit Referral"
        primaryHref="/referrals"
        secondaryLabel="Who We Support"
        secondaryHref="/who-we-support"
      />
    </>
  );
}
