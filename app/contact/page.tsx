import PageHero from '@/components/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Reach out for program information, partnerships, and service inquiries. Our team is ready to support you."
      />
      <section className="section-shell grid gap-8 md:grid-cols-2">
        <div className="card">
          <h2 className="text-2xl font-semibold text-brandBlue">Get in touch</h2>
          <p className="mt-4 text-slate-700">Email: info@goodmanhorizon.com</p>
          <p className="mt-2 text-slate-700">Web: goodmanhorizon.com</p>
          <p className="mt-2 text-slate-700">Phone: 202 735 1044</p>
          <p className="mt-2 text-slate-700">Hours: Monday - Friday, 8:30 AM - 5:00 PM</p>
          <p className="mt-2 text-slate-700">Serving youth, adults, and families throughout Maryland.</p>
        </div>
        <form className="card grid gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-brandBlue" htmlFor="name">
              Name
            </label>
            <input id="name" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-brandBlue" htmlFor="email">
              Email
            </label>
            <input id="email" type="email" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-brandBlue" htmlFor="message">
              Inquiry
            </label>
            <textarea id="message" rows={5} className="w-full rounded-lg border border-slate-300 px-4 py-3" />
          </div>
          <button type="submit" className="btn-primary w-fit">
            Send Inquiry
          </button>
        </form>
      </section>
    </>
  );
}
