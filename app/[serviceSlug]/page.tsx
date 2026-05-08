import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AssetImage from '@/components/AssetImage';
import CTASection from '@/components/CTASection';
import { getServicePage, servicePages, servicePageSlugs } from '@/components/service-pages';

const siteUrl = 'https://www.goodmanhorizon.com';

export function generateStaticParams() {
  return servicePageSlugs.map((serviceSlug) => ({ serviceSlug }));
}

type ServiceRouteProps = {
  params: {
    serviceSlug: string;
  };
};

export function generateMetadata({ params }: ServiceRouteProps): Metadata {
  const service = getServicePage(params.serviceSlug);

  if (!service) {
    return {};
  }

  const canonical = `${siteUrl}/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      url: canonical,
      images: [
        {
          url: service.image,
          alt: service.imageAlt
        }
      ]
    }
  };
}

export default function ServiceDetailPage({ params }: ServiceRouteProps) {
  const service = getServicePage(params.serviceSlug);

  if (!service) {
    notFound();
  }

  const canonical = `${siteUrl}/${service.slug}`;
  const relatedServices = service.related
    .map((slug) => servicePages.find((related) => related.slug === slug))
    .filter((related): related is (typeof servicePages)[number] => Boolean(related));

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${siteUrl}/services`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: canonical
          }
        ]
      },
      {
        '@type': 'Service',
        name: service.title,
        serviceType: service.label,
        description: service.metaDescription,
        url: canonical,
        provider: {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: 'Goodman Horizon',
          url: siteUrl
        },
        areaServed: {
          '@type': 'State',
          name: 'Maryland'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c')
        }}
      />

      <section className="bg-brandGray">
        <div className="service-detail-hero-shell section-shell grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1.1fr)] lg:gap-14">
          <div className="animate-floatUp">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="font-medium text-brandAccent hover:text-brandBlue">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="font-medium text-brandAccent hover:text-brandBlue">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-700" aria-current="page">
                  {service.title}
                </li>
              </ol>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-violet-500">{service.heroEyebrow}</p>
            <h1 className="mt-4 heading-xl max-w-3xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{service.heroSummary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/referrals" className="btn-primary" aria-label={`Submit a referral for ${service.title}`}>
                Submit a Referral
              </Link>
              <Link href="/contact" className="btn-secondary" aria-label={`Contact Goodman Horizon about ${service.title}`}>
                Contact Our Team
              </Link>
            </div>
          </div>
          <div className="service-detail-image-card service-detail-hero-media relative w-full min-h-[18rem] overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-soft sm:min-h-[22rem] md:aspect-[16/9] md:min-h-0 lg:aspect-[16/9] lg:min-h-0 xl:aspect-[16/9]">
            <AssetImage
              src={service.image}
              alt={service.imageAlt}
              fallbackLabel={`${service.label} image missing`}
              fill
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 28rem, 35rem"
              className="service-detail-hero-image object-cover object-center"
              style={{ objectPosition: service.imagePosition }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandBlue/45 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)]">
        <article className="card">
          <p className="text-sm font-semibold uppercase tracking-wider text-brandAccent">Service overview</p>
          <h2 className="mt-3 text-2xl font-semibold text-brandBlue">Maryland support designed around real needs</h2>
          <p className="mt-4 leading-7 text-slate-700">{service.overview}</p>
        </article>
        <article className="card">
          <p className="text-sm font-semibold uppercase tracking-wider text-brandAccent">Who we support</p>
          <h2 className="mt-3 text-2xl font-semibold text-brandBlue">People and partners who can refer</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {service.whoWeSupport.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brandAccent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell pt-0">
        <div className="rounded-3xl border border-sky-100 bg-sky-50/50 p-6 shadow-soft md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-brandAccent">How referrals work</p>
          <h2 className="mt-3 heading-lg">A clear path from first contact to coordinated next steps</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.referralSteps.map((step, index) => (
              <article key={step} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-wider text-brandAccent">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brandAccent">FAQ</p>
          <h2 className="mt-3 heading-lg">Frequently asked questions</h2>
          <div className="mt-7 space-y-4">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="card">
                <h3 className="text-lg font-semibold text-brandBlue">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="card h-fit">
          <p className="text-sm font-semibold uppercase tracking-wider text-brandAccent">Related services</p>
          <h2 className="mt-3 text-2xl font-semibold text-brandBlue">Explore connected support</h2>
          <div className="mt-5 space-y-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.slug}`}
                className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-brandBlue transition hover:border-brandAccent/40 hover:bg-sky-50"
                aria-label={`Learn more about ${related.title}`}
              >
                {related.label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <CTASection
        title={`Start a referral for ${service.label}`}
        description="Goodman Horizon coordinates responsive Maryland support with care, clarity, and respect for every person and family."
        primaryLabel="Submit Referral"
        primaryHref="/referrals"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}
