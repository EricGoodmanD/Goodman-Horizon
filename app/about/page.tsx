import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Goodman Horizon"
        description="We are a Maryland-based community support and case management organization dedicated to helping people navigate systems, access care, and build long-term stability."
      />
      <section className="section-shell grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-2xl font-semibold text-brandBlue">Our Mission</h2>
          <p className="mt-4 text-slate-700">
            To provide trusted, person-centered support services that uplift youth, adults, and families while
            strengthening communities across Maryland.
          </p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold text-brandBlue">Our Values</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Respect and dignity for every person</li>
            <li>• Accountability and professional excellence</li>
            <li>• Collaboration with families and community partners</li>
            <li>• Equity in access to support and opportunity</li>
          </ul>
        </div>
      </section>
      <CTASection
        title="Connect with our leadership team"
        description="Learn how Goodman Horizon can align with your organizational goals, referrals, and outreach priorities."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
