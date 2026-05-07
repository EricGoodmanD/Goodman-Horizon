import PageHero from '@/components/PageHero';

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        title="Referrals"
        description="Use this form to submit a referral for services. We welcome referrals from agencies, schools, providers, and families."
      />
      <section className="section-shell">
        <form className="card grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-brandBlue" htmlFor="organization">
              Referring Organization
            </label>
            <input id="organization" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-brandBlue" htmlFor="contactName">
              Contact Name
            </label>
            <input id="contactName" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-brandBlue" htmlFor="contactEmail">
              Contact Email
            </label>
            <input id="contactEmail" type="email" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-brandBlue" htmlFor="participantGroup">
              Participant Group
            </label>
            <select id="participantGroup" className="w-full rounded-lg border border-slate-300 px-4 py-3">
              <option>Youth</option>
              <option>Adult</option>
              <option>Family</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-brandBlue" htmlFor="urgency">
              Urgency Level
            </label>
            <select id="urgency" className="w-full rounded-lg border border-slate-300 px-4 py-3">
              <option>Routine</option>
              <option>Priority</option>
              <option>Immediate</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-brandBlue" htmlFor="needs">
              Summary of Needs
            </label>
            <textarea id="needs" rows={5} className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="btn-primary" aria-label="Submit referral form">
              Submit Referral
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
