import BannerContent from "./BannerContent";

export default function Banner() {
  return (
    <section className="relative overflow-hidden rounded-lg border border-border bg-card">
      <div className="grid items-center gap-8 px-6 py-12 lg:grid-cols-2">
        <BannerContent />
      </div>
    </section>
  );
}
