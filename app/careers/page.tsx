import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';

const openings = [
  'Case Manager',
  'Community Outreach Specialist',
  'Youth Mentor',
  'Peer Support Professional'
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        description="Join a purpose-driven team that supports Maryland communities through compassionate care, partnership, and leadership."
      />
      <section className="section-shell">
        <div className="card">
          <h2 className="text-2xl font-semibold text-brandBlue">Current Opportunities</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {openings.map((role) => (
              <li key={role} className="rounded-xl border border-slate-200 bg-brandGray px-4 py-3 text-sm font-medium text-brandBlue">
                {role}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-700">
            Send your resume and cover letter to careers@goodmanhorizon.com. We value lived experience, community
            knowledge, and professional excellence.
          </p>
        </div>
      </section>
      <CTASection
        title="Build impact with us"
        description="Become part of a team committed to practical support, equity, and meaningful outcomes for people and families."
        primaryLabel="Apply by Email"
        primaryHref="mailto:careers@goodmanhorizon.com"
        secondaryLabel="Contact Leadership"
        secondaryHref="/contact"
      />
    </>
  );
}
