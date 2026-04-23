type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-brandGray">
      <div className="section-shell animate-floatUp">
        <h1 className="heading-lg">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">{description}</p>
      </div>
    </section>
  );
}
