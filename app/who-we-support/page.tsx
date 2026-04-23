import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';

const supportGroups = [
  {
    name: 'Youth',
    description: 'Mentorship, school and life coordination, behavioral health support, and crisis response services.'
  },
  {
    name: 'Adults',
    description: 'Housing and employment support, resource navigation, peer supports, and stability planning.'
  },
  {
    name: 'Families',
    description: 'Family-centered case management, advocacy, referrals, and practical support for whole-household wellbeing.'
  }
];

export default function WhoWeSupportPage() {
  return (
    <>
      <PageHero
        title="Who We Support"
        description="Goodman Horizon supports youth, adults, and families with individualized plans shaped by strengths, goals, and community context."
      />
      <section className="section-shell grid gap-5 md:grid-cols-3">
        {supportGroups.map((group) => (
          <article key={group.name} className="card">
            <h2 className="text-2xl font-semibold text-brandBlue">{group.name}</h2>
            <p className="mt-3 text-slate-700">{group.description}</p>
          </article>
        ))}
      </section>
      <CTASection
        title="Not sure where to start?"
        description="Our team can help determine the best pathway for support and coordinate services quickly."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact"
        secondaryLabel="Make a Referral"
        secondaryHref="/referrals"
      />
    </>
  );
}
