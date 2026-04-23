const markers = [
  'Maryland-focused support network',
  'Trauma-informed, person-centered approach',
  'Referral-ready response processes',
  'Cross-sector collaboration with community partners'
];

export default function TrustMarkers() {
  return (
    <section className="section-shell">
      <div className="rounded-3xl bg-brandGray p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-brandGreen">Why families and partners trust us</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {markers.map((marker) => (
            <div key={marker} className="rounded-xl bg-white p-5 text-sm font-medium text-brandBlue shadow-soft">
              {marker}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
