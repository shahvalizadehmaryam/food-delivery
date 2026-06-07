import Image from "next/image";
import BannerContent from "./BannerContent";

export default function Banner() {
  return (
    <section className="relative min-h-[320px] overflow-hidden rounded-lg border border-border">
      <Image
        src="/images/banner/banner.svg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10 grid items-center gap-8 py-12 lg:grid-cols-2">
        <BannerContent />
      </div>
    </section>
  );
}
