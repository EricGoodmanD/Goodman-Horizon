import Link from 'next/link';

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export default function CTASection(props: CTASectionProps) {
  return (
    <section className="section-shell">
      <div className="rounded-3xl bg-gradient-to-r from-brandBlue to-brandGreen p-8 text-white md:p-12">
        <h2 className="text-2xl font-semibold md:text-3xl">{props.title}</h2>
        <p className="mt-4 max-w-2xl text-slate-100">{props.description}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href={props.primaryHref} className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brandBlue">
            {props.primaryLabel}
          </Link>
          <Link href={props.secondaryHref} className="inline-flex rounded-full border border-white px-6 py-3 text-sm font-semibold text-white">
            {props.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
