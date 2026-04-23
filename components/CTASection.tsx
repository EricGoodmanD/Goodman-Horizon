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
      <div className="rounded-3xl bg-gradient-to-r from-brandBlue to-brandGreen p-8 text-white md:p-12 lg:px-10 lg:py-11 xl:p-12">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">{props.title}</h2>
            <p className="mt-4 max-w-2xl text-slate-100">{props.description}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 lg:mt-0 lg:justify-end lg:self-center">
            <Link href={props.primaryHref} className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brandBlue">
              {props.primaryLabel}
            </Link>
            <Link href={props.secondaryHref} className="inline-flex rounded-full border border-white px-6 py-3 text-sm font-semibold text-white">
              {props.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
